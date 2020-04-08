# Pleroma: A lightweight social networking server
# Copyright © 2017-2020 Pleroma Authors <https://pleroma.social/>
# SPDX-License-Identifier: AGPL-3.0-only

defmodule Mix.Tasks.Pleroma.Frontend do
  use Mix.Task

  import Mix.Pleroma

  # alias Pleroma.Config

  @shortdoc "Manages bundled Pleroma frontends"
  @moduledoc File.read!("docs/administration/CLI_tasks/frontend.md")

  @known_frontends ~w(pleroma kenoma mastodon admin)
  @pleroma_gitlab_host "git.pleroma.social"
  @projects %{
    "pleroma" => "pleroma/pleroma-fe",
    "kenoma" => "lambadalambda/kenoma",
    "admin" => "pleroma/admin-fe",
    "mastodon" => "pleroma/mastofe"
  }

  def run(["install", "none" | _args]) do
    shell_info("Skipping frontend installation because none was requested")
  end

  def run(["install", unknown_fe | _args]) when unknown_fe not in @known_frontends do
    shell_error(
      "Frontend #{unknown_fe} is not known. Known frontends are: #{
        Enum.join(@known_frontends, ", ")
      }"
    )
  end

  def run(["install", frontend | args]) do
    {:ok, _} = Application.ensure_all_started(:pleroma)

    {options, [], []} =
      OptionParser.parse(
        args,
        strict: [
          ref: :string
        ]
      )

    ref = suggest_ref(options, frontend)

    %{"name" => bundle_name, "url" => bundle_url} =
      get_bundle_meta(ref, @pleroma_gitlab_host, @projects[frontend])

    shell_info("Installing #{frontend} frontend (version: #{bundle_name}, url: #{bundle_url})")

    dest = Path.join([Pleroma.Config.get!([:instance, :static_dir]), "frontends", frontend, ref])

    case install_bundle(bundle_url, dest) do
      :ok ->
        shell_info("Installed!")

      {:error, error} ->
        shell_error("Error: #{inspect(error)}")
    end
  end

  defp suggest_ref(options, frontend) do
    case Pleroma.Config.get([:frontends, String.to_atom(frontend)]) do
      nil ->
        primary_fe_config = Pleroma.Config.get([:frontends, :primary])

        case primary_fe_config["name"] == frontend do
          true ->
            primary_fe_config["ref"]

          false ->
            nil
        end

      val ->
        val
    end
    |> case do
      nil ->
        stable_pleroma? = Pleroma.Application.stable?()

        current_stable_out =
          case stable_pleroma? do
            true -> "stable"
            false -> "develop"
          end

        get_option(
          options,
          :ref,
          "You are currently running #{current_stable_out} version of Pleroma backend. What version of \"#{
            frontend
          }\" frontend you want to install? (\"stable\", \"develop\" or specific ref)",
          current_stable_out
        )

      config_value ->
        current_ref =
          case config_value do
            %{"ref" => ref} -> ref
            ref -> ref
          end

        get_option(
          options,
          :ref,
          "You are currently running #{current_ref} version of \"#{frontend}\" frontend. What version do you want to install? (\"stable\", \"develop\" or specific ref)",
          current_ref
        )
    end
  end

  defp get_bundle_meta("develop", gitlab_base_url, project) do
    url = "#{gitlab_api_url(gitlab_base_url, project)}/repository/branches"

    http_client = http_client()
    %{status: 200, body: json} = Tesla.get!(http_client, url)

    %{"name" => name, "commit" => %{"short_id" => last_commit_ref}} =
      Enum.find(json, &(&1["default"] == true))

    %{
      "name" => name,
      "url" => build_url(gitlab_base_url, project, last_commit_ref)
    }
  end

  defp get_bundle_meta("stable", gitlab_base_url, project) do
    url = "#{gitlab_api_url(gitlab_base_url, project)}/releases"
    http_client = http_client()
    %{status: 200, body: json} = Tesla.get!(http_client, url)

    [%{"commit" => %{"short_id" => commit_id}, "name" => name} | _] =
      Enum.sort(json, fn r1, r2 -> r1 > r2 end)

    %{
      "name" => name,
      "url" => build_url(gitlab_base_url, project, commit_id)
    }
  end

  defp get_bundle_meta(ref, gitlab_base_url, project) do
    %{
      "name" => ref,
      "url" => build_url(gitlab_base_url, project, ref)
    }
  end

  defp install_bundle(bundle_url, dir) do
    http_client = http_client()

    with {:ok, %{status: 200, body: zip_body}} <- Tesla.get(http_client, bundle_url),
         {:ok, unzipped} <- :zip.unzip(zip_body, [:memory]) do
      unzipped
      |> Enum.each(fn {path, data} ->
        path =
          path
          |> to_string()
          |> String.replace(~r/^dist\//, "")

        file_path = Path.join(dir, path)

        file_path
        |> Path.dirname()
        |> File.mkdir_p!()

        File.write!(file_path, data)
      end)
    else
      {:ok, %{status: 404}} ->
        {:error, "Bundle not found"}

      error ->
        {:error, error}
    end
  end

  defp gitlab_api_url(gitlab_base_url, project),
    do: "https://#{gitlab_base_url}/api/v4/projects/#{URI.encode_www_form(project)}"

  defp build_url(gitlab_base_url, project, ref),
    do: "https://#{gitlab_base_url}/#{project}/-/jobs/artifacts/#{ref}/download?job=build"

  defp http_client do
    middleware = [
      Tesla.Middleware.FollowRedirects,
      Tesla.Middleware.JSON
    ]

    Tesla.client(middleware)
  end
end

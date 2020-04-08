# Pleroma: A lightweight social networking server
# Copyright © 2017-2020 Pleroma Authors <https://pleroma.social/>
# SPDX-License-Identifier: AGPL-3.0-only

defmodule Pleroma.Plugs.InstanceStatic do
  @moduledoc """
  This is a shim to call `Plug.Static` but with runtime `from` configuration.

  Mountpoints are defined directly in the module to avoid calling the configuration for every request including non-static ones.
  """
  @behaviour Plug

  @only ~w(index.html robots.txt static emoji packs sounds images instance favicon.png sw.js
  sw-pleroma.js)

  def init(opts) do
    opts
    |> Keyword.put(:from, "__unconfigured_instance_static_plug")
    |> Keyword.put(:at, "/__unconfigured_instance_static_plug")
    |> Plug.Static.init()
  end

  for only <- @only do
    at = Plug.Router.Utils.split("/")

    def call(%{request_path: "/" <> unquote(only) <> _} = conn, opts) do
      call_static(
        conn,
        opts,
        unquote(at)
      )
    end
  end

  def call(conn, _opts), do: conn

  defp call_static(conn, opts, at) do
    instance_static_path = Pleroma.Config.get([:instance, :static_dir], "instance/static")
    opts = %{opts | at: at, from: instance_static_path}

    # try to serve static file from frontend-specific directory
    # if it fails, conn returned from Plug.Static.call/2 remains the same as before
    # and we fallback to try to serve file from instance static directory
    with %{"name" => name, "ref" => ref} <- Pleroma.Config.get([:frontends, :primary]),
         opts2 = %{opts | from: Path.join([instance_static_path, "frontends", name, ref])},
         conn2 = Plug.Static.call(conn, opts2),
         true <- conn2 !== conn do
      conn2
    else
      _ ->
        Plug.Static.call(conn, opts)
    end
  end
end

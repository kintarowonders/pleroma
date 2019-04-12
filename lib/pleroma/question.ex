# Pleroma: A lightweight social networking server
# Copyright © 2017-2019 Pleroma Authors <https://pleroma.social/>
# SPDX-License-Identifier: AGPL-3.0-only

defmodule Pleroma.Question do
  use Ecto.Schema

  alias Pleroma.Activity
  alias Pleroma.Config
  alias Pleroma.Repo

  import Ecto.Query

  def add_reply_by_ap_id(ap_id, choices, actor) do
    with {:ok, _activity} <- add_reply(ap_id, choices, actor),
         {:ok, activity} <- increment_total(ap_id, choices) do
      {:ok, activity}
    end
  end

  def get_by_object_id(ap_id) do
    Repo.one(
      from(activity in Activity,
        where:
          fragment(
            "(?)->>'attributedTo' = ? AND (?)->>'type' = 'Question'",
            activity.data,
            ^ap_id,
            activity.data
          )
      )
    )
  end

  def maybe_check_limits(false, _expires, _options), do: :ok

  def maybe_check_limits(true, expires, options) when is_binary(expires) do
    maybe_check_limits(true, String.to_integer(expires), options)
  end

  def maybe_check_limits(true, expires, options) when is_integer(expires) do
    limits = Config.get([:instance, :poll_limits])
    expiration_range = limits[:min_expiration]..limits[:max_expiration]

    cond do
      length(options) > limits[:max_options] ->
        {:error, "The number of options exceed the maximum of #{limits[:max_options]}"}

      Enum.any?(options, &(String.length(&1) > limits[:max_option_chars])) ->
        {:error,
         "The number of option's characters exceed the maximum of #{limits[:max_option_chars]}"}

      !Enum.member?(expiration_range, expires) ->
        {:error,
         "`expires_in` must be in range of (#{limits[:min_expiration]}..#{limits[:max_expiration]}) seconds"}

      true ->
        :ok
    end
  end

  defp add_reply(ap_id, choices, actor) when is_binary(ap_id) do
    with question <- Activity.get_by_ap_id(ap_id),
         true <- valid_choice_indices(question, choices),
         false <- actor_already_voted(question, actor) do
      add_reply(question, choices, actor)
    else
      _ ->
        {:noop, ap_id}
    end
  end

  defp add_reply(question, choices, actor) when is_list(choices) do
    choices
    |> Enum.map(&String.to_integer/1)
    |> Enum.map(fn choice ->
      add_reply(question, choice_name_by_index(question, choice), actor)
    end)

    {:ok, question}
  end

  defp add_reply(question, name, actor) when is_binary(name) do
    from(
      a in Activity,
      where: fragment("(?)->>'id' = ?", a.data, ^to_string(question.data["id"]))
    )
    |> update([a],
      set: [
        data:
          fragment(
            "jsonb_set(?, '{replies,items}', (?->'replies'->'items') || ?, true)",
            a.data,
            a.data,
            ^%{"name" => name, "attributedTo" => actor}
          )
      ]
    )
    |> select([u], u)
    |> Repo.update_all([])
    |> case do
      {1, [activity]} -> {:ok, activity}
      _ -> :error
    end
  end

  defp get_options(question) do
    question.data["anyOf"] || question.data["oneOf"]
  end

  def choice_name_by_index(question, index) do
    Enum.at(get_options(question), index)
  end

  defp actor_already_voted(%{data: %{"replies" => %{"items" => []}}}, _actor), do: false

  defp actor_already_voted(%{data: %{"replies" => %{"items" => replies}}}, actor) do
    Enum.any?(replies, &(&1["attributedTo"] == actor))
  end

  defp valid_choice_indices(%{data: %{"anyOf" => options}}, choices) do
    valid_choice_indices(options, choices)
  end

  defp valid_choice_indices(%{data: %{"oneOf" => options}}, choices) do
    valid_choice_indices(options, choices)
  end

  defp valid_choice_indices(options, choices) do
    choices
    |> Enum.map(&String.to_integer/1)
    |> Enum.all?(&(length(options) > &1))
  end

  defp increment_total(ap_id, choices) do
    count = length(choices)

    from(a in Activity,
      where: fragment("(?)->>'id' = ?", a.data, ^to_string(ap_id))
    )
    |> update([a],
      set: [
        data:
          fragment(
            "jsonb_set(?, '{replies,totalItems}', ((?->'replies'->>'totalItems')::int + ?)::varchar::jsonb, true)",
            a.data,
            a.data,
            ^count
          )
      ]
    )
    |> select([u], u)
    |> Repo.update_all([])
    |> case do
      {1, [activity]} -> {:ok, activity}
      _ -> :error
    end
  end

  def is_question(activity) when is_nil(activity), do: false
  def is_question(%{data: %{"type" => type}}), do: type == "Question"
end

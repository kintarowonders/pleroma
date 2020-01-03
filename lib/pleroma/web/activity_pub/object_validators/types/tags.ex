# Pleroma: A lightweight social networking server
# Copyright © 2017-2019 Pleroma Authors <https://pleroma.social/>
# SPDX-License-Identifier: AGPL-3.0-only

defmodule Pleroma.Web.ActivityPub.ObjectValidators.Types.Tags do
  use Ecto.Type

  def type, do: {:array, :map}

  # Note: supporting binaries and maps as list elements
  def cast(list) when is_list(list) do
    if Enum.all?(list, &(is_map(&1) || is_binary(&1))) do
      {:ok, list}
    else
      :error
    end
  end

  def cast(_) do
    :error
  end

  def dump(data) do
    {:ok, data}
  end

  def load(data) do
    {:ok, data}
  end
end

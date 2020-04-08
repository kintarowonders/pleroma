# Pleroma: A lightweight social networking server
# Copyright © 2017-2020 Pleroma Authors <https://pleroma.social/>
# SPDX-License-Identifier: AGPL-3.0-only

defmodule Pleroma.Workers.Cron.CloseIdleConnections do
  @moduledoc """
  Worker closes idle gun connections.
  """

  use Oban.Worker, queue: "background"

  @impl true
  def perform(_, _) do
    max_idle_time = Pleroma.Config.get([:pleroma, :connections_pool, :max_idle_time], 30) * 60
    Pleroma.Pool.Connections.close_idle_conns(:gun_connections, max_idle_time)
  end
end

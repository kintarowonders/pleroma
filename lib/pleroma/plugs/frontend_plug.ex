defmodule Pleroma.Plugs.FrontendPlug do
  @moduledoc """
  Sets private key `:frontend` for the given connection.
  It is set to one of admin|mastodon|primary frontends config values based
  on `conn.path_info`
  """

  import Plug.Conn

  @behaviour Plug

  def init(_opts) do
    Pleroma.Config.get([:frontends], %{})
  end

  def call(%{path_info: ["pleroma", "admin" | _rest]} = conn, fe_config) do
    put_private(conn, :frontend, %{
      config: fe_config[:admin],
      module: Pleroma.Frontend.Admin
    })
  end

  def call(%{path_info: ["web" | _rest]} = conn, fe_config) do
    put_private(conn, :frontend, %{
      config: fe_config[:mastodon],
      module: Pleroma.Frontend.Mastodon
    })
  end

  def call(conn, fe_config) do
    put_private(conn, :frontend, Pleroma.Frontend.get_primary_fe_config(fe_config))
  end
end

defmodule Pleroma.Web.Frontend.PleromaController do
  use Pleroma.Web, :controller
  use Pleroma.Web.Frontend.DefaultController

  require Logger

  alias Pleroma.User
  alias Pleroma.Web.Metadata

  def index_with_meta(conn, %{"maybe_nickname_or_id" => maybe_nickname_or_id} = params, fe_config) do
    case User.get_cached_by_nickname_or_id(maybe_nickname_or_id) do
      %User{} = user ->
        index_with_meta(conn, %{user: user}, fe_config)

      _ ->
        index(conn, params, fe_config)
    end
  end

  # not intended to be matched from router, but can be called from the app internally
  def index_with_meta(conn, params, fe_config) do
    index_content = File.read!(index_file_path(fe_config))

    tags =
      try do
        Metadata.build_tags(params)
      rescue
        e ->
          Logger.error(
            "Metadata rendering for #{conn.request_path} failed.\n" <>
              Exception.format(:error, e, __STACKTRACE__)
          )

          ""
      end

    response = String.replace(index_content, "<!--server-generated-meta-->", tags)

    html(conn, response)
  end

  defdelegate registration_page(conn, params, fe_config), to: __MODULE__, as: :index
end

defmodule Pleroma.Web.Frontend.DefaultController do
  defmacro __using__(_opts) do
    quote do
      import Pleroma.Web.FrontendController, only: [index_file_path: 1]

      def index(conn, _params, fe_config) do
        status = conn.status || 200

        conn
        |> put_resp_content_type("text/html")
        |> send_file(status, index_file_path(fe_config))
      end

      def api_not_implemented(conn, _params, _fe_config) do
        conn
        |> put_status(404)
        |> json(%{error: "Not implemented"})
      end

      def empty(conn, _params, _fe_config) do
        conn
        |> put_status(204)
        |> text("")
      end

      defoverridable index: 3, api_not_implemented: 3, empty: 3
    end
  end
end

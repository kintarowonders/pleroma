defmodule Pleroma.Web.FrontendController do
  use Pleroma.Web, :controller

  def action(conn, _opts) do
    # `conn.private[:frontend]` can be unset if the function is called outside
    # of the standard controller pipeline
    %{module: fe_module} =
      conn.private[:frontend] ||
        Pleroma.Frontend.get_primary_fe_config()

    # can only be true for :primary frontend
    static_enabled? = Map.get(conn.private[:frontend], :static, false)

    action = action_name(conn)

    {controller, action} =
      cond do
        static_enabled? and function_exported?(Pleroma.Web.FrontendStaticController, action, 2) ->
          {Pleroma.Web.FrontendStaticController, action}

        function_exported?(fe_module, action, 3) ->
          {fe_module, action}

        true ->
          {fe_module, :fallback}
      end

    controller.call(conn, controller.init(action))
  end

  def index_file_path(fe_config \\ nil) do
    filename = "index.html"
    instance_base_path = Pleroma.Config.get([:instance, :static_dir], "instance/static/")

    %{"name" => name, "ref" => ref} =
      with nil <- fe_config do
        Pleroma.Frontend.get_primary_fe_config()
      end

    frontend_path = Path.join([instance_base_path, "frontends", name, ref, filename])
    instance_path = Path.join([instance_base_path, filename])

    cond do
      File.exists?(frontend_path) ->
        frontend_path

      File.exists?(instance_path) ->
        instance_path

      true ->
        Application.app_dir(:pleroma, ["priv", "static", filename])
    end
  end
end

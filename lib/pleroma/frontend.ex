defmodule Pleroma.Frontend do
  def get_primary_fe_config,
    do: [:frontends] |> Pleroma.Config.get(%{}) |> get_primary_fe_config()

  def get_primary_fe_config(%{primary: %{"name" => "none"}, static: static}) do
    %{
      config: %{},
      module: Pleroma.Frontend.Headless,
      static: static
    }
  end

  def get_primary_fe_config(fe_config) do
    %{
      config: fe_config[:primary],
      module: Module.concat(Pleroma.Frontend, String.capitalize(fe_config[:primary][:name])),
      static: fe_config[:static]
    }
  end
end

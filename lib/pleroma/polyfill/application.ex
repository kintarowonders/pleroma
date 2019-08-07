# Pleroma: A lightweight social networking server
# Copyright © 2017-2019 Pleroma Authors <https://pleroma.social/>
# SPDX-License-Identifier: AGPL-3.0-only

defmodule Pleroma.Web.Polyfill.Application do
  # Taken from https://github.com/elixir-lang/elixir/blob/b50e0f4ea7d1d6860bc8d9081f5dbe16047375ef/lib/elixir/lib/application.ex 
  # Copyright 2012 Plataformatec
  def put_all_env(config, opts \\ []) when is_list(config) and is_list(opts) do
    if function_exported?(:application, :set_env, 2) do
      # Directly calling it would result in a compilation warning on OTP <22
      apply(:application, :set_env, [config, opts])
    else
      for app_keyword <- config,
          {app, keyword} = app_keyword,
          key_value <- keyword,
          {key, value} = key_value do
        :application.set_env(app, key, value, opts)
      end

      :ok
    end
  end
end

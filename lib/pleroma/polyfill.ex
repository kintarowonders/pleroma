defmodule Pleroma.Polyfill do
  @doc "Provides fallbacks for features not available on Elixir versions supported"

  def apply_or_fallback(module, function_name, args) do
    if function_exported?(module, function_name, length(args)) do
      apply(module, function_name, args)
    else
      if fallback_available?(module, function_name, length(args)) do
        apply(Module.concat(__MODULE__, module), function_name, args)
      else
        raise "No fallback for #{module}.#{to_string(function_name)} found!"
      end
    end
  end

  def fallback_available?(module, function_name, arity) do
    function_exported?(Module.concat(__MODULE__, module), function_name, arity)
  end
end

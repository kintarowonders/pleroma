defmodule Pleroma.ReverseProxy.Client.Hackney do
  @behaviour Pleroma.ReverseProxy.Client

  def request(method, url, headers, body, opts \\ []) do
    :hackney.request(method, url, headers, body, opts)
  end

  def stream_body(ref) do
    case :hackney.stream_body(ref) do
      :done -> :done
      {:ok, data} -> {:ok, data, ref}
      {:error, error} -> {:error, error}
    end
  end

  def close(ref), do: :hackney.close(ref)
end

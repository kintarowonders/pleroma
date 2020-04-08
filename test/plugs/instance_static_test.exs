# Pleroma: A lightweight social networking server
# Copyright © 2017-2020 Pleroma Authors <https://pleroma.social/>
# SPDX-License-Identifier: AGPL-3.0-only

defmodule Pleroma.Web.RuntimeStaticPlugTest do
  use Pleroma.Web.ConnCase

  @dir "test/tmp/instance_static"
  @primary_fe %{"name" => "test_fe", "ref" => "1.2.3"}
  @fe_dir Path.join([@dir, "frontends", @primary_fe["name"], @primary_fe["ref"]])

  setup do
    [@dir, "frontends", @primary_fe["name"], @primary_fe["ref"], "static"]
    |> Path.join()
    |> File.mkdir_p()

    [@dir, "static"]
    |> Path.join()
    |> File.mkdir!()

    on_exit(fn -> File.rm_rf(@dir) end)
    clear_config([:instance, :static_dir], @dir)
    clear_config([:frontends, :primary], @primary_fe)
  end

  test "overrides index" do
    bundled_index = get(build_conn(), "/")
    assert html_response(bundled_index, 200) == File.read!("priv/static/index.html")

    File.write!(@dir <> "/index.html", "hello world")

    index = get(build_conn(), "/")
    assert html_response(index, 200) == "hello world"
  end

  test "overrides any file in static/static" do
    bundled_index = get(build_conn(), "/static/terms-of-service.html")

    assert html_response(bundled_index, 200) ==
             File.read!("priv/static/static/terms-of-service.html")

    File.write!(@dir <> "/static/terms-of-service.html", "plz be kind")

    index = get(build_conn(), "/static/terms-of-service.html")
    assert html_response(index, 200) == "plz be kind"

    File.write!(@dir <> "/static/kaniini.html", "<h1>rabbit hugs as a service</h1>")
    index = get(build_conn(), "/static/kaniini.html")
    assert html_response(index, 200) == "<h1>rabbit hugs as a service</h1>"
  end

  test "files from frontend static dir overrides files in instance/static/static" do
    [@dir, "static", "helo.html"]
    |> Path.join()
    |> File.write!("moto")

    [@fe_dir, "static", "helo.html"]
    |> Path.join()
    |> File.write!("cofe")

    conn = get(build_conn(), "/static/helo.html")
    assert html_response(conn, 200) == "cofe"
  end
end

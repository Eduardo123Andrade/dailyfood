defmodule DailyfoodWeb.HealthCheckController do
  use DailyfoodWeb, :controller

  alias Plug.Conn

  def health(%Conn{} = conn, _params) do
    conn
    |> put_status(:ok)
    |> render("health_check.json")
  end
end

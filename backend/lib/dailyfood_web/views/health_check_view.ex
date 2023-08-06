defmodule DailyfoodWeb.HealthCheckView do
  use DailyfoodWeb, :view

  def render("health_check.json", _params) do
    %{message: "All be ok"}
  end
end

defmodule DailyfoodWeb.MealsController do
  use DailyfoodWeb, :controller

  alias Dailyfood.Meals.Meal
  alias Dailyfood.Users.User
  alias Plug.Conn

  alias DailyfoodWeb.FallbackController

  action_fallback(FallbackController)

  def create(%Conn{} = conn, params) do
    %User{id: id} = Guardian.Plug.current_resource(conn)
    mapped_params = Map.put(params, "user_id", id)

    with {:ok, %Meal{} = meal} <- Dailyfood.meal_create(mapped_params) do
      conn
      |> put_status(:created)
      |> render("create.json", meal: meal)
    end
  end

  def show(%Conn{} = conn, params) do
    %User{id: id} = Guardian.Plug.current_resource(conn)
    mapped_params = Map.put(params, "user_id", id)

    with {:ok, meals} <- Dailyfood.get_meals_by_date(mapped_params) do
      conn
      |> put_status(:ok)
      |> render("meals.json", %{meals: meals})
    end
  end

  def generate_pdf(%Conn{} = conn, params) do
    %User{id: id} = Guardian.Plug.current_resource(conn)
    mapped_params = Map.put(params, "user_id", id)

    with {:ok, file_path} <- Dailyfood.generate_meals_pdf(mapped_params) do
      conn
      |> put_status(:ok)
      |> json(%{"url" => file_path})
    end
  end

  def generate_pdf_by_dates(%Conn{} = conn, params) do
    %User{id: id} = Guardian.Plug.current_resource(conn)
    mapped_params = Map.put(params, "user_id", id)

    with {:ok, meals} <- Dailyfood.get_meals_by_date(mapped_params),
         {:ok, ids} <- get_ids(meals),
         {:ok, file_path} <- Dailyfood.generate_meals_pdf(%{"meal_ids" => ids, "user_id" => id}) do
      conn
      |> put_status(:ok)
      |> json(%{"url" => file_path})
    end
  end

  defp get_ids(meals) do
    result =
      Enum.map(meals, fn meal ->
        meal.id
      end)

    {:ok, result}
  end
end

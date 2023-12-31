defmodule Dailyfood.Users.Delete do
  alias Dailyfood.{Error, Repo}
  alias Dailyfood.Users.User

  def call(id) do
    case Repo.get(User, id) do
      nil -> {:error, Error.build_user_not_found_error()}
      user -> Repo.delete(user)
    end
  end
end

# This file is responsible for configuring your application
# and its dependencies with the aid of the Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
import Config

guardian_secret_key = System.get_env("GUARDIAN_SECRET_KEY") || ""

config :dailyfood,
  ecto_repos: [Dailyfood.Repo]

config :dailyfood, Dailyfood.Repo,
  migration_primary_key: [type: :binary_id],
  migration_foreign_key: [type: :binary_id]

config :dailyfood, DailyfoodWeb.Auth.Guardian,
  issuer: "dailyfood",
  secret_key: guardian_secret_key

config :dailyfood, DailyfoodWeb.Auth.Pipeline,
  module: DailyfoodWeb.Auth.Guardian,
  error_handler: DailyfoodWeb.Auth.ErrorHandler

# Configures the endpoint
config :dailyfood, DailyfoodWeb.Endpoint,
  url: [host: "localhost"],
  render_errors: [view: DailyfoodWeb.ErrorView, accepts: ~w(json), layout: false],
  pubsub_server: Dailyfood.PubSub,
  live_view: [signing_salt: "vuZmpz+4"]

# Configures the mailer
#
# By default it uses the "Local" adapter which stores the emails
# locally. You can see the emails in your browser, at "/dev/mailbox".
#
# For production it's recommended to configure a different adapter
# at the `config/runtime.exs`.
config :dailyfood, Dailyfood.Mailer, adapter: Swoosh.Adapters.Local

# Swoosh API client is needed for adapters other than SMTP.
config :swoosh, :api_client, false

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{config_env()}.exs"

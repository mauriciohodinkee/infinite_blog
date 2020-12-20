class ResetPasswordsWorker
  include Sidekiq::Worker

  def perform(*args)
    User.update(
      password: "password2",
      password_confirmation: "password2"
    )
  end
end

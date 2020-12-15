Rails.application.routes.draw do
  resources :posts
  devise_for :users

  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :local_posts, only: %w[index]
    end
  end
end

Rails.application.routes.draw do
  namespace :admin do
    resources :users
    resources :posts

    root to: "users#index"
  end
  resources :posts
  devise_for :users

  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :local_posts, only: %w[index]
      resources :remote_posts, only: %w[index]
    end
  end

  get "/blog", to: "blog#index"
  root to: "blog#index"
end

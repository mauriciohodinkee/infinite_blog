Rails.application.routes.draw do
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

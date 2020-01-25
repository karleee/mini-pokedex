Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do 
    resources :pokemon, only: [:create, :index, :show]
  end
end

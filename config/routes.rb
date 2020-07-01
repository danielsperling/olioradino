Rails.application.routes.draw do
  root to: 'pages#home'
  get 'about', to: 'pages#about'
  get 'products', to: 'pages#products'
  resources :contacts, only: [:new, :create]
end

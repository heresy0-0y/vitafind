Rails.application.routes.draw do
  resources :vitamins
  resources :supplements
  resources :brands
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
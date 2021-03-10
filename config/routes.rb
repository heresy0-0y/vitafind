Rails.application.routes.draw do
  resources :vitamins
  resources :supplements
  resources :brands
  post '/vitamins/:vitamin_id/supplements/:id', to: 'vitamin_supplements#add_vitamin_to_supplement'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

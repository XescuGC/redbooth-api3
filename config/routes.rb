Rails.application.routes.draw do
  scope module: :frontend do
    resources :authentication, only: [] do
      collection do
        get :auth_code
      end
    end
    resource :user, only: [] do
      collection do
        get :login
      end
    end
  end
  root to: 'frontend/home#show'
end

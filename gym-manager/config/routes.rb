Rails.application.routes.draw do
  root to: 'application#angular'

  resources :posts, only: [:create, :index, :show] do
  	resources :comments, only: [:show, :create] do
  		member do
  			put '/upvote' => 'comments#upvote'
  		end
  	end

  	member do
  		put '/upvote' => 'posts#upvote'
  	end
 end

 resources :students, only: [:create, :index, :show, :update, :destroy] do
 end

 resources :trainers, only: [:create, :index, :show, :update, :destroy] do
 end

 resources :workgroups, only: [:create, :index, :show, :update, :destroy] do
 end

 resources :classtypes, only: [:index] do
 end
end

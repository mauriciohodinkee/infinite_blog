module Admin
  class PostsController < Admin::ApplicationController
    def scoped_resource
      if current_user.admin?
        resource_class
      else
        resource_class.where(author: current_user)
      end
    end
  end
end

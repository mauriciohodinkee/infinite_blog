module Admin
  class UsersController < Admin::ApplicationController
    def scoped_resource
      if current_user.admin?
        resource_class
      else
        resource_class.where(id: current_user.id)
      end
    end
  end
end

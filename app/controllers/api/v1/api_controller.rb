class Api::V1::ApiController < ApplicationController
  # before_action :authenticate_user!
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def render_not_found_response(exception)
    render json: {status: "NOT_FOUND", error: exception.message}, status: :not_found
  end
end

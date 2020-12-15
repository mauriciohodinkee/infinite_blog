class Api::V1::LocalPostsController < Api::V1::ApiController
  def index
    @posts = Post.order(:created_at).page params[:page] || 1
  end
end

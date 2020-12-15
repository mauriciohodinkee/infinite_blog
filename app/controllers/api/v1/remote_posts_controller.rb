class Api::V1::RemotePostsController < Api::V1::ApiController
  def index
    page = params[:page] || 1
    @posts = NewsApi::Article.get(q: "watches", page: page)
  end
end

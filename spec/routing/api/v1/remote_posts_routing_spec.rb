require "rails_helper"

RSpec.describe Api::V1::RemotePostsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/api/v1/remote_posts").to route_to("api/v1/remote_posts#index", format: :json)
    end
  end
end

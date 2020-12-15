require "rails_helper"

RSpec.describe Api::V1::LocalPostsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/api/v1/local_posts").to route_to("api/v1/local_posts#index", format: :json)
    end
  end
end

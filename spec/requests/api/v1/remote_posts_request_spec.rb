require "rails_helper"

RSpec.describe "/api/v1/remote_posts", type: :request do
  describe "GET /index" do
    skip "renders a successful response" do
      get api_v1_remote_posts_url, params: {page: 2}
      expect(response).to be_successful
      expect(JSON.parse(response.body).count).to eq(20)
    end
  end
end

require "rails_helper"

RSpec.describe "/api/v1/local_posts", type: :request do
  before do
    create_list(:post, 30)
  end

  describe "GET /index" do
    it "renders a successful response" do
      get api_v1_local_posts_url, params: {page: 2}
      expect(response).to be_successful
      expect(JSON.parse(response.body).count).to eq(10)
    end
  end
end

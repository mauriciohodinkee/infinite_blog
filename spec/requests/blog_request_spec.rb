require "rails_helper"

RSpec.describe "Blogs", type: :request do
  describe "GET /index" do
    it "renders a successful response" do
      get blog_url
      expect(response).to be_successful
    end
  end
end

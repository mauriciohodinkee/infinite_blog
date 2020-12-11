require "rails_helper"

RSpec.describe "posts/index", type: :view do
  before(:each) do
    @posts = create_list(:post, 2)
  end

  it "renders a list of posts" do
    render

    @posts.each do |post|
      assert_select "tr>td", text: post.title
      assert_select "tr>td", text: post.description
      assert_select "tr>td", text: post.content
    end
  end
end

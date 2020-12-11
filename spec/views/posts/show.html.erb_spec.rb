require "rails_helper"

RSpec.describe "posts/show", type: :view do
  before(:each) do
    @post = create(:post)
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/#{@post.title}/)
    expect(rendered).to match(/#{@post.description}/)
    expect(rendered).to match(/#{@post.content}/)
  end
end

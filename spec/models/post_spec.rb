require 'rails_helper'

RSpec.describe Post, type: :model do
  context "Validations" do
    it { should validate_presence_of(:title) }
    it { should validate_presence_of(:content) }
    it { should validate_presence_of(:description) }
  end

  context "Associations" do
    it { is_expected.to belong_to(:author) }
  end
end

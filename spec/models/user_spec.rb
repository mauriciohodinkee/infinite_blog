require "rails_helper"

RSpec.describe User, type: :model do
  context "Validations" do
    it { should validate_presence_of(:first_name) }
    it { should validate_presence_of(:last_name) }
    it { should validate_presence_of(:email) }
    it { should validate_presence_of(:password) }
  end

  context "Associations" do
    it { is_expected.to have_many(:posts) }
  end

  context "Name of person" do
    subject { create(:user) }

    context "when first and last name are given" do
      it "handle user name" do
        expect(subject.name).to eq("#{subject.first_name} #{subject.last_name}")
      end
    end
  end
end

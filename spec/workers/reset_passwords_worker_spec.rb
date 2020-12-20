require "rails_helper"

RSpec.describe ResetPasswordsWorker, type: :worker do
  it "updates passwords" do
    allow(User).to receive(:update)
    describe_class.new.perform
    expect(User).to have_received(:update)
  end
end

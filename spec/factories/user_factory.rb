FactoryBot.define do
  factory :user, aliases: [:author] do
    first_name { Faker::Name.first_name }
    last_name { Faker::Name.last_name }
    email { Faker::Internet.email }
    password { "password" }
    password_confirmation { "password" }
    admin { false }

    factory :admin do
      admin { true }
    end
  end
end

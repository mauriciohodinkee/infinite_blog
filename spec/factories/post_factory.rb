FactoryBot.define do
  factory :post do
    title { Faker::Lorem.question(word_count: 4) }
    description { Faker::Lorem.sentence }
    content { Faker::Lorem.paragraph(sentence_count: 5) }
    author
  end
end

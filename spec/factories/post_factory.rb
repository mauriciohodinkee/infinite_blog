FactoryBot.define do
  factory :post do
    title { Faker::Lorem.question(word_count: 4) }
    description { Faker::Lorem.sentence }
    content { Faker::Lorem.paragraph(sentence_count: 5) }
    author
    type { ["ImportedPost", "LocalPost"].sample }

    factory :imported_post do {
      type { "ImportedPost" }
    }

    factory :local_post do {
      type { "LocalPost" }
    }
  end
end

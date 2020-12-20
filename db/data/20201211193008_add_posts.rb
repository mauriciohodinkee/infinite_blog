class AddPosts < SeedMigration::Migration
  def up
    puts "*** Seeding local posts"

    User.all.each do |user|
      30.times do
        user.local_posts.create!(
          title: Faker::Lorem.question(word_count: 3),
          description: Faker::Lorem.sentence,
          content: Faker::Lorem.paragraph(sentence_count: 20)
        )
      end
    end

    puts "Created #{LocalPost.count} local posts in total"
  end

  def down
    puts "*** Destroying posts"

    deleted_posts = LocalPost.destroy_all
    puts "#{deleted_posts.count} local posts destroyed"
  end
end

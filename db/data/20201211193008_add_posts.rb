class AddPosts < SeedMigration::Migration
  def up
    puts "*** Seeding posts"

    User.all.each do |user|
      30.times do
        user.posts.create!(
          title: Faker::Lorem.question(word_count: 3),
          description: Faker::Lorem.sentence,
          content: Faker::Lorem.paragraph(sentence_count: 20)
        )
      end
    end

    puts "Created #{Post.count} posts in total"
  end

  def down
    puts "*** Destroying posts"

    deleted_posts = Post.destroy_all
    puts "#{deleted_posts.count} posts destroyed"
  end
end

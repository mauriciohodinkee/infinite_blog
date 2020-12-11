class AddUsers < SeedMigration::Migration
  def up
    puts "*** Seeding users"

    admin = User.where(email: "admin.user@example.com")
      .first_or_create!(
        first_name: "Admin",
        last_name: "User",
        password: "password",
        password_confirmation: "password",
        admin: true
      )
    puts "Created #{admin.name}: #{admin.email}"

    5.times do
      first, last = Faker::Name.first_name, Faker::Name.last_name
      email = Faker::Internet.email
      user = User
        .where(email: email)
        .first_or_create!(
          first_name: first,
          last_name: last,
          password: "password",
          password_confirmation: "password"
        )

      puts "Created user #{user.name}: #{user.email}"
    end
  end

  def down
    puts "*** Destroying users"

    deleted_users = User.destroy_all
    puts "#{deleted_users.count} users destroyed"
  end
end

class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.text :content, null: false
      t.belongs_to :author
      t.timestamps
    end
    add_foreign_key :posts, :users, column: :author_id
  end
end

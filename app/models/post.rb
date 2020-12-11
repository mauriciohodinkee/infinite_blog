class Post < ApplicationRecord
  validates :title, :content, :description, presence: true

  belongs_to :author, inverse_of: :posts, class_name: "User"
end

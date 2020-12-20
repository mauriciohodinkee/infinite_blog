class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
    :recoverable, :rememberable, :validatable

  has_person_name
  validates :first_name, :last_name, presence: true

  has_many :posts, inverse_of: :author, dependent: :destroy, class_name: "Post", foreign_key: :author_id

  scope :admin, -> { where(admin: true) }

  def self.importer
    admin.first
  end
end

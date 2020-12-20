class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
    :recoverable, :rememberable, :validatable

  has_person_name
  validates :first_name, :last_name, presence: true

  has_many :local_posts, inverse_of: :author, dependent: :destroy, class_name: "LocalPost", foreign_key: :author_id
  has_many :remote_posts, inverse_of: :author, dependent: :destroy, class_name: "RemotePost", foreign_key: :author_id

  scope :admin, -> { where(admin: true) }

  def self.importer
    admin.first
  end
end

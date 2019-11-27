class Group < ApplicationRecord
  has_many :users, through: :members
  has_many :members # members は groups_usersと同義 
  has_many :messages
  validates :name, presence: true, uniqueness: true
end

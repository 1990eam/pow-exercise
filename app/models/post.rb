class Post < ApplicationRecord
  belongs_to :user

  validates :content, length: { in: 1..400 }
end

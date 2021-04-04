class Post < ApplicationRecord
  belongs_to :user

  validates :content, length: { in: 1..400 }

  after_create do
    adapter = TelegramAdapter.new
    adapter.send_message(self.content)
  end
end

class TelegramAdapter
  attr_reader :connector

  def initialize
    @connector = Connector::Telegram.new
  end

  def send_message(message)
    @connector.send_message(message)
  end
end

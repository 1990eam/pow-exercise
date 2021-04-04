class Connector::Telegram
  require "uri"
  require "net/http"

  BASE_URL = "https://api.telegram.org"
  AUTH_TOKEN = "bot1709630821:AAFByNEw70yXpqXI32j8CZ5P9JJH9attDeI"
  BOT_COMMAND = "sendMessage"
  CHAT_ID = "@apitestpow"

  def send_message(message)
    url = URI("#{BASE_URL}/#{AUTH_TOKEN}/#{BOT_COMMAND}?chat_id=#{CHAT_ID}&text=#{message}")

    https = Net::HTTP.new(url.host, url.port)
    https.use_ssl = true

    request = Net::HTTP::Post.new(url)

    response = https.request(request)
    puts response.read_body
  end

end

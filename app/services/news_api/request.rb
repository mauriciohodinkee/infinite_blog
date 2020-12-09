class NewsApi::Request
  def self.get(params = {})
    api = News.new Rails.application.credentials.news_api_key
    api.get_everything(params)
  end
end

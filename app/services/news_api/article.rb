class NewsApi::Article
  # NewsApi::Article.get(q: 'watches', page: 1)

  def self.get(params)
    default_params = {language: "en", sortBy: "relevancy"}

    begin
      NewsApi::Request.get(params.merge(default_params)).each do |article|
        article.id = SecureRandom.uuid
      end
    rescue TooManyRequestsException
      []
    end
  end
end

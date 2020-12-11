class NewsApi::Article
  # NewsApi::Article.get(q: 'watches', page: 1)

  def self.get(params)
    default_params = {language: "en", sortBy: "relevancy"}

    NewsApi::Request.get(params.merge(default_params))
  end
end

json.extract! post, :id, :title, :description, :content
json.url post_url(post, format: :json)

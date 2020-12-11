source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "2.6.6"

gem "bcrypt", "~> 3.1.7"
gem "bootsnap", ">= 1.4.2", require: false
gem "bootstrap", "~> 4.5"
gem "devise", "~> 4.7"
gem "devise-bootstrapped", "~> 0.1.1"
gem "jbuilder", "~> 2.7"
gem "name_of_person", "~> 1.1"
gem "news-api", "~> 0.2.0"
gem "ordinare", "~> 0.4.0"
gem "pg", ">= 0.18", "< 2.0"
gem "puma", "~> 4.1"
gem "rails", "~> 6.0.3", ">= 6.0.3.4"
gem "sass-rails", ">= 6"
gem "standard", "~> 0.10.2"
gem "turbolinks", "~> 5"
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]
gem "webpacker", "~> 4.0"

group :development, :test do
  gem "brakeman", "~> 4.10"
  gem "byebug", platforms: [:mri, :mingw, :x64_mingw]
  gem "rspec-rails", "~> 4.0"
end

group :development do
  gem "guard", "~> 2.16"
  gem "guard-brakeman", "~> 0.8.6"
  gem "guard-bundler", "~> 3.0"
  gem "guard-rspec", "~> 4.7"
  gem "guard-standardrb", "~> 0.2.0"
  gem "listen", "~> 3.2"
  gem "spring"
  gem "spring-watcher-listen", "~> 2.0.0"
  gem "web-console", ">= 3.3.0"
end

group :test do
  gem "capybara", ">= 2.15"
  gem "selenium-webdriver"
  gem "webdrivers"
end

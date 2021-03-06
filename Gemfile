source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.0.0"

# Reduces boot times through caching; required in config/boot.rb
gem "activerecord-postgres_enum", '~> 1.6'
gem "awesome_print", git: "https://github.com/awesome-print/awesome_print"
gem "bootsnap", require: false
gem "date_by_example"
gem "devise"
gem "gon"
gem "jbuilder"
gem "pg"
gem "puma"
gem "rails"
gem "sass-rails"
gem "simple_form"
gem "table_print"
gem "turbo-rails"
gem "webpacker", "6.0.0.beta.5"

group :development, :test do
  gem "cypress-rails"
  gem "dotenv-rails"
  gem "faker"
  gem "pry-rails"
  gem "pry-rescue"
  gem "rspec-rails"
  gem "rubocop"
  gem "rubocop-performance"
  gem "rubocop-rails"
  gem "rubocop-rspec"
  gem "test-prof"
  gem "byebug", platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  gem "annotate"
  gem "erb_lint", require: false
  gem "htmlbeautifier"
  gem "listen"
  gem "rack-mini-profiler"
  gem "spring"
  gem "spring-commands-rspec"
  gem "spring-watcher-listen"
  gem "web-console"
end

group :test do
  gem "capybara"
  gem "capybara-screenshot"
  gem "factory_bot_rails"
  gem "selenium-webdriver"
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]

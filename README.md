![Ruby](https://github.com/mauriciohodinkee/infinite_blog/workflows/Ruby/badge.svg)
![Javascript](https://github.com/mauriciohodinkee/infinite_blog/workflows/Javascript/badge.svg)

# README

This is a sample blog using Rails, React and NewsAPI.
## Continuous integration

This project is using [Github actions](https://github.com/mauriciohodinkee/infinite_blog/actions).

For Ruby:
1. Postgres installation
2. Ruby and rails installation
3. [Ordinare](https://github.com/nikolalsvk/ordinare) check - Gemfile organizer
4. [StandardRB](https://github.com/testdouble/standard) check - ruby standard code linter
5. [Brakeman] (https://github.com/presidentbeef/brakeman) - ruby static security analysis
6. [Rspec] (https://github.com/rspec/rspec) - behavior driven development for ruby

For Javascript:
1. Yarn installation
2. [ESLint](https://github.com/eslint/eslint) check - javascript code linter
3. [Jest](https://jestjs.io/) + [Enzyme](https://github.com/enzymejs/enzyme/) tests
## Development

### Installation

Use `bin/setup` to install this rails application.

### Setup NewsAPI

1. Get a credential on https://newsapi.org/
2. Run `rails credentials:edit --environment=development` to add a `news_api_key: YOURAPIKEY`

### Running

Install [foreman](https://www.theforeman.org/) and run `foreman start` to see the application running at `https://localhost:5000`. This command runs rails server and webpack-dev-server in parallel.

### Guard

For running tests and linter during development, run:

`bundle exec guard`

or run:

1. `bundle exec ordinare` to lint Gemfile
2. `bundle exec rails standard:fix` to lint ruby code
3. `bundle exec brakeman` to run static security analysis
4. `bundle exec rspec` to run tests

### Populating database.

We are using [seed_migration](https://github.com/harrystech/seed_migration) gem.

`rails seed:migrate`
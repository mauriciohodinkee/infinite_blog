![Ruby](https://github.com/mauriciohodinkee/infinite_blog/workflows/Ruby/badge.svg)

# README

This is a sample blog using Rails, React and NewsAPI.
## Continuous integration

This project is using [Github actions](https://github.com/mauriciohodinkee/infinite_blog/actions) and performing:
1. Postgres installation
2. Ruby and rails installation
3. [Ordinare](https://github.com/nikolalsvk/ordinare) check - Gemfile organizer
4. [StandardRB](https://github.com/testdouble/standard) check - ruby standard code linter
5. [Brakeman] (https://github.com/presidentbeef/brakeman) - ruby static security analysis
6. [Rspec] (https://github.com/rspec/rspec) - behavior driven development for ruby

## Development

### Guard

For running tests and linter during development, run:

`bundle exec guard`
### Running seeds

We are using [seed_migration](https://github.com/harrystech/seed_migration) gem.

`rails seed:migrate`
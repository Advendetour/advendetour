# Advendetour Ruby on Rails App

## First Time Installation
1. Install Homebrew (Mac).
   `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
2. Use homebrew to install the Ruby Gem for postgresql
   `brew install postgresql'
3. Run the server locally.
   `postgres -D /usr/local/var/postgres`
4. Initialize the database locally.
   `rake db:create`

## To run the app
1. Run the server locally if you haven't done so already.
   `postgres -D /usr/local/var/postgres`
2. Run the Rails app
   `rails server'
3. Go to http://localhost:3000/

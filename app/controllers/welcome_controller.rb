class WelcomeController < ApplicationController
  def index

    #@result = Net::HTTP.get(URI.parse('http://www.site.com/about.html'))

    @result = Net::HTTP.get(URI.parse('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670,151.1957&radius=500&types=food&name=cruise&key=AIzaSyCTaQ8rj5xULxzLfTnu5cgvNSo5lxw2YRA'))

    JSON.parse(@result).each do |item|
      puts item
      #Rails.logger.info item['id']
    end


  end
end

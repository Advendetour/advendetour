class WelcomeController < ApplicationController
  def index
  end

  def first

  end

  def second
    

  end
  def show
    render template: "welcome/#{params[:page]}"
  end
end

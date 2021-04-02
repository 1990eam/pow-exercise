class PagesController < ApplicationController
  before_action :authenticate_user!

  def home
    @post = Post.new
  end
end

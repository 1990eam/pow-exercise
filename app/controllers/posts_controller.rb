class PostsController < ApplicationController
  before_action :set_user

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    @post.user = @user
    if @post.save
      redirect_to root_path
    else
      raise
    end
  end

  private

  def post_params
      params.require(:post).permit(:content)
  end

  def set_user
    @user = current_user
  end
end

class PostsController < ApplicationController
  before_action :set_user
  before_action :set_post, only: %i(destroy)

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    @post.user = @user
    @post.save
    redirect_to root_path
  end

  def destroy
    @post.destroy
    redirect_to root_path
  end

  private

  def post_params
    params.require(:post).permit(:content)
  end

  def set_user
    @user = current_user
  end

  def set_post
    @post = Post.find(params[:id])
  end
end

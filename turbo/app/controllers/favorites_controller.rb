class FavoritesController < ApplicationController

  def create
    Favorite.create(user: current_user, concert_id: params[:concert_id])
    render(partial: "favorites/list")
  end

  def destroy
    @favorite = Favorite.find(params[:id])
    @favorite.destroy
    render(partial: "favorites/list")
  end

  private(
    def favorite_params
      params.require(:concert_id)
    end
  )
end

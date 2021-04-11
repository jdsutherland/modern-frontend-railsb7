class ShoppingCartsController < ApplicationController
  def create
    tickets = Ticket
      .where(
        concert_id: params[:concertId],
        row: params[:row],
        number:
          params[:seatNumber] ... params[:seatNumber] + params[:ticketsToBuy])
      .all
    tickets.update(status: params[:status],
                   user: params[status] == "held" ? current_user.id : nil)
    p tickets.map(&:to_concert_h)
    render(json: tickets.map(&:to_concert_h))
  end
end

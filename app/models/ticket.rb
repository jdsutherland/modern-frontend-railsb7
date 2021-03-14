#---
# Excerpted from "Modern Front-End Development for Rails",
# published by The Pragmatic Bookshelf.
# Copyrights apply to this code. It may not be used to create training material,
# courses, books, articles, and the like. Contact us if you are in doubt.
# We make no guarantees that this code is fit for any purpose.
# Visit http://www.pragmaticprogrammer.com/titles/nrclient for more book information.
#---
# == Schema Information
#
# Table name: tickets
#
#  id              :bigint           not null, primary key
#  number          :integer
#  row             :integer
#  status          :enum
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  concert_id      :bigint           not null
#  ticket_order_id :bigint
#  user_id         :bigint
#
# Indexes
#
#  index_tickets_on_concert_id       (concert_id)
#  index_tickets_on_ticket_order_id  (ticket_order_id)
#  index_tickets_on_user_id          (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (concert_id => concerts.id)
#  fk_rails_...  (user_id => users.id)
#
class Ticket < ApplicationRecord
  belongs_to :concert
  belongs_to :user, optional: true
  belongs_to :ticket_order, optional: true

  enum(
    status: {
      unsold: "unsold",
      :held => "held",
      :purchased => "purchased",
      :refunded => "refunded"
    }
  )

  def toggle_for(user)
    return unless user
    return if self.user && self.user != user
    case status
    when "unsold"
      update(status: "held", user: user)
    when "held"
      update(status: "unsold", user: user)
    end
  end

  def color_for(user)
    case status
    when "unsold" then "bg-white"
    when "held"
      if self.user == user then "bg-red-600" else "bg-yellow-500" end
    when "purchased"
      if self.user == user then "bg-green-600" else "bg-yellow-500" end
    end
  end
end

# == Schema Information
#
# Table name: concerts
#
#  id          :bigint           not null, primary key
#  access      :enum
#  description :text
#  genre_tags  :text
#  ilk         :enum
#  name        :string
#  start_time  :datetime
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  venue_id    :bigint           not null
#
# Indexes
#
#  index_concerts_on_venue_id  (venue_id)
#
# Foreign Keys
#
#  fk_rails_...  (venue_id => venues.id)
#
class Concert < ApplicationRecord
  belongs_to :venue
  has_many(
    :gigs,
    -> { order(order: :asc) },
    dependent: :destroy,
    inverse_of: :concert
  )

  has_many :bands, through: :gigs
  has_many :tickets, dependent: :destroy

  validates :name, presence: true

  enum ilk: {concert: "concert", meet_n_greet: "meet_n_greet", battle: "battle"}
  enum access: {general: "general", members: "members", vips: "vips"}

  def start_day
    start_time.to_date
  end

  def duration_minutes
    gigs.map(&:duration_minutes).sum
  end

  def genre_parameters
    genre_tags.split(",").map(&:parameterize).join(",")
  end

  def unsold_ticket_count
    tickets.unsold.count
  end

  def sold_out?
    unsold_ticket_count.zero?
  end

  def sell_out!
    tickets.update_all(status: :purchased, user: User.horder)
  end

  def find_ticket_at(row:, number:)
    tickets.find { |ticket| ticket.row == row && ticket.number == number }
  end

  def self.random_purchase_all!(min = 10, max = 30)
    Concert.find_each { |concert| concert.random_purchase!(min, max) }
  end

  def random_purchase!(min = 10, max = 30)
    purchase = rand(min..max)

    purchase.times do
      tickets.unsold.sample.update(status: :purchased, user: User.horder)
    end
  end

  def self.search(query)
    joins(:bands)
      .where("concerts.name ILIKE ? ", "%#{query}%")
      .or(Concert.where("concerts.genre_tags ILIKE ? ", "%#{query}%"))
      .or(Concert.joins(:bands).where("bands.name ILIKE ? ", "%#{query}%"))
      .uniq
  end
end

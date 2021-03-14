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
# Table name: gigs
#
#  id               :bigint           not null, primary key
#  duration_minutes :integer
#  order            :integer
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  band_id          :bigint           not null
#  concert_id       :bigint           not null
#
# Indexes
#
#  index_gigs_on_band_id     (band_id)
#  index_gigs_on_concert_id  (concert_id)
#
# Foreign Keys
#
#  fk_rails_...  (band_id => bands.id)
#  fk_rails_...  (concert_id => concerts.id)
#
class Gig < ApplicationRecord
  belongs_to :band
  belongs_to :concert
end

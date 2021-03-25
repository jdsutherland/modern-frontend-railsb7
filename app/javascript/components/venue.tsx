import * as React from "react"
import VenueHeader from 'components/venue_header.tsx'
import VenueBody from 'components/venue_body.tsx'

interface VenueProps {
  rows: number
  seatsInRow: number
}

const Venue = ({ rows, seatsInRow }: VenueProps) => {
  const [ticketsToBuy, setTicketsToBuy] = React.useState(1)

  return (
    <>
      <VenueHeader
        seatsInRow={seatsInRow}
        setTicketsToBuy={setTicketsToBuy}
      />
      <VenueBody
        seatsInRow={seatsInRow}
        rows={rows}
        ticketsToBuy={ticketsToBuy}
      />
    </>
  )
}

export default Venue

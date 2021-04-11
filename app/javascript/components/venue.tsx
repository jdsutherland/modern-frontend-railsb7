import * as React from "react"
import VenueHeader from 'components/venue_header.tsx'
import VenueBody from 'components/venue_body.tsx'

interface VenueProps {
  concertId: number
  rows: number
  seatsInRow: number
}

export interface TicketData {
  id: number
  row: number
  number: number
  status: string
}

export type RowData = TicketData[]
export type VenueData = RowData[]

const Venue = ({ concertId, rows, seatsInRow }: VenueProps) => {
  const [ticketsToBuy, setTicketsToBuy] = React.useState(1)
  const [venueData, setVenueData] = React.useState<VenueData>([])

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/tickets.json?concert_id=${concertId}`)
      const json = await response.json()
      setVenueData(json)
    }
    fetchData()
    const interval = setInterval(() => fetchData(), 1000 * 60)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <VenueHeader
        seatsInRow={seatsInRow}
        setTicketsToBuy={setTicketsToBuy}
      />
      <VenueBody
        concertId={concertId}
        seatsInRow={seatsInRow}
        rows={rows}
        ticketsToBuy={ticketsToBuy}
        venueData={venueData}
      />
    </>
  )
}

export default Venue

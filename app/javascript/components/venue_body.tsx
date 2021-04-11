import * as React from "react"
import Row from 'components/row.tsx'
import { VenueData } from "./venue"

interface VenueBodyProps {
  concertId: number
  seatsInRow: number
  rows: number
  ticketsToBuy: number
  venueData: VenueData
}

const rowItems = ({
  concertId,
  seatsInRow,
  rows,
  ticketsToBuy,
  venueData
}) => {
  const rowNumbers = Array.from(Array(rows).keys())
  return rowNumbers.map((rowNumber) => (
    <Row
      concertId={concertId}
      key={rowNumber}
      rowData={venueData[rowNumber]}
      rowNumber={rowNumber}
      seatsInRow={seatsInRow}
      ticketsToBuy={ticketsToBuy}/>
  ))
}

const VenueBody = (props: VenueBodyProps) => {
  return (
    <table className="table">
      <tbody>{rowItems(props)}</tbody>
    </table>
  )
}

export default VenueBody

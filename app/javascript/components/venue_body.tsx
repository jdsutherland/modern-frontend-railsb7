import * as React from "react"
import Row from 'components/row.tsx'

interface VenueBodyProps {
  seatsInRow: number
  rows: number
  ticketsToBuy: number
}

const rowItems = (
  seatsInRow: number,
  rows: number,
  ticketsToBuy: number
) => {
  const rowNumbers = Array.from(Array(rows).keys())
  return rowNumbers.map((rowNumber) => (
    <Row
      key={rowNumber}
      rowNumber={rowNumber}
      seatsInRow={seatsInRow}
      ticketsToBuy={ticketsToBuy}/>
  ))
}

const VenueBody = ({
  seatsInRow,
  rows,
  ticketsToBuy,
}: VenueBodyProps) => {
    return (
      <table className="table">
        <tbody>{rowItems(seatsInRow, rows, ticketsToBuy)}</tbody>
      </table>
    )
  }

export default VenueBody

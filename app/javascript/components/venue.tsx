import * as React from "react"
import Row from 'components/row.tsx'

interface VenueProps {
  rows: number
  seatsInRow: number
}

const Venue = ({ rows, seatsInRow }: VenueProps) => {
  const rowNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const rowItems = rowNumbers.map((rowNumber) => {
    return (
      <Row
        key={rowNumber}
        rowNumber={rowNumber}
        seatsInRow={seatsInRow} />
    )
  })
  return (
    <table className="table">
      <tbody>{rowItems}</tbody>
    </table>
  )
}

export default Venue

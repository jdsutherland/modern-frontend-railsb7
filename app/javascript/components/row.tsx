import * as React from "react"
import Seat from 'components/seat.tsx'

interface RowProps {
  rowNumber: number
  seatsInRow: number
}

const Row = ({ rowNumber, seatsInRow }: RowProps) => {
  const seatItems = Array.from(Array(seatsInRow).keys()).map(
    (seatNumber) => {
      return <Seat key={seatNumber} seatNumber={seatNumber} initialStatus="open" />
    }
  )
  return <tr className="h-20">{seatItems}</tr>
}

export default Row

import * as React from "react"

interface SeatProps {
  seatNumber: number
}

const Seat = (props: SeatProps) => {
  return (
    <td>
      <span className="p-4 m-2 text-lg border-4 border-black button hover:bg-blue-300">
        {props.seatNumber}
      </span>
    </td>
  )
}

export default Seat

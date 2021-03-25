import * as React from "react"

interface SeatProps {
  seatNumber: number
  status: string
  clickHandler: (seatNumber: number) => void
}

const Seat = ({ seatNumber, status, clickHandler }: SeatProps) => {
  const changeState = (): void => {
    clickHandler(seatNumber)
  }

  function stateDisplayClass(): string {
    if (status === "open") {
      return "bg-white hover:bg-blue-300"
    } else if (status === "held") {
      return "bg-green-500"
    } else {
      return "bg-red-500"
    }
  }

  const cssClass = "p-4 m-2 border-black border-4 text-lg"

  return (
    <td>
      <span
        className={`${cssClass} ${stateDisplayClass()}`}
        onClick={changeState}
      >
        {seatNumber}
      </span>
    </td>
  )
}

export default Seat

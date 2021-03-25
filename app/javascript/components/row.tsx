import * as React from "react"
import Seat from 'components/seat.tsx'

interface RowProps {
  rowNumber: number
  seatsInRow: number
  ticketsToBuy: number
}

const Row = ({
  rowNumber,
  seatsInRow,
  ticketsToBuy
}: RowProps) => {
  const [seatStatuses, setSeatStatuses] = React.useState(
    Array.from(Array(seatsInRow).keys()).map(() => "open")
  )

  function isSeatValid(seatNumber: number): boolean {
    if (seatNumber + ticketsToBuy > seatsInRow) {
      return false
    }
    for (let i = 1; i < ticketsToBuy; i++) {
      if (seatStatuses[seatNumber + i] === "held") {
        return false
      }
    }
    return true
  }

  function validSeatStatus(seatNumber: number): string {
    if (seatStatuses[seatNumber] === "held") {
      return "held"
    } else {
      return isSeatValid(seatNumber) ? "open" : "invalid"
    }
  }

  function newState(oldStatus: string): string {
    if (oldStatus === "open") {
      return "held"
    } else if (oldStatus === "held") {
      return "open"
    } else {
      return "invalid"
    }
  }

  function onSeatChange(seatNumber: number): void {
    if (validSeatStatus(seatNumber) === "invalid") return

    setSeatStatuses(
      seatStatuses.map((status, index) => {
        if (
          index >= seatNumber &&
          index < seatNumber + ticketsToBuy
        ) {
          return newState(seatStatuses[seatNumber])
        } else {
          return status
        }
      })
    )
  }

  const seatItems = Array.from(Array(seatsInRow).keys()).map(
    (seatNumber) => {
      return (
        <Seat
          key={seatNumber}
          seatNumber={seatNumber}
          status={validSeatStatus(seatNumber)}
          clickHandler={onSeatChange}
        />
      )
    }
  )
  return <tr className="h-20">{seatItems}</tr>
}

export default Row

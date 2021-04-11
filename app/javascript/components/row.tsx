import * as React from "react"
import Rails from "@rails/ujs"
import Seat from 'components/seat.tsx'
import { RowData, TicketData } from "./venue"

interface RowProps {
  concertId: number
  rowData: RowData
  rowNumber: number
  seatsInRow: number
  ticketsToBuy: number
}

const Row = ({
  concertId,
  rowData,
  rowNumber,
  seatsInRow,
  ticketsToBuy,
}: RowProps) => {
  const [seatStatuses, setSeatStatuses] = React.useState(
    Array.from(Array(seatsInRow).keys()).map(() => "unsold")
  )

  React.useEffect(() => {
    if (rowData) {
      setSeatStatuses(
        rowData.map((ticketData: TicketData) => ticketData.status)
      )
    }
  }, [rowData])

  function isSeatValid(seatNumber: number): boolean {
    if (seatNumber + ticketsToBuy > seatsInRow) {
      return false
    }
    for (let i = 1; i < ticketsToBuy; i++) {
      const seatStatus = seatStatuses[seatNumber + i]
      if (seatStatus === "held" || seatStatus === "purchased") {
        return false
      }
    }
    return true
  }

  function validSeatStatus(seatNumber: number): string {
    const seatStatus = seatStatuses[seatNumber]
    if (seatStatus === "held" || seatStatus === "purchased") {
      return seatStatus
    } else {
      return isSeatValid(seatNumber) ? "unsold" : "invalid"
    }
  }

  function newState(oldStatus: string): string {
    if (oldStatus === "unsold") {
      return "held"
    } else if (oldStatus === "held") {
      return "unsold"
    } else {
      return "invalid"
    }
  }

  function updateSeatStatus(seatNumber: number): string[] {
    return seatStatuses.map((status: string, index: number) => {
      if (index >= seatNumber && index < seatNumber + ticketsToBuy) {
        return newState(seatStatuses[seatNumber])
      } else {
        return status
      }
    })
  }

  function onSeatChange(seatNumber: number): void {
    const validStatus = validSeatStatus(seatNumber)
    if (validStatus === "invalid" || validStatus === "purchased") return

    const newSeatStatuses = updateSeatStatus(seatNumber)
    setSeatStatuses(newSeatStatuses)
    fetch(`/shopping_carts`, {
      method: "POST",
      headers: {
        "X-CSRF-Token": Rails.csrfToken(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        concertId: concertId,
        row: rowNumber + 1,
        seatNumber: seatNumber + 1,
        status: newSeatStatuses[seatNumber],
        ticketsToBuy: ticketsToBuy,
      })
    })
  }

  const seatItems = Array.from(Array(seatsInRow).keys()).map(
    (seatNumber: number) => {
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

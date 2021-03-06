import * as React from "react"
import styled from 'styled-components';

const Header = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 15px;
  margin-right: 15px;
`

interface VenueHeaderProps {
  seatsInRow: number
  setTicketsToBuy: (n: number) => void
}

const options = (seatsInRow: number) => {
  const arrayOfNumbers = Array.from(Array(seatsInRow).keys())
  return arrayOfNumbers.map(i => (
    <option key={i + 1} value={i + 1}>
      {i + 1}
    </option>
  ))
};

const VenueHeader = ({
  seatsInRow,
  setTicketsToBuy,
}: VenueHeaderProps) => {
  const setTicketsOnChange = (event: React.SyntheticEvent): void => {
    const target = event.target as HTMLSelectElement
    setTicketsToBuy(parseInt(target.value, 10))
  }

  return (
      <div>
        <Header>How many tickets would you like?</Header>
        <span className="select">
          <select onChange={setTicketsOnChange}>
            {options(seatsInRow)}
          </select>
        </span>
      </div>
    )
  }

export default VenueHeader

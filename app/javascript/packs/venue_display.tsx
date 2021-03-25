import * as React from "react"
import * as ReactDOM from "react-dom"
import Venue from "components/venue.tsx"

document.addEventListener("turbo:load", () => {
  if (document.getElementById("react-element")) {
    ReactDOM.render(
      <Venue rows={10} seatsInRow={10} />,
      document.getElementById("react-element")
    )
  }
})

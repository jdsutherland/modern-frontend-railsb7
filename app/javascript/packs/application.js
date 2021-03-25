// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application
// logic in a relevant structure within app/javascript and only use these pack
// files to reference that code so it'll be compiled.

import Rails from "@rails/ujs"
import "@hotwired/turbo-rails"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import "controllers"

Rails.start()
ActiveStorage.start()

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

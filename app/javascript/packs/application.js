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

const images = require.context("../images", true)
const imagePath = name => images(name, true)

document.addEventListener("turbo:before-stream-render", (event) => {
  if (event.target.action === "remove") {
    const targetFrame = document.getElementById(event.target.target)
    if (targetFrame.dataset.animateOut) {
      event.preventDefault()
      const elementBeingAnimated = targetFrame.children[0]
      elementBeingAnimated.classList.add(targetFrame.dataset.animateOut)
      elementBeingAnimated.addEventListener("animationend", () => {
        targetFrame.remove()
      })
    }
  }
})

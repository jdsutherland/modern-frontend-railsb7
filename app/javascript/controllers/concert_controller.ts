import { Controller } from 'stimulus'

export default class ConcertController extends Controller {
  static targets = ["tickets"]
  static values = { id: Number, soldOut: Boolean, ticketsRemaining: Number }

  ticketsTarget: HTMLElement
  soldOutValue: boolean
  ticketsRemainingValue: number

  soldOutValueChanged(): void {
    if (this.soldOutValue) {
      this.ticketsTarget.innerText = "Sold Out"
    } else {
      const ticketsRemaining = `${this.ticketsRemainingValue} Tickets Remaining`
      this.ticketsTarget.innerText = ticketsRemaining
    }
  }

}

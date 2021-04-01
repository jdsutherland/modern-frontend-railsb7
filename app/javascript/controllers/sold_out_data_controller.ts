import { Controller } from 'stimulus'

export default class SoldOutDataController extends Controller {
  static targets = ["concert"]

  concertTargets: Array<HTMLElement>

  connect(): void {
    setInterval(() => this.updateData(), 1000 * 60)
  }

  async updateData(): Promise<void> {
    console.log("checking")
    const response = await fetch("/sold_out_concerts")
    const jsonString = await response.text()
    console.log(jsonString)
    const jsonObject = JSON.parse(jsonString)
    const soldOutConcertIds = jsonObject["sold_out_concert_ids"]
    this.concertTargets.forEach((concertElement: HTMLElement) => {
      concertElement.dataset.concertSoldOutValue = soldOutConcertIds.includes(
        concertElement.dataset.concertIdValue
      )
    })
  }
}

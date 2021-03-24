import { Controller } from 'stimulus'

export default class TextController extends Controller {
  static targets = ["elementWithText"]
  static values = { status: Boolean, on: String, off: String }

  elementWithTextTarget: HTMLElement
  statusValue: boolean
  onValue: string
  offValue: string

  toggle(): void {
    this.flipState()
  }

  flipState() {
    this.statusValue = !this.statusValue
  }

  statusValueChanged(): void {
    this.updateText()
  }

  newText(): string {
    return this.statusValue ? this.onValue : this.offValue
  }

  updateText(): void {
    this.elementWithTextTarget.innerText = this.newText()
  }
}

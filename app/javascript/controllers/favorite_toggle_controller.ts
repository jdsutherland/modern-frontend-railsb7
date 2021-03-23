import { Controller } from 'stimulus'

export default class FavoriteToggleController extends Controller {
  static targets = ["elementToHide", "elementWithText"]
  static values = { visible: Boolean }

  elementToHideTarget: HTMLElement
  elementWithTextTarget: HTMLElement
  visibleValue: boolean

  connect(): void {
    this.updateHiddenClass()
    this.updateText()
  }

  toggle(): void {
    this.flipState()
    this.updateHiddenClass()
    this.updateText()
  }

  flipState() {
    this.visibleValue = !this.visibleValue
  }

  updateHiddenClass() {
    this.elementToHideTarget.classList.toggle("hidden", !this.visibleValue)
  }

  newText() {
    return this.visibleValue ? "Hide" : "Show"
  }

  updateText() {
    this.elementWithTextTarget.innerText = this.newText()
  }
}

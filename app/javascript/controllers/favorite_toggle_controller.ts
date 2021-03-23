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
  }

  flipState() {
    this.visibleValue = !this.visibleValue
  }

  visibleValueChanged() {
    this.updateHiddenClass()
    this.updateText()
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

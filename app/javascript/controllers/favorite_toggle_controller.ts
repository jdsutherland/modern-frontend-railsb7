import { Controller } from 'stimulus'

export default class FavoriteToggleController extends Controller {
  static classes = ["hidden"]
  static targets = ["elementToHide", "elementWithText"]
  static values = { visible: Boolean }

  elementToHideTarget: HTMLElement
  elementWithTextTarget: HTMLElement
  hiddenClass: string
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
    this.elementToHideTarget.classList.toggle(this.hiddenClass, !this.visibleValue)
  }

  newText() {
    return this.visibleValue ? "Hide" : "Show"
  }

  updateText() {
    this.elementWithTextTarget.innerText = this.newText()
  }
}

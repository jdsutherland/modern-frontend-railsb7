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

  flipState(): void {
    this.visibleValue = !this.visibleValue
  }

  visibleValueChanged(): void {
    this.updateHiddenClass()
    this.updateText()
  }

  updateHiddenClass(): void {
    this.elementToHideTarget.classList.toggle(this.hiddenClass, !this.visibleValue)
  }

  newText(): string {
    return this.visibleValue ? "Hide" : "Show"
  }

  updateText(): void {
    this.elementWithTextTarget.innerText = this.newText()
  }
}

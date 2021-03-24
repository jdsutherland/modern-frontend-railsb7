import { Controller } from 'stimulus'

export default class CssController extends Controller {
  static classes = ["css"]
  static targets = ["elementToChange"]
  static values = { status: Boolean }

  elementToChangeTarget: HTMLElement
  cssClass: string
  statusValue: boolean

  toggle(): void {
    this.flipState()
  }

  flipState(): void {
    this.statusValue = !this.statusValue
  }

  statusValueChanged(): void {
    this.updateCssClass()
  }

  updateCssClass(): void {
    for (const oneCssClass of this.cssClass.split(" ")) {
      this.elementToChangeTarget.classList.toggle(
        oneCssClass,
        !this.statusValue
      )
    }
  }
}

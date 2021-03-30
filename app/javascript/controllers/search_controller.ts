import { Controller } from 'stimulus'
import "form-request-submit-polyfill"

export default class SearchController extends Controller {
  static targets = ["form", "input", "results"]

  formTarget: HTMLFormElement
  resultsTarget: HTMLFormElement
  inputTarget: HTMLFormElement

  submit(): void {
    this.formTarget.requestSubmit()
  }

  resetOnOutsideClick(event: Event): void {
    if (!this.element.contains(event.target as HTMLElement)) {
      this.reset()
    }
  }

  resetOnEsc(event: KeyboardEvent): void {
    if (event.key === "Escape") {
      this.reset()
    }
  }

  reset(): void {
    this.resultsTarget.classList.add("hidden")
    this.resultsTarget.innerText = ""
    this.inputTarget.value = ""
  }
}

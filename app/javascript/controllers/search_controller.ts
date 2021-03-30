import { Controller } from 'stimulus'
import "form-request-submit-polyfill"

export default class SearchController extends Controller {
  static targets = ["form", "input", "results"]

  formTarget: HTMLFormElement
  resultsTarget: HTMLFormElement
  inputTarget: HTMLFormElement

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

  basicSubmit(): void {
    if (this.inputTarget.value === "") {
      this.reset()
    } else {
      this.formTarget.requestSubmit()
    }
  }

  submit(): void {
    this.debounce(this.basicSubmit.bind(this))()
  }

  debounce(fnToDebounce, wait = 300) {
    let timeoutId = null

    return (...args) => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        timeoutId = null
        fnToDebounce(...args)
      }, wait)
    }
  }
}

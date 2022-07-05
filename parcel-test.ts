import { html, LitElement } from "lit"

class ParcelTest extends LitElement {
  // If you assign "readonly" here, the entire reflection state is broken.
  // readonly: boolean = false
  readonly: boolean

  static get properties () {
    return {
      readonly: { reflect: true, type: Boolean }
    }
  }

  constructor () {
    super()
    this.readonly = false
  }

  render () {
    return html`<button @click=${() => this.readonly = !this.readonly}>Readonly state: ${this.readonly}</button>`
  }
}

window.customElements.define("parcel-test", class extends ParcelTest{})


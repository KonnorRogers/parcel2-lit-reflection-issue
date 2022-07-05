import { html, LitElement } from "lit"

class ParcelTest extends LitElement {
  static get properties () {
    return {
      readonly: { reflect: true, type: Boolean }
    }
  }
  constructor() {
    super()
    this.readonly = false
  }
  render () {
    return html`<button @click=${() => this.readonly = !this.readonly}>Readonly state: ${this.readonly}</button>`
  }
}

window.customElements.define("parcel-test", class extends ParcelTest{})


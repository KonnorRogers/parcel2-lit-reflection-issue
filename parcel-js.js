import { html, LitElement } from "lit"

class ParcelJs extends LitElement {
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

window.customElements.define("parcel-js", class extends ParcelJs{})


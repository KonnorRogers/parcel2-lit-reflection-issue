import {html, LitElement} from "https://cdn.skypack.dev/lit"

class CdnTest extends LitElement {
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

window.customElements.define("cdn-test", CdnTest)

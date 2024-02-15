const footerTemplate = document.createElement("template")
const footerStyle = document.createElement("style")

footerTemplate.innerHTML = ``
footerStyle.innerHTML = ``

class Footer extends HTMLElement {
  constructor() {
    super()
    const shadowRoot = this.attachShadow({mode: "open"})
    let clone = footerTemplate.content.cloneNode(true)
    shadowRoot.append(clone)
    shadowRoot.append(footerStyle)
  }
}

customElements.define("page-footer", Footer)
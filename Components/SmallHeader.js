const template = document.createElement("template")
template.innerHTML = `Add html here`


class SmallHeader extends HTMLElement {
  constructor() {
    super()
    const shadowRoot = this.attachShadow({mode: "closed"})
    let div = document.createElement("div")
    div.textContent = "Heres my component"
    shadowRoot.append(div)
  }
}

customElements.define("header-component", SmallHeader)
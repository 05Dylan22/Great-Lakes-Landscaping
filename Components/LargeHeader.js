const template = document.createElement("template")
const style = document.createElement("style")
style.innerHTML = `ADD STYLE`
template.innerHTML = `ADD HTML`

class LargeHeader extends HTMLElement {
  constructor() {
    super()
    const shadowRoot = this.attachShadow({mode: "open"})
    let clone = template.content.cloneNode(true)
    shadowRoot.append(clone)
    shadowRoot.append(style)
  }
}

customElements.define("large-header", LargeHeader)
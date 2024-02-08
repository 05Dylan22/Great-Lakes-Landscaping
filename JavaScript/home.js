let el = document.getElementById("small-header")

customElements.whenDefined("small-header").then(() => {
  let shadow = el.shadowRoot

  const hamburgerMenu = shadow.querySelector(".hamburger-menu")
  const menu = shadow.querySelector(".hamburger-slideout")
  const closeSlideout = shadow.querySelector(".close-slideout")
  
  hamburgerMenu.addEventListener("click", () => {
    menu.style.animation = "slideIn 0.15s ease-in forwards"
  })
  
  closeSlideout.addEventListener("click", () => {
    menu.style.animation = "slideOut 0.15s ease-in forwards"
  })
})
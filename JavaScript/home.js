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

const dropdownContainer = document.querySelector(".services-dropdown-container")
const dropdown = document.querySelector(".dropdown")
const servicesLink = document.getElementById("services")

dropdownContainer.addEventListener("mouseover", () => {
  servicesLink.style.animation = "remainHoverStyle 0.15s ease-in forwards"
  dropdown.style.display = "grid"
  dropdown.style.animation = "showDropdown 0.15s ease-in forwards"
})

dropdownContainer.addEventListener("mouseleave", () => {
  servicesLink.style.animation = "removeHoverStyle 0.15s ease-in forwards"
  dropdown.style.animation = "hideDropdown 0.15s ease-in forwards"
})
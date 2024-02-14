let el = document.getElementById("small-header")
let largeEl = document.getElementById("large-header")

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

customElements.whenDefined("large-header").then(() => {
  let shadow = largeEl.shadowRoot

  const dropdownContainer = shadow.querySelector(".services-dropdown-container")
  const dropdown = shadow.querySelector(".dropdown")
  const servicesLink = shadow.getElementById("services")
  
  function showDropdown() {
    servicesLink.style.animation = "remainHoverStyle 0.15s ease-in forwards"
    dropdown.style.display = "grid"
    dropdown.style.animation = "showDropdown 0.15s ease-in forwards"
  }
  
  dropdownContainer.addEventListener("mouseenter", showDropdown)
  
  dropdownContainer.addEventListener("mouseleave", () => {
    servicesLink.style.animation = "removeHoverStyle 0.15s ease-in forwards"
    dropdown.style.animation = "hideDropdown 0.15s ease-in forwards"
  })
})

//CREATE THE OTHER SERVICE SECTIONS ONCE THIS IS DECIDED AND IMPLEMENTED
//THEN YOU CAN BEGIN ON FOOTER
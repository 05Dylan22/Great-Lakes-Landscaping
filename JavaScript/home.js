const hamburgerMenu = document.querySelector(".hamburger-menu")
const menu = document.querySelector(".hamburger-slideout")
const closeSlideout = document.querySelector(".close-slideout")

hamburgerMenu.addEventListener("click", () => {
  menu.style.animation = "slideIn 0.15s ease-in forwards"
})

closeSlideout.addEventListener("click", () => {
  menu.style.animation = "slideOut 0.15s ease-in forwards"
})
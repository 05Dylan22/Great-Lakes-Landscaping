const template = document.createElement("template")
const style = document.createElement("style")
style.innerHTML = `
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.contact-btn {
  color: black;
  text-decoration: none;
  border: none;
  border-radius: 10px;
  background-color: white;
  margin-right: 14px;
}

.hamburger-menu {
  display: grid;
  align-items: center;
  margin-left: 14px;
}

.hamburger-bar {
  border: none;
  border-radius: 20px;
  width: 100%;
  background-color: white;
}

.hamburger-slideout {
  background-color: rgb(219, 219, 219);
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: translateX(-100%);
}

.hamburger-slideout > nav > a {
  color: black;
  display: block;
  text-decoration: none;
  display: flex;
  align-items: center;
}

.hamburger-slideout > nav > a:nth-of-type(odd) {
  background-color: rgba(50, 160, 254, 0.5);
}

.top-slideout-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 24px;
}

.slideout-cta-container {
  width: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
}

.slideout-cta-title {
  text-align: center;
}

.slideout-cta-container > a {
  margin: auto;
}

.slideout-cta-btn {
  text-decoration: none;
  color: white;
  background-color: #32a0fe;
  border: none;
  border-radius: 15px;
}

@media screen and (min-width: 270px) {
  .header {
    height: 65px;
  }

  .contact-btn {
    padding: 10px 8px;
  }

  .hamburger-menu {
    height: 55%;
    width: 40px;
  }

  .hamburger-bar {
    height: 6px;
  }

  .hamburger-slideout > nav > a {
    padding-left: 18px;
    height: 32px;
    font-size: 18px;
  }

  .top-slideout-menu {
    height: 85px;
  }

  .logo-in-slideout {
    height: 85%;
    margin-left: 12px;
  }

  .close-slideout {
    font-size: 34px;
    margin-right: 12px;
  }

  .slideout-cta-container {
    margin-top: 100px;
  }

  .slideout-cta-title {
    font-size: 26px;
  }

  .slideout-cta-btn {
    padding: 14px 30px;
    font-size: 18px;
  }
}

@media screen and (min-width: 300px) {
  .hamburger-menu {
    width: 45px;
  }

  .slideout-cta-title {
    font-size: 28px;
  }
}

@media screen and (min-width: 350px) {
  .hamburger-menu {
    margin-left: 10px;
  }

  .contact-btn {
    margin-right: 14px;
    padding: 10px 16px;
    font-size: 17px;
  }

  .slideout-cta-title {
    font-size: 32px;
  }
}

@media screen and (min-width: 460px) {
  .hamburger-menu {
    width: 50px;
    height: 60%;
  }

  .hamburger-bar {
    height: 7px;
  }
}

@keyframes slideIn {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(0px);
  }
}

@keyframes slideOut {
  0% {
    transform: translateX(0px);
  }

  100% {
    transform: translateX(-100%);
  }
}
`
template.innerHTML = `
<header class="header">
<div class="hamburger-slideout">
  <div class="top-slideout-menu">
    <img class="logo-in-slideout" src="./Images/BlueLogo.png" alt="Great Lakes Landscaping Logo">
    <p class="close-slideout">X</p>
  </div>
  <nav>
    <a href="./Pages/allServices.html" class="menu-item">Services</a>
    <a href="./Pages/ourWork.html" class="menu-item">Our Work</a>
    <a href="./Pages/about.html" class="menu-item">About</a>
  </nav>
  <div class="slideout-cta-container">
    <h2 class="slideout-cta-title">Get In Touch With Us Today</h2>
    <a class="slideout-cta-btn" href="./Pages/contact.html">Contact Us</a>  
  </div>
</div>
<div class="hamburger-menu">
  <div class="hamburger-bar"></div>
  <div class="hamburger-bar"></div>
  <div class="hamburger-bar"></div>
</div>
<a class="contact-btn" href="./Pages/contact.html">Contact Us</a>
</header>
`


class SmallHeader extends HTMLElement {
  constructor() {
    super()
    const shadowRoot = this.attachShadow({mode: "open"})
    let clone = template.content.cloneNode(true)
    shadowRoot.append(clone)
    shadowRoot.append(style)
  }
}

customElements.define("small-header", SmallHeader)
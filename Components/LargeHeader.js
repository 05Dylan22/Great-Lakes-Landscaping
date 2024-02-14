const largeTemplate = document.createElement("template")
const largeStyle = document.createElement("style")
largeStyle.innerHTML = `
@media screen and (min-width: 500px) {
  .large-header {
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 4px;
  }

  .large-logo, .logo-link {
    height: 100%;
  }

  .large-logo {
    margin-left: 12px;
  }

  .large-nav {
    width: calc(100px * 3);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .large-header-link {
    text-decoration: none;
    color: black;
    font-size: 18px;
    height: 100%;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.15s;
  }

  .large-header-link:first-of-type {
    height: 65px;
  }

  .large-header-link:hover {
    background-color: #32a0fe;
    color: white;
  }

  .large-contact-btn {
    margin-right: 12px;
    text-decoration: none;
    color: white;
    background-color: #32a0fe;
    border: none;
    border-radius: 10px;
    padding: 8px 14px;
    font-size: 17px;
    border: 2px solid #32a0fe;
    transition: all 0.15s;
  }

  .large-contact-btn:hover {
    background-color: white;
    color: #32a0fe;
  }

  .dropdown, .services-dropdown-container {
    display: none;
  }

  @media (hover: hover) and (pointer: fine) {
    #servicesForMobile {
      display: none;
    }
  
    .services-dropdown-container {
      height: 100%;
      position: relative;
      display: block;
    }
  
    .dropdown {
      position: absolute;
      background-color: #32a0fe;
      border: none;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      height: 95px;
      opacity: 0;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      width: calc(100px * 3);
      z-index: 20;
    }
  
    .dropdown-link {
      text-decoration: none;
      color: white;
      font-size: 14px;
      margin-left: 10px;
      transition: all 0.15s;
    }
  
    .dropdown-link:hover {
      text-decoration: underline;
    }
  }
}
@media screen and (min-width: 655px) {
  .large-header-link {
    font-size: 20px;
  }

  .large-contact-btn {
    padding: 10px 16px;
    font-size: 18px;
  }
}
@media screen and (min-width: 800px) {
  .large-header-link {
    min-width: 115px;
    font-size: 22px;
  }

  .dropdown {
    width: calc(115px * 3);
    height: 115px;
  }

  .dropdown-link {
    font-size: 16px;
  }
}
@keyframes showDropdown {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes hideDropdown {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    display: none;
  }
}

@keyframes remainHoverStyle {
  0% {
    color: black;
    background-color: white;
  }

  100% {
    color: white;
    background-color: #32a0fe;
  }
}

@keyframes removeHoverStyle {
  0% {
    color: white;
    background-color: #32a0fe;
  }

  100% {
    color: black;
    background-color: white;
  }
}
`
largeTemplate.innerHTML = `
<header class="large-header">
<a class="logo-link" href="/index.html">
  <img class="large-logo" src="./Images/BlueLogo.png" alt="Company Logo">
</a>
<nav class="large-nav">
  <a href="./Pages/allServices.html" class="large-header-link" id="servicesForMobile">Services</a>
  <div class="services-dropdown-container">
    <a href="./Pages/allServices.html" class="large-header-link" id="services">Services</a>
    <div class="dropdown">
      <a href="./Pages/SpecificService.html" class="dropdown-link">Mowing</a>
      <a href="./Pages/SpecificService.html" class="dropdown-link">Mulching</a>
      <a href="./Pages/SpecificService.html" class="dropdown-link">General Cleanup</a>
      <a href="./Pages/SpecificService.html" class="dropdown-link">Spring Cleanup</a>
      <a href="./Pages/SpecificService.html" class="dropdown-link">Fall Cleanup</a>
      <a href="./Pages/SpecificService.html" class="dropdown-link">Weeding</a>
      <a href="./Pages/SpecificService.html" class="dropdown-link">Overseeding</a>
      <a href="./Pages/SpecificService.html" class="dropdown-link">Powerwashing</a>
    </div>
  </div>
  <a href="./Pages/about.html" class="large-header-link">About</a>
  <a href="./Pages/ourWork.html" class="large-header-link">Our Work</a>
</nav>
<a class="large-contact-btn" href="./Pages/contact.html">Contact Us</a>
</header>
`

class LargeHeader extends HTMLElement {
  constructor() {
    super()
    const shadowRoot = this.attachShadow({mode: "open"})
    let clone = largeTemplate.content.cloneNode(true)
    shadowRoot.append(clone)
    shadowRoot.append(largeStyle)
  }
}

customElements.define("large-header", LargeHeader)
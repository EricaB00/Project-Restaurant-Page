function navBar() {
  let content = document.querySelector("#content");
  let header = document.createElement("header");
  header.classList.add("header-nav");
  header.innerHTML += `
  <nav id="all-tabs">
      <ul class="nav-tab">
        <li class="home-tab">Home</li>
        <li class="menu-tab">Menu</li>
        <li class="contact-tab">Contact</li>
      </ul>
    </nav>
  
  `;

  content.appendChild(header);
}

export { navBar };

function homePage() {
  const content = document.querySelector("#content");
  let headerElement = document.querySelector("header");

  let mainElement = document.createElement("main");
  mainElement.classList.add("home-content");
  mainElement.innerHTML = `<div class="box">
<h1 class="title">The Pie Place</h1>

<p>Homemade! Baked fresh!</p>
</div>
<button>Order</button>`;

  headerElement.append(mainElement);
  content.appendChild(headerElement);
  headerElement.insertAdjacentElement("afterend", mainElement);
}

export { homePage };

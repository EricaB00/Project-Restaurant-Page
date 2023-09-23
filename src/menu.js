function menuPage() {
  let headerElement = document.querySelector("header");

  let mainElement = document.createElement("main");
  mainElement.classList.add("menu-content");

  mainElement.innerHTML += `<div class="menu">
  <h1>Menu</h1>
  <p>By the slice: $4.50</p>
  <p>Whole pies: $8.50</p>
  <p>Special orders: $10.00</p>

  <ul class="items">
    <li>Pecan Pie</li>
    <li>Apple Pie</li>
    <li>Cherry Pie</li>
    <li>Key Lime Pie</li>
    <li>Coconut Cream Pie</li>
    <li>Blueberry Pie</li>
  </ul>
</div>`;

  headerElement.insertAdjacentElement("afterend", mainElement);
}

export { menuPage };

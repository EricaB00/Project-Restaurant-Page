function contactPage() {
  let headerElement = document.querySelector("header");

  let mainElement = document.createElement("main");
  mainElement.classList.add("contact-content");

  mainElement.innerHTML += `<div class="contact">
    <div class="hours">
      <h2>Hours</h2>
      <p>Monday - Saturday: 8am - 8pm</p>
      <p>Sunday: 8am - 7pm</p>
    </div>
    <div class="section-break"></div>
    <div class="contact-info">
      <h2>Contact Us</h2>
      <p>Phone number: (000) 000 - 0000</p>
      <p>Email: abcd@abcd.com</p>
      <p>Address: 123 Fake Street</p>
    </div>
  </div>`;

  headerElement.insertAdjacentElement("afterend", mainElement);
}

export { contactPage };

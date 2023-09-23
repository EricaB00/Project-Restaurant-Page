import "./style.css";
import Pie from "./pecanpie.jpg";

import { pageLoad } from "./pageLoad";
import { navBar } from "./navBar";
import { homePage } from "./home";
import { menuPage } from "./menu";
import { contactPage } from "./contact";

//Load Page
pageLoad();

const tabs = document.querySelectorAll("#all-tabs li");

tabs.forEach((tab) => {
  tab.addEventListener("click", switchTab);
});

function switchTab(e) {
  if (e.target.classList.contains("home-tab")) {
    clearContent();
    homePage();
  } else if (e.target.classList.contains("menu-tab")) {
    clearContent();
    menuPage();
  } else if (e.target.classList.contains("contact-tab")) {
    clearContent();
    contactPage();
  }
}

function clearContent() {
  const content = document.querySelector("#content");
  const mainElement = document.querySelector("main");
  if (mainElement) {
    content.removeChild(mainElement);
  }
}

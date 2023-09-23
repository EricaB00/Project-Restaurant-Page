import { navBar } from "./navBar";
import { homePage } from "./home";

function pageLoad() {
  navBar();
  homePage();
}

export { pageLoad };

import { hideAndShowNav } from "./scripts/hideAndShowNav.js";
import { loadingAnimation } from "./scripts/loadingAnimation.js";

// Global state
let lastScrollY = 0;

let button = document.getElementById("enterButton");

button.addEventListener("click", loadingAnimation);
window.addEventListener("scroll", () => hideAndShowNav(lastScrollY));

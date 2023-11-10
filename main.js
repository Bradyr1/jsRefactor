let splash = document.getElementById("splash");
let button = document.getElementById("enterButton");
let loadingBar = document.getElementById("loading-bar");
let progressBar = document.getElementById("progress-bar");
let list = document.getElementsByClassName("list-item");
let music = document.getElementById("spaceMusic");
let heroLogo = document.getElementById("astrox");
let soon = document.getElementById("soon");

function startLoading() {
  loadingBar.style.visibility = "visible";

  setTimeout(() => {
    progressBar.style.animation = "progress-animation 2s";
  }, 100);

  button.style.visibility = "hidden";

  setTimeout(() => {
    document.body.removeChild(splash);
  }, 2200);

  for (const i in list) {
    (() => {
      const node = list[i];
      setTimeout(() => {
        node.style.visibility = "visible";
      }, 100 * i);

      setTimeout(() => {
        node.style.visibility = "hidden";
      }, 100 * i + 99);
    })();
  }
  setTimeout(() => {
    music.play();
  }, 1900);

  setTimeout(() => {
    heroLogo.style.animation = "fade-in 1500ms ease-in";
    soon.style.animation = "fade-in 1500ms ease-in";
    heroLogo.style.opacity = 1;
    soon.style.opacity = 1;
  }, 2300);

  removeEventListener("click", startLoading);
  document.querySelector("body").style.overflow = "visible";
  document.querySelector("body").style.height = "auto";
}

button.addEventListener("click", startLoading);

// Nav Animation
const nav = document.querySelector("nav");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    nav.classList.add("nav--hidden");
  } else {
    nav.classList.remove("nav--hidden");
  }

  lastScrollY = window.scrollY;
});
# jsRefactor

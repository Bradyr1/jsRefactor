/**
 * Displays a loading animation sequence with various timed effects.
 *
 * @async
 * @function loadingAnimation
 * @returns {Promise<void>} A Promise that resolves when the loading animation sequence is complete.
 */
export const loadingAnimation = async () => {
  let splash = document.getElementById("splash");
  let button = document.getElementById("enterButton");
  let loadingBar = document.getElementById("loading-bar");
  let progressBar = document.getElementById("progress-bar");
  let list = document.getElementsByClassName("list-item");
  let music = document.getElementById("spaceMusic");
  let heroLogo = document.getElementById("astrox");
  let soon = document.getElementById("soon");

  loadingBar.style.visibility = "visible";
  document.querySelector("body").style.overflow = "visible";
  document.querySelector("body").style.height = "auto";

  await pause(100);
  progressBar.style.animation = "progress-animation 2s";
  button.style.visibility = "hidden";
  scrollThroughListItems(list);

  await pause(1800);
  music.play();

  await pause(400);
  document.body.removeChild(splash);
  applyFadeInAnimation([heroLogo, soon]);
};

/**
 * Scrolls through a list of DOM elements, toggling their visibility with a timed delay.
 *
 * @param {Array<HTMLElement>} list - The list of DOM elements to scroll through.
 * @returns {void}
 */
const scrollThroughListItems = list => {
  [...list].forEach((node, i) => {
    setTimeout(() => {
      node.style.visibility = "visible";
    }, 100 * i);

    setTimeout(() => {
      node.style.visibility = "hidden";
    }, 100 * i + 99);
  });
};

/**
 * Pauses the execution for a specified duration.
 *
 * @param {number} number - The duration in milliseconds for which the execution should be paused.
 * @returns {Promise<void>} A Promise that resolves after the specified duration.
 */
const pause = number => new Promise(resolve => setTimeout(resolve, number));

/**
 * Applies a fade-in animation to a single node or a list of nodes.
 *
 * @param {HTMLElement | HTMLElement[]} nodes - The node or list of nodes to apply the fade-in effect to.
 * @returns {void}
 */
const applyFadeInAnimation = nodes => {
  if (!Array.isArray(nodes)) {
    nodes = [nodes];
  }

  [...nodes].forEach(el => {
    el.style.animation = "fade-in 1500ms ease-in";
    el.style.opacity = 1;
  });
};

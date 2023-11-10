/**
 * Hides or shows the navigation bar based on the scroll direction.
 *
 * @param {number} lastScrollY - The last recorded scroll position.
 * @returns {void}
 */
export const hideAndShowNav = lastScrollY => {
  const nav = document.querySelector("nav");
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY) {
    nav.classList.add("nav--hidden");
  } else {
    nav.classList.remove("nav--hidden");
  }

  lastScrollY = currentScrollY;
};

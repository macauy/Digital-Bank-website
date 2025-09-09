const menuBtn = document.getElementById("menu-btn");
const overlay = document.getElementById("overlay");
const panel = document.getElementById("nav-panel");
const firstLink = panel?.querySelector("a");
const icon = menuBtn.querySelector("img");
const header = document.querySelector("header");

const openMenu = () => {
  menuBtn.setAttribute("aria-label", "Close menu");
  menuBtn.setAttribute("aria-expanded", "true");
  panel.hidden = false;
  overlay.hidden = false;
  firstLink?.focus();
  icon.src = "./images/icon-close.svg";
};

const closeMenu = () => {
  menuBtn.setAttribute("aria-label", "Open menu");
  menuBtn.setAttribute("aria-expanded", "false");
  panel.hidden = true;
  overlay.hidden = true;
  menuBtn.focus();
  icon.src = "./images/icon-hamburger.svg";
};

menuBtn.addEventListener("click", () => {
  const isOpen = menuBtn.getAttribute("aria-expanded") == "true";
  isOpen ? closeMenu() : openMenu();
});

overlay?.addEventListener("click", closeMenu);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && menuBtn.getAttribute("aria-expanded") === "true") {
    closeMenu();
  }
});

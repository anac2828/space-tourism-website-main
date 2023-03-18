const btnMobileNav = document.querySelector(".mobile-nav-toggle");
const nav = document.querySelector("#primary-navigation");

btnMobileNav.addEventListener("click", () => {
  btnMobileNav.getAttribute("aria-expanded");
  const isOpen =
    btnMobileNav.getAttribute("aria-expanded") === "false"
      ? "true"
      : "false";
  btnMobileNav.setAttribute("aria-expanded", isOpen);
  nav.setAttribute("data-visible", isOpen);
});

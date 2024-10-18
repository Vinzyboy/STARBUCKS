const headerNav = document.querySelector(".header__nav");
const headerlogIn = document.querySelector(".header__logIn");
const toggleMenu = document.querySelector(".toggle__menu");


toggleMenu.addEventListener("click", () => {
  headerNav.classList.toggle("open");
  headerlogIn.classList.toggle("open");
  toggleMenu.classList.toggle("open");
});
feather.replace();

// navbar menu
const navbarNav = document.querySelector(".navbar-nav");
const hamMenu = document.querySelector("#hamburger-menu");

// navbar click
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar navbar untunk emngilakan nav
document.addEventListener("click", function (e) {
  if (!hamMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

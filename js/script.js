feather.replace();

// navbar menu
const navbarNav = document.querySelector(".navbar-nav");
const hamMenu = document.querySelector("#hamburger-menu");
const searchBar = document.querySelector(".search-bar");
const searchBox = document.querySelector(".search-box");

// navbar click
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

document.querySelector(".search-box").onclick = () => {
  searchBar.classList.add("view");
};

// klik di luar navbar untuk menghilakan nav
document.addEventListener("click", function (e) {
  if (!hamMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

document.addEventListener("click", function (e) {
  if (!searchBox.contains(e.target)) {
    searchBar.classList.remove("view");
  }
});

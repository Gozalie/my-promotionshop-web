feather.replace();

// navbar menu
const navbarNav = document.querySelector(".navbar-nav");
const hamMenu = document.querySelector("#hamburger-menu");
const searchBar = document.querySelector(".search-bar");
const searchBox = document.querySelector(".search-box");
const sortBy = document.querySelector(".sort-by");
const sortBox = document.querySelector(".sort-box");

// navbar click
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

document.querySelector(".search-box").onclick = () => {
  searchBar.classList.add("view");
};

document.querySelector(".sort-box").onclick = () => {
  sortBy.classList.add("view-sort");
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

document.addEventListener("click", function (e) {
  if (!sortBox.contains(e.target)) {
    sortBy.classList.remove("view-sort");
  }
});

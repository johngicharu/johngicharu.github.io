// NAVIGATION
const hamMenu = document.getElementById("menuIcon");
const closeMenu = document.getElementById("closeIcon");
const navBar = document.getElementById("navBar");
const logo = document.getElementById("logo");
const scrollAnime = document.getElementById("scrollAnime");
const navLinks = document.querySelectorAll("#navigation ul li a");

function loadNavEvents() {
  // define UI vars

  hamMenu.addEventListener("click", openNav);
  closeMenu.addEventListener("click", closeNav);
  window.addEventListener("scroll", closeNav);
  window.addEventListener("keydown", closeNav);
  for (let link of navLinks) {
    link.addEventListener("click", closeNav);
  }
}
let nav = document.getElementById("navigation");
let navList = document.querySelector("#navigation ul");

loadNavEvents();

function openNav() {
  nav.style.display = "block";
  closeMenu.style.display = "block";
  hamMenu.style.display = "none";
  navBar.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
  logo.setAttribute("src", "img/logoLight.svg");
}

window.addEventListener("scroll", function() {
  scrollAnime.style.opacity = "0";
});

function closeNav(e) {
  if (
    e.key == "Escape" ||
    e.target == closeMenu ||
    e.target.className == "navLinks"
  ) {
    nav.style.display = "none";
    closeMenu.style.display = "none";
    hamMenu.style.display = "block";
    navBar.style.backgroundColor = "initial";
    logo.setAttribute("src", "img/logoDark.svg");
  }
}

$.scrollify({
  section: ".section-class-name",
  sectionName: "section-name",
  interstitialSection: "",
  easing: "easeOutExpo",
  scrollSpeed: 1100,
  offset: 0,
  scrollbars: true,
  standardScrollElements: "",
  setHeights: true,
  overflowScroll: true,
  updateHash: true,
  touchScroll: true,
  before: function() {},
  after: function() {},
  afterResize: function() {},
  afterRender: function() {}
});

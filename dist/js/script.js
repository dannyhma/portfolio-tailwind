// Navbar fixed
const header = document.querySelector("header");
const fixedNav = header.offsetTop;

window.addEventListener("scroll", function () {
  window.scrollY > fixedNav
    ? header.classList.add("navbar-fixed")
    : header.classList.remove("navbar-fixed");
});

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});
// Navbar fixed
const header = document.querySelector('header')
const fixedNav = header.offsetTop
const toTop = document.querySelector('#to-top')

window.addEventListener('scroll', function () {
	window.scrollY > fixedNav
		? header.classList.add('navbar-fixed') ||
		  toTop.classList.remove('hidden') ||
		  toTop.classList.add('flex')
		: header.classList.remove('navbar-fixed') ||
		  toTop.classList.remove('flex') ||
		  toTop.classList.add('hidden')
})

// Hamburger
const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function () {
	hamburger.classList.toggle('hamburger-active')
	navMenu.classList.toggle('hidden')
})

// Click Hamburger
window.addEventListener('click', function (e) {
	if (e.target != hamburger && e.target != navMenu) {
		hamburger.classList.remove('hamburger-active')
		navMenu.classList.add('hidden')
	}
})

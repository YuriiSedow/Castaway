let hamb = document.querySelector('.hamb');
console.log(hamb);
let navMenu = document.querySelector('.nav-menu');
console.log(navMenu);

hamb.addEventListener('click', mobileMenu);

function mobileMenu() {
	hamb.classList.toggle('active');
	navMenu.classList.toggle('active');
}


const navLink = document.querySelector('.nav-link');
navLink.forEach(n => n.addEventListener('click', closeMenu));
function closeMenu() {
	hamb.classList.remove("active");
	navMenu.classList.remove("active");
}
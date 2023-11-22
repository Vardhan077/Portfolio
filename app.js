const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

const img1 = () =>{
	window.location.href = 'https://vardhan077.github.io/Calculator/'
}

const img2 = () =>{
	window.location.href = 'https://github.com/Vardhan077/Chat-App'
}

const img3 = () =>{
	window.location.href = 'https://vardhan077.github.io/Comments/'
}

const img4 = () =>{
	window.location.href = ' https://vardhan077.github.io/emoji_game/'
}

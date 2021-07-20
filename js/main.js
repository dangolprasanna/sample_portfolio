const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const manuNav = document.querySelector('.menu-nav');
const body = document.querySelector('.home');

const navItems = document.querySelectorAll('.menu-nav__item');

let showMenu = false;

menuBtn.addEventListener('click', () => {
    if (!showMenu) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        manuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));
        showMenu = true;
    } else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        manuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));
        showMenu = false;
    }
});
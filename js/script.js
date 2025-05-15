const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const headerContent = document.querySelector('.header__content');
const html = document.querySelector('html');


navBtn.addEventListener('click', () => {
    navIcon.classList.toggle('nav-icon--active');
    headerContent.classList.toggle('header__content-mobile');
    html.classList.toggle('no-scroll');
})
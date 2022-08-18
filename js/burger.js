const iconMenu = document.querySelector('.header__menu_icon');
const menuNav = document.querySelector('.header__nav');

if(iconMenu) {
   iconMenu.addEventListener('click', function() {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('nav__active');
      menuNav.classList.toggle('nav__active');
   });
}
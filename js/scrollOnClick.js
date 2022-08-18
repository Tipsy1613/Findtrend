const menuLinks = document.querySelectorAll('.scrollTo[data-scroll]');
const icon = document.querySelector('.header__menu_icon');
const navMenu = document.querySelector('.header__nav');
const footerLogo = document.querySelector('.footer__logo')

if (menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener('click', onMenuLinkClick)
   });

   function onMenuLinkClick(e) {
      const menuLink = e.target;
      if(menuLink.dataset.scroll && document.querySelector(menuLink.dataset.scroll)) {
         const gotoBlock = document.querySelector(menuLink.dataset.scroll);
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;

         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         });

         // Закрытие меню бургер при нажатии на ссылку с скроллом
         if (icon.classList.contains('nav__active')) {
            navMenu.classList.remove('nav__active');
            document.body.classList.remove('_lock');
            icon.classList.remove('nav__active');
         }
            
         e.preventDefault();
      }
   }
}

footerLogo.addEventListener('click', function() {
   scrollTo(0,0);
})

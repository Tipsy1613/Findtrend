const priceBtn = document.querySelector('.price__switch__btn-circle');
const priceSwitchMonth = document.querySelector('.price__switch__month');
const priceSwitchYear = document.querySelector('.price__switch__year');
const priceOption = document.querySelectorAll('.price__option');

priceBtn.addEventListener('click', function() {
   priceBtn.classList.toggle('btn-active');
   priceSwitchMonth.classList.toggle('price__switch-active');
   priceSwitchYear.classList.toggle('price__switch-active');
   priceOption.forEach(el => el.classList.toggle('price__option-active'));
});
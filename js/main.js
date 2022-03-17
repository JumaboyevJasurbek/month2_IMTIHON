const hamburger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__desktop');
const closeBtn = document.querySelector('.header__close-btn');

hamburger.addEventListener('click', () => {
  menu.classList.add('header__desktop--on');
})

closeBtn.addEventListener('click', () => {
  menu.classList.remove('header__desktop--on');
})

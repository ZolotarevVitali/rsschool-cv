const IMG_OPEN = 'images/burger.svg';
const IMG_CLOSE = 'images/close.svg';
const BTN_ID = 'menu-btn';
const MENU_ID = 'header-menu';
const BTN_IMG_ID = 'menu-btn-img';

const menu = document.getElementById(MENU_ID);
const btnImg = document.getElementById(BTN_IMG_ID);
const menuBtn = document.getElementById(BTN_ID);

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('toogle-menu--open');
  changeImg();
  menu.classList.toggle('menu--open');
});

function changeImg() {
  if(menuBtn.classList.contains('toogle-menu--open')) {
    btnImg.src = IMG_CLOSE;
  } else {
    btnImg.src = IMG_OPEN;
  }
}
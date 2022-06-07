const IMG_OPEN = 'images/burger.svg';
const IMG_CLOSE = 'images/close.svg';
const BTN_ID = 'menu-btn';
const MENU_ID = 'header-menu';
const BTN_IMG_ID = 'menu-btn-img';
const MENU_LINK_CLASS = 'menu__item';

const menu = document.getElementById(MENU_ID);
const btnImg = document.getElementById(BTN_IMG_ID);
const menuBtn = document.getElementById(BTN_ID);
const menuItems = document.getElementsByClassName(MENU_LINK_CLASS);

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

function addMenuHandler(links) {

  if(!links.length) {
    return false;
  }

  links.forEach((link) => {
    link.addEventListener('click', (e) => {

      e.preventDefault();
      const elementId = e.target?.dataset?.link;
      if(!elementId) {
        return;
      }
      handleButtonClick(elementId);
    })
  });
}

function handleButtonClick(id) {
  
  document.getElementById(id).scrollIntoView({block: "center", behavior: "smooth"});
}

addMenuHandler([...menuItems]);
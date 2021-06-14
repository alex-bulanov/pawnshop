/* eslint-disable */

const ESC_KEYCODE = 27;

const body = document.querySelector('body');
const menuOpen = document.querySelector('.menu__open');
const menuClose = document.querySelector('.menu__close');
const menu = document.querySelector('.menu');
const menuBody = document.querySelector('.menu__body');

function onEscPress(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    menu.classList.remove('menu--active');
    if (body.classList.contains('lock')) {
      body.classList.remove('lock');
    }
  }

  document.removeEventListener('keydown', onEscPress);
}

function hideMenu() {
  menuBody.scrollTop = 0;
  menu.classList.remove('menu--active');
  body.classList.remove('lock');
  document.removeEventListener('keydown', onEscPress);
}

function showMenu() {
  body.classList.add('lock');
  document.addEventListener('keydown', onEscPress);
  menu.classList.add('menu--active');
  menuBody.scrollTop = 0;
  menuClose.addEventListener('click', hideMenu);
}

menuOpen.addEventListener('click', showMenu);

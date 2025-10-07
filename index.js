const $ = (id) => document.getElementById(id);

const navMenu = $('nav-menu');
const hburger = $('hamburger');

hburger.addEventListener('click', () => {
  if(navMenu.classList.contains('hidden')) {
    hburger.setAttribute('src', 'src/assets/shared/icon-close.svg');
    navMenu.classList.remove('hidden');
  } else {
    hburger.setAttribute('src', 'src/assets/shared/icon-hamburger.svg');
    navMenu.classList.add('hidden');
  }
});
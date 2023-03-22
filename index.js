import {initScrollSuave, headerAlterBackground} from "./src/js/header.js";
// import workTabList from "./src/js/works.js";
import buttonLoadMore from "./src/js/Projects.js";
import listarGithub from "./src/js/sectionGithub.js";
import {github} from "./api.js";


// workTabList();
initScrollSuave();
headerAlterBackground();
buttonLoadMore();
github();
listarGithub();


const btnMenuMobile = document.querySelector('nav #btn-mobile');

function toggleMenu (event) {

  if( event.type === 'touchstart') event.preventDefault();

  const nav = document.querySelector('.header nav');
  nav.classList.toggle('active');

  const active = nav.classList.contains('active'); // return boolean
  event.currentTarget.setAttribute('aria-expanded', active);

  if(active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMenuMobile.addEventListener('click', toggleMenu );
btnMenuMobile.addEventListener('touchstart', toggleMenu );
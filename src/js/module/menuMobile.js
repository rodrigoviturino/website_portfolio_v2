export default function menuMobile(){
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

    /** Fechar menu ao clicar item */
    if(active){
      const navLi = document.querySelectorAll('#menu li');
      navLi.forEach((item) => {
        item.addEventListener('click', () => {
          nav.classList.remove('active');
        })
      })
    }
    /** end Fechar menu ao clicar item */

  }

  btnMenuMobile.addEventListener('click', toggleMenu );
  btnMenuMobile.addEventListener('touchstart', toggleMenu );
}
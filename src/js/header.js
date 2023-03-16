/*** MENU ***/

/*** Menu - Alterar Cor de Fundo no Scroll ***/
export function headerAlterBackground() {
    let myNav = document.querySelector('.header');
    window.onscroll = function () {
        if (window.scrollY >= 250) {
            myNav.classList.add("nav-colored");
            myNav.classList.remove("nav-transparent");
        } else if (window.scrollY <= 249) {
            // myNav.classList.add("nav-transparent");
            myNav.classList.remove("nav-colored");
        }
    };
}
/*** end Menu - Alterar Cor de Fundo no Scroll ***/

/*** Header - Scroll Suave ***/
export function initScrollSuave() {
    const linksInternos = document.querySelectorAll(".header li a[href^='#']");

    function scrollToSection(event) {
        event.preventDefault();
        let href = event.currentTarget.getAttribute("href");
        let section = document.querySelector(href);
        const topo = section.offsetTop;

        section.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });

        /* Forma Alternativa */
        // window.scrollTo({
        //   top: topo,
        //   behavior: "smooth",
        // });
    }

    linksInternos.forEach((item) => {
        item.addEventListener("click", scrollToSection);
    });
}
/*** end Header - Scroll Suave ***/

export default [headerAlterBackground, initScrollSuave];

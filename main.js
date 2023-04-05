
/*** Data copyright */

// let dataNow = new Date();
// let year = dataNow.getFullYear();

// let d = document.querySelector('.dataNow').innerHTML = year;
/*** end Data copyright */

/*** Menu - Scroll Suave ***/
// let menuHome = document.querySelectorAll('.header li a[href^="#"]');
// console.log(menuHome);
// menuHome.forEach((item) => {
//   item.addEventListener('click', (event) => {
//     event.preventDefault();
//
//     let id = item.getAttribute('href');
//     let targetSetoff = window.pageYOffset;
//
//     console.log(targetSetoff);
//   });
// });

/*** end Menu - Scroll Suave ***/
//
// const linksInternos = document.querySelectorAll('.header li a[href^="#"]');
// console.log(linksInternos)
//
// linksInternos.forEach((item) => {
//   item.addEventListener("click", function (event){
//
//     let href = event.currentTarget.getAttribute("href");
//     let section = document.querySelector(href);
//
//     let topo = section.offsetTop;
//     // section.scrollIntoView({
//     //   behavior: "smooth",
//     //   block: "start"
//     // });
//
//     window.scrollTo({
//       behavior: "smooth",
//       top: topo
//     })
//
//   });
// });

// let iconButtonMenu = document.querySelector('.header .header__menu-mobile');
// let menuMobile = document.querySelector('.header .header__menuList');
// let iconCloseMobile = document.querySelector('.header .header__icon-closeMobile');

//     function iconBtnMenu(event){
//         event.preventDefault();
//         menuMobile.classList.add('ativar-menu');
//         event.currentTarget.style.display = 'none';
//         iconCloseMobile.style.display = 'flex';
//     }

//     function iconBtnMenuToggle(event){
//         event.currentTarget.style.display = 'none';
//         iconButtonMenu.style.display = 'block';
//         menuMobile.classList.remove('ativar-menu');
//     }

//     iconButtonMenu.addEventListener('click', iconBtnMenu);
//     iconCloseMobile.addEventListener('click', iconBtnMenuToggle);



/*** Trabalhos feitos ***/
    function workTabList() {

        let tabList = document.querySelectorAll('.main__worked .company li');
        let tabContent = document.querySelectorAll('.tabContent div');
    
        if (tabContent.length && tabList.length) {
    
            tabContent[0].classList.add('active');
    
            function ativaTab(index) {
                tabContent.forEach((item) => {
                    item.classList.remove('active');
                })
                tabContent[index].classList.add('active');
            }
    
        }
    
        tabList.forEach((tabItem, tabIndex) => {
            tabItem.addEventListener("click", () => {
                ativaTab(tabIndex);
            });
        });
    }

    workTabList();

/*** end Trabalhos feitos ***/


// export default function menuMobile(){
//     const btnMenuMobile = document.querySelector('nav #btn-mobile');
  
//     function toggleMenu (event) {
  
//     if( event.type === 'touchstart') event.preventDefault();
  
//     const nav = document.querySelector('.header nav');
//     nav.classList.toggle('active');
  
//     const active = nav.classList.contains('active'); // return boolean
//     event.currentTarget.setAttribute('aria-expanded', active);
  
//     if(active) {
//         event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
//     } else {
//         event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
//     }
//     }
  
//     btnMenuMobile.addEventListener('click', toggleMenu );
//     btnMenuMobile.addEventListener('touchstart', toggleMenu );
//   }

//   menuMobile();
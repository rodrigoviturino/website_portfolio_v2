
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
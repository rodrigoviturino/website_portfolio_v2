/*** Section - Tab List */

let tabList = document.querySelectorAll('.main__worked ul li');
let tabContent = document.querySelectorAll('.tabContent div');

if(tabContent.length && tabList.length){

  tabContent[0].classList.add('active');

  function ativaTab(index){
    tabContent.forEach((item) => {
      item.classList.remove('active');
    })
    tabContent[index].classList.add('active');
  }

}
  
  tabList.forEach((tabItem, tabIndex) => {
    tabItem.addEventListener("click", () => { ativaTab(tabIndex); });
  });
  
/*** end Section - Tab List */

/*** Data copyright */

// let dataNow = new Date();
// let year = dataNow.getFullYear();

// let d = document.querySelector('.dataNow').innerHTML = year;
/*** end Data copyright */


/*** API GITHUB PAGE REPOSITORY ***/
function listarGithub(){

  let listRepository = document.querySelector('.main-repository__listRepository table tbody');

  // console.log(listRepository)

  let repositorioTr = document.createElement('tr'); 
  let repositorioTd = document.createElement('td'); 

  fetch('https://api.github.com/users/rodrigoviturino/repos')
  .then( async res => {

    if(!res.ok){
      throw new Error(res.status)
    }

    let data = await res.json()

    data.forEach((item) => {

      repositorioTr.innerHTML = `        
          <td>${moment().locale('pt-BR').format('L',item.created_at)}</td>
          <td>${item.name}</td>
          <td> ${item.description}</td>
          <td> - </td>
          <td><a target="_blank" href=${item.html_url}>Link</a></td>
      `;

      return listRepository.appendChild(repositorioTr);
    })
  })
  .catch((error) => console.log(error))

}

listarGithub();
/*** end API GITHUB PAGE REPOSITORY ***/


/*** Portfólio - Função Mostrar Mais Itens ***/
// $( document ).ready(function () {
//   $(".blocos-portfolio").slice(0, 3).show();
//   if ($(".blogBox:hidden").length != 0) {
//     $("#loadMore").show();
//   }
//   $("#loadMore").on('click', function (e) {
//     e.preventDefault();
//     $(".blocos-portfolio:hidden").slice(0, 6).slideDown();
//     if ($(".blocos-portfolio:hidden").length == 0) {
//       $("#loadMore").fadeOut('slow');
//     }
//   });
// });


$(document).ready(function(){
  $("#lerMais").click(function(event){
    event.preventDefault();
    $(".tt:hidden").slice(0,3).fadeIn();
    if ((".tt:hidden").length < 1) this.fadeOut();
  })
})

/***/


/*** Menu - Alterar Cor de Fundo no Scroll ***/
let myNav = document.querySelector('.header');
window.onscroll = function () {
  if (window.scrollY >= 250 ) {
    myNav.classList.add("nav-colored");
    myNav.classList.remove("nav-transparent");
  }
  else if(window.scrollY <= 249) {
    // myNav.classList.add("nav-transparent");
    myNav.classList.remove("nav-colored");
  }
};

/*** end Menu - Alterar Cor de Fundo no Scroll ***/
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

  console.log(listRepository)

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
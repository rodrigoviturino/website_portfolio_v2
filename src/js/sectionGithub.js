/*** API GITHUB PAGE REPOSITORY ***/
export default function listarGithub(){

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
/*** end API GITHUB PAGE REPOSITORY ***/
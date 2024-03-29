
export function github(){
let listCard = document.querySelector('.main__repository .repository__list');

    fetch('https://api.github.com/users/rodrigoviturino/repos', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": `Bearer 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 `
        },
    })
        .then( async res => {
            if(!res.ok){
                throw new Error(res.status)
            }

            let data = await res.json()

            data.filter( (item) => {
                // if(item.name == listinha){
                // console.log(item.name)
                if(
                    item.name == 'bootstrap3' ||
                    item.name == 'bootstrap4' ||
                    item.name == 'alura-typescript-02' ||
                    item.name == 'website_animais_fantasticos' ||
                    item.name == 'js_pizzaria_painel_carrinho' ||
                    item.name == 'bikcraft_wordpress' ||
                    item.name == 'desafio_01_ignite_todolist' ||
                    item.name == 'estacaohack5-mongodb' ||
                    item.name == 'caixa_eletronico' ||
                    item.name == 'api_node'){

                    let card = document.createElement('li');
                    card.classList.add('repository__list__item')

                    card.innerHTML = `
              <div class="repo-header">
                  <span><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg></span>
                  <a href=${item.html_url} target="_blank"><span><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></span></a>
                  <a href=${item.html_url} target="_blank"> <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> </a>
                  </div>
                <h3 class="title">${item.name}</h3>
                <p class="description">${item.description}</p>
                
                <div class="repo-footer">
                  <span>Wordpress</span>
                  <span>PHP</span>
                  <span>Javascript</span>
              </div>`;

                    return listCard.appendChild(card);

                }
            })

        }).catch( e => console.log(e))

}

sass --watch --no-source-map style.scss:../style.css



bikcraft_wordpress
css_avancado
js_pizzaria_painel_carrinho
wp4
onepage.github.io = site
theme_zeus_teste
landing_page_freela_wp
lp_wp_martin_luz
alura-typescript-01
alura-typescript-02
bootstrap4
theme_zeus_teste
website_animais_fantasticos = site

-- Backend
ignite-trilha-nodejs
microblog_dao
webmotors_api


  @media screen and (min-width: 576px) and (max-width: 767px) {
    padding: 0 9.375rem;
  }

  @media screen and (min-width: 768px) and (max-width: 991px){

  }

  @media screen and (min-width: 992px) and (max-width: 1199px){

  }

  @media screen and (min-width: 1200px){

  }


data.forEach((item) => {
    
    console.log(item)
      
    if(item.name == 'bootstrap4' || item.name == 'theme_zeus_teste'){  
      
      
      let listCard = document.querySelector('.main__repository .repository__list');

      let card = `<li class="repository__list__item">
          <div class="repo-header">
            <span><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg></span>
            <span><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></span>
            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </div>

          <h3 class="title">${item.name}</h3>
          <p class="description">${item.description}</p>

          <div class="repo-footer">
            <span>Wordpress</span>
            <span>PHP</span>
            <span>Javascript</span>
          </div>
        </li>`;

        listCard.innerHTML = card;
      }
    }
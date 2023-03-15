/*** Projetos - Botão Carregar Mais ***/
function buttonLoadMore(){
    $(document).ready(function(){
        $("#lerMais").click(function(event){
            event.preventDefault();
            $(".tt:hidden").slice(0,3).fadeIn();
            if ((".tt:hidden").length < 1) this.fadeOut();
        });
    });
}

export default buttonLoadMore;
/*** end Projetos - Botão Carregar Mais ***/
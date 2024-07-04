
/*
Função que adiciona/remove a class active dos links das sessões do site,
deixando marcada no menu qual sessão esta sendo visitada/ativa.
*/
$(function(){
    var links = $("#nav-principal a");
    $(window).on('scroll', function(){
        var topScroll = $(window).scrollTop();        
        links.each(function(){
            var href        = $(this).attr('href');
            var el          = $(href);
            var posSection  = el.offset().top;
            var hSection    = el.height();

            if(posSection <= topScroll && (posSection + hSection) > topScroll){
                links.removeClass('active');
                $(this).addClass('active');
            }
            else{
                $(this).removeClass('active');
            }
        });
    });
});

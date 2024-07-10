
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

/*
CAROUSEL COM MÚLTIPLOS ITENS
fonte: https://codingyaar.com/bootstrap-carousel-multiple-items-increment-by-1/
*/
//To get the entire width of the carousel, use scrollWidth.
var carouselWidth = $(".carousel-inner")[0].scrollWidth;
//To get the width of a single card in the carousel, use width().
var cardWidth = $(".carousel-item").width();
//Now, let’s use a variable to store the current scroll position which will initially be 0.
var scrollPosition = 0;
//When the next button is clicked, check if you’ve reached the 7th card, as you don’t want to scroll any further.
$(".carousel-control-next").on("click", function () {
    if (scrollPosition < ((cardWidth * 4) - carouselWidth)) { //check if you can go any further
        scrollPosition += cardWidth;  //update scroll position
        $(".carousel-inner").animate({ scrollLeft: scrollPosition },600); //scroll left
    }
});

//Similarly, when the previous button is clicked, check if you are on the first card.
$(".carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
        $(".carousel-inner").animate({ scrollLeft: scrollPosition },600);
    }
});

//parar o ciclo contínuo
var multipleCardCarousel = document.querySelector(
    "#carouselCertificacoes"
);
if (window.matchMedia("(min-width: 768px)").matches) {
    //rest of the code
    var carousel = new bootstrap.Carousel(multipleCardCarousel, {
      interval: false
    });
} else {
    $(multipleCardCarousel).addClass("slide");
}
//parar o ciclo contínuo bootstrap 5.2+
var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false,
    wrap: false,
});
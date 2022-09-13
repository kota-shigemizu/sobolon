$(function() {
  //smoothscroll
  $('a[href^="#"]').click(function() {
    let speed = 300;
    let id = $(this).attr("href");
    let target = $("#" == id ? "html" : id);
    let position = $(target).offset().top;

    $("html, body").animate(
     {
      scrollTop: position - $('#js-header').outerHeight()
     },
     speed
   );
   return false;
   });

   jQuery(window).on("scroll", function() {
    if(100 < jQuery(this).scrollTop()) {
     jQuery('.to-top').addClass('is-show');
    } else {
     jQuery('.to-top').removeClass('is-show');
    }
    });

    new WOW().init();
})

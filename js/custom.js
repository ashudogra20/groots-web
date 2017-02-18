$(document).scroll(function () {
    //Show element after user scrolls 800px
    var y = $(this).scrollTop();
    if (y > 100) {
        $('.scroll-top').fadeIn();
    } else {
        $('.scroll-top').fadeOut();
    }
});

 $(".carousel").carousel();

$(document).animateScroll();


$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 70) {

        $(".navbar-fixed-top").addClass("my-custom");



    } else {
        $(".navbar-fixed-top").removeClass("my-custom");

        
    }
});

$(document).ready(function() {
              $('.owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                responsiveClass: true,
                responsive: {
                  0: {
                    items: 1,
                    nav: true
                  },
                  600: {
                    items: 1,
                    nav: false
                  },
                  1000: {
                    items: 1,
                    nav: true,
                    loop: false,
                    margin: 20
                  }
                }
              })
            });
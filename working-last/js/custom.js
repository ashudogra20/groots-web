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
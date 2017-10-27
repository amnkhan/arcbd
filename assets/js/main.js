// Owl carousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:5000,
        navText: ['<i class="fa fa-angle-left"></i>' , '<i class="fa fa-angle-right"></i>'],
        responsiveClass:true,
        animateOut: 'fadeOut',
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:1,
                nav:true,
                loop:false
            }
        }
    });
});
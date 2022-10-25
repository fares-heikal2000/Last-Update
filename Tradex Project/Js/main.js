$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
        {
            loop:true,
            margin:10,
            nav:true,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 4000,
            dots: false,
            navText: ['<i class="fa-solid fa-arrow-left-long"></i>', '<i class="fa-solid fa-arrow-right-long"></i>'],

            responsive:{
                0:{
                    items:1
                },
                992:{
                    items:2
                }
            }
    });
});
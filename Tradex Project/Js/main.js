// Owl Carousel
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

// Button Scrool
window.addEventListener("scroll" , function() {
    if(document.documentElement.scrollTop > 300) {
        this.document.querySelector(".scroll").style.visibility = "visible";
        this.document.querySelector(".scroll").style.opacity = "1";
    } else {
        document.querySelector(".scroll").style.visibility = "hidden";
        this.document.querySelector(".scroll").style.opacity = "0";
    }
})


// counter
elements = document.querySelectorAll(".countWant");
for (i = 0; i < elements.length; i++) {
  elements[i].innerText = "0";
}

let x = false;
function interval(tag, end, increase, time){
    let N = 0;
    let set = setInterval(() => {
        if (N === end || N > end){
            clearInterval(set);
        } 
        tag.innerText = N
        N += increase;
    }, time)
    x = true;
}
window.addEventListener("scroll" , function() {
    if(document.documentElement.scrollTop > 365) {
      if (x == false){
          interval(elements[0], 8000, 50, 9);
         interval(elements[1], 810, 5, 10);
         interval(elements[2], 2000, 10 , 8);
         interval(elements[3], 20, 1, 70);
      }
    }
})
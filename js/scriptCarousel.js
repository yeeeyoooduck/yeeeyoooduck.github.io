$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      margin: 40,
      items: 1,
      nav: false,
      navElement: false,
      navText: false,
      dots: false,
      loop: true,
      responsiveClass:true,
      responsive : {
        0 : {
          margin: 8,
        },
        425 : {
          margin: 40,
        },
        768 : {
          autoplay:true,
          autoplayTimeout: 8000,
          autoplaySpeed: 3000,
          autoplayHoverPause:true,
        },
    }
    });
    
    $(".owl-carouselTwo").owlCarousel({
      autoWidth: true,
      margin: 20,
      nav: false,
      navElement: false,
      navText: false,
      dots: false,
      responsive : {
        480 : {
          margin: 40,
        },
    }
    });

    $(".owl-carouselThree").owlCarousel({
      items: 1,
      nav: false,
      navElement: false,
      navText: false,
      dots: true,
  
      autoplay:true,
      autoplayTimeout: 5000,
      autoplaySpeed: 3000,
      autoplayHoverPause:true
    });
  });
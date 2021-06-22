$(document).ready(function(){
  $('.first-button').on('click', function () {
      $('.animated-icon1').toggleClass('open');
    });

    var cat = $('.reference-carousel');
    cat.owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      dots:false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:7
          }
        }
    })
    
    var news = $('.news-carousel');

    news.owlCarousel({
      loop:true,
      margin:50,
      nav:false,
      dots:false,
      center: false,
      responsive:{
          0:{
              items:1
          },
          500:{
            items:2
          },
      }
  })

  $('.news-ar.right').click(function(e) {
    e.preventDefault();
    news.trigger('next.owl.carousel');
    })

    $('.news-ar.left').click(function(e) {
        e.preventDefault();
        news.trigger('prev.owl.carousel');
    })


  $(".homepage__slider").owlCarousel({
       items: 1,
       nav: true,
       dots: false,
       loop: true
   });
   
   

})

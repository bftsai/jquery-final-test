$(document).ready(function () {
    // swiper
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal', //customer 'vertical',
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
      });
      //lightbox
      lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
      })
      //scroll
      $('.toTop').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({scrollTop: 0},500);
      });
});
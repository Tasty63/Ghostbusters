$(document).ready(function () {
   const mMenuBtn = $('.m-menu-button');
   const mMenu = $('.m-menu');
   const tab = $('.tab');
   const actors = $('#actors');
   const creators = $('#creators');
   
   mMenuBtn.on('click', () => {
      mMenu.toggleClass('active');
      $('body').toggleClass('no-scroll');
   });

   tab.on('click', function (event) {
      if (!event.target.closest('.active')) {
         tab.removeClass('active');
         $(this).toggleClass('active');
         actors.toggleClass('visible');
         creators.toggleClass('visible');
      }  
   })
   
   let mySwiper = new Swiper ('.swiper-container', {
      loop: true,
      slidesPerView: 4,
      spaceBetween: 25,
      breakpoints: {
         992: {
            slidesPerView: 4,
         },
         769: {
            slidesPerView: 2,
         },
         320: {
            slidesPerView: 1,
            navigation: {
               nextEl: ".button-next"
            }
         }
      }

    })
});


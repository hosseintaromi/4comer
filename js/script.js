var swiperClients = new Swiper(".swiper-clients", {
      spaceBetween: 10,
      grabCursor: true,
      slidesPerView: "auto",
      // loop: true,
      // autoplay: {
      //       delay: 2500,
      //       disableOnInteraction: false,
      // },
      breakpoints: {
            768: {
                  spaceBetweenSlides: 30
            }
      }
});
var swiperSelling = new Swiper(".swiper-selling", {
      spaceBetween: 10,
      grabCursor: true,
      slidesPerView: 1.5,
      centeredSlides: true,
      initalSlide: 2,
      loop: true,
      // autoplay: {
      //       delay: 3000,
      //       disableOnInteraction: false,
      // },
      breakpoints: {
            768: {
                  slidesPerView: 3,
                  spaceBetweenSlides: 24,
                  centeredSlides: false,
            }
      }
});
var swiperComments = new Swiper(".swiper-comments", {
      effect: "cards",
      slidesPerView: "auto",
      navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
      },
      cardsEffect: {
            perSlideOffset: 15, // Space between cards in px
            perSlideRotate: 0, // Rotation of cards in degrees
      },
      loop: true,
      // autoplay: {
      //       delay: 2700,
      //       disableOnInteraction: false,
      // },
});
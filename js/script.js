var swiperClients = new Swiper(".swiper-clients", {
      spaceBetween: 30,
      grabCursor: true,
      slidesPerView: "auto",
      loop: true,
      autoplay: {
            delay: 2500,
            disableOnInteraction: false,
      },
});
var swiperSelling = new Swiper(".swiper-selling", {
      spaceBetween: 24,
      grabCursor: true,
      slidesPerView: 3,
      loop: true,
      autoplay: {
            delay: 3000,
            disableOnInteraction: false,
      },
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
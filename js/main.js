var mySwiper = new Swiper(".swiper-container", {
  loop: true,

  navigation: {
    prevEl: ".slider-button--prev",
    nextEl: ".slider-button--next",
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  speed: 750,
});

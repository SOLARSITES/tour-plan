var hotelSlider = new Swiper(".hotel-slider", {
  loop: true,

  navigation: {
    prevEl: ".hotel-slider__button--prev",
    nextEl: ".hotel-slider__button--next",
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  speed: 750,
});

var reviewsSlider = new Swiper(".reviews-slider", {
  loop: true,

  navigation: {
    prevEl: ".hotel-slider__button--prev",
    nextEl: ".hotel-slider__button--next",
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  speed: 750,
});

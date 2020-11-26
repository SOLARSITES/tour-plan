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
    prevEl: ".reviews-slider__button--prev",
    nextEl: ".reviews-slider__button--next",
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  speed: 750,
});

$(window).scroll(function () {
  $(".newsletter").bgscroll({
    direction: "top",
    bgpositionx: 50,
    debug: false,
    min: 0,
    max: 100,
  });
});

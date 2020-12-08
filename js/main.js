$(document).ready(function () {
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

  const menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", () =>
    document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom--visible")
  );

  $(window).scroll(function () {
    $(".newsletter").bgscroll({
      direction: "top",
      bgpositionx: 50,
      debug: false,
      min: 0,
      max: 100,
    });
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }

  $(window).keyup(function (e) {
    if (e.keyCode == 27) {
      closeModal(e);
    }
  });

  //Обработка форм
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      rules: {
        phone: {
          required: true,
          minlength: 17,
        },
      },
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "Your Name must be at least 2 letters long",
        },
        phone: {
          required: "Please specify your phone number",
          minlength: "Your phone number must be in the format of +7 (xxx) xxx-xx-xx",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
        newsletter_email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
      },
    });
  });

  $(`[type="tel"]`).mask("+7(000)-000-00-00");

  AOS.init();
});

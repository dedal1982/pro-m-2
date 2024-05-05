const swiper = new Swiper(".tours__swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  slidesPerView: 3,
  spaceBetween: 20,
  // Navigation arrows
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    620: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },

    745: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    830: {
      slidesPerView: 2.2,
      spaceBetween: 10,
    },
    925: {
      slidesPerView: 2.5,
      spaceBetween: 10,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});

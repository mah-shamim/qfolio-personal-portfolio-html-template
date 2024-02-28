const blogSlider = new Swiper(".blogslider", {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  grabCursor: true,
  loop: true,
  spaceBetween: 16,
  speed: 600,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    500: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3
    },
    992: {
      slidesPerView: 4
    }
  },
});
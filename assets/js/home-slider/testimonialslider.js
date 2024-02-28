const testimonialSlider = new Swiper(".testimonialslider", {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
	slidesPerView: 1,
  centeredSlides: true,
  grabCursor: true,
  loop: true,
  speed: 600,
  parallax: true,
  pagination: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});
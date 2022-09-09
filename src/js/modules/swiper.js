/* Connecting all modules Swiper */
import Swiper from "swiper/bundle";

/* Categories Swiper */
const categoriesSection = new Swiper(".header__categories__swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

/* Team Swiper */
const teamSwiper = new Swiper(".team__swiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  centeredSlides: false,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1225: {
      centeredSlides: false,
    },
    576: {
      centeredSlides: true,
    },
  },
});

/* Testimonials Swiper */
const testimonialsSwiper = new Swiper(".testimonials__swiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1200: {
      centeredSlides: false,
    },
  },
});



/* const teamSwiper = new Swiper(".team__swiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1225: {
      slidesPerView: 4,
      centeredSlides: false,
    },
  },
}); */
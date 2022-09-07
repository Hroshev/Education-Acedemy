/* Connecting all modules Swiper */
import Swiper from "swiper/bundle";

/* Seting Swiper */
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


const swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
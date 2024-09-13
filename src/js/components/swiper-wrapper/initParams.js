import { Navigation, Pagination } from "swiper/modules";

export const carouselHeroParams = {
  loop: true,
  modules: [Navigation, Pagination],
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};

export const carouselBestsellersParams = {
  loop: true,
  modules: [Navigation],
  spaceBetween: 0,
  simulateTouch: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1400: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    },
  },
};

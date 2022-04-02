import { createElement } from './utils';

export function createSwiper(innerItems, className) {
  let swiperClassNames = ["swiper"];

  if (className) {
    swiperClassNames.push(className);
  }

  const swiperCarousel = createElement("div", swiperClassNames),
    swiperWrapper = createElement("div", "swiper-wrapper"),
    swiperPagination = createElement("div", "swiper-pagination"),
    swiperPrevBtn = createElement("div", "swiper-button-prev"),
    swiperNextBtn = createElement("div", "swiper-button-next");


  innerItems.forEach((item) => {
    let swiperSlide = createElement("div", "swiper-slide");

    swiperSlide.append(item);
    swiperWrapper.append(swiperSlide);
  })

  swiperCarousel.append(swiperWrapper, swiperPagination, swiperPrevBtn, swiperNextBtn);
  return swiperCarousel;
}
import { createElement } from '../../utils';

const swiperCarousel = createElement("div", "swiper"),
  swiperWrapper = createElement("div", "swiper-wrapper"),
  swiperPagination = createElement("div", "swiper-pagination"),
  swiperPrevBtn = createElement("div", "swiper-button-prev"),
  swiperNextBtn = createElement("div", "swiper-button-next");


const swiperSlideCount = 3;

for (let i = 1; i <= swiperSlideCount; i++) {
  let swiperSlide = createElement("div", "swiper-slide");

  swiperSlide.append(createElement("div", "hero__slide-content"));
  swiperWrapper.append(swiperSlide);
}

swiperCarousel.append(swiperWrapper, swiperPagination, swiperPrevBtn, swiperNextBtn);


export { swiperCarousel };
import {createElement} from '../../utils';

const swiperCarousel = createElement("div", "swiper"),
  swiperWrapper = createElement("div", "swiper-wrapper"),
  swiperPagination = createElement("div", "swiper-pagination"),
  swiperPrevBtn = createElement("div", "swiper-button-prev"),
  swiperNextBtn = createElement("div", "swiper-button-next");

const swiperSlideCount = 3;

for(let i = 1; i <= swiperSlideCount; i++){
  swiperWrapper.append(createElement("div", "swiper-slide"));
}

swiperCarousel.append(swiperWrapper, swiperPagination, swiperPrevBtn, swiperNextBtn);


export {swiperCarousel};
import { Skelet } from "./classSkelet";
import Swiper, { Navigation } from 'swiper';

export class Carousel {

  constructor(swiperParams, className) {
    this.swiperParams = swiperParams;
    this.className = ["swiper"];

    if (className) {
      this.className.push(className);
    }

    this.carouselSkelet = new Skelet("div", this.className).elem;
    this.carouselWrapperSkelet = new Skelet("div", "swiper-wrapper").elem;
    this.createCarcass();
  }
  
  init() {
    this.swiperObj = new Swiper(`.${this.className[1]}`, this.swiperParams);
    this.swiperObj.init(this.carouselSkelet);
  }

  createCarcass() {
    this.carouselSkelet.append(this.carouselWrapperSkelet);

    if (this.swiperParams.hasOwnProperty('modules')) {
      this.swiperParams.modules.forEach((moduleFunc) => {
        let moduleName = moduleFunc.name;

        switch (moduleName) {
          case "Pagination":
            const swiperPagination = new Skelet("div", "swiper-pagination").elem;
            this.carouselSkelet.append(swiperPagination);
            break;

          case "Navigation":
            const swiperPrevBtn = new Skelet("div", "swiper-button-prev").elem,
              swiperNextBtn = new Skelet("div", "swiper-button-next").elem;
            this.carouselSkelet.append(swiperPrevBtn, swiperNextBtn);
            break;

          default:
            break;
        }
      });
    }
  }

  createSlide(innerItems) {
    innerItems.forEach((item) => {
      let swiperSlide = new Skelet("div", "swiper-slide");

      swiperSlide.appendItems(item);
      this.carouselWrapperSkelet.append(swiperSlide.elem);
    });

  }
}
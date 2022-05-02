import { Skelet } from "./classSkelet";
import Swiper, { Navigation } from "swiper";

/* 
Класс Carousel служит для создание базовой структуры swiper на основе класса Skelet
*/
export class Carousel {
  constructor(swiperParams, className) {
    this.swiperParams = swiperParams;
    this.className = ["swiper"];

    if (className) {
      this.className.push(className);
    }

    this.carouselSkelet = new Skelet("div", this.className);
    this.carouselWrapperSkelet = new Skelet("div", "swiper-wrapper");
    this.createCarcass();
  }

  // Метод, который вызывается после создания структуры. Выполняет инициализацию swiper.
  init() {
    this.swiperObj = new Swiper(`.${this.className[1]}`, this.swiperParams);
    this.swiperObj.init(this.carouselSkelet);
  }

  // Данный метод создает базовый каркасс для swiper на основе переданных модулей в объекте-параметров
  createCarcass() {
    this.carouselSkelet.insertItems(this.carouselWrapperSkelet);

    if (this.swiperParams.hasOwnProperty("modules")) {
      this.swiperParams.modules.forEach((moduleFunc) => {
        let moduleName = moduleFunc.name;

        switch (moduleName) {
          case "Pagination":
            const swiperPagination = new Skelet("div", "swiper-pagination");
            this.carouselSkelet.insertItems(swiperPagination);
            break;

          case "Navigation":
            const swiperPrevBtn = new Skelet("div", "swiper-button-prev"),
              swiperNextBtn = new Skelet("div", "swiper-button-next");
            this.carouselSkelet.insertItems([swiperPrevBtn, swiperNextBtn]);
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

      swiperSlide.insertItems(item);
      this.carouselWrapperSkelet.insertItems(swiperSlide);
    });
  }
}

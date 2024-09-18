import { Navigation, Pagination, Swiper } from "swiper";
import { ConstructDOM } from "../../core/DOM/ConstructDOM";

export class SwiperWrapper extends ConstructDOM {
  constructor(parentSelector, slideContents, swiperParams, classNames = []) {
    classNames.push("swiper");
    super("div", classNames);
    this.slideContents = slideContents;
    this.parentSelector = parentSelector;
    this.swiperParams = swiperParams;
    this.swiper = new Swiper(`.${classNames[0]}`, swiperParams);
    this.createCarouselBase();

    this.parent = document.querySelector(parentSelector);
    this.parent.append(this.elem);

    this.swiper.init(this.elem);
  }

  createCarouselBase() {
    const wrapper = new ConstructDOM("div", ["swiper-wrapper"]);
    const slides = this.slideContents.map((slideItem) => {
      const swiperSlide = new ConstructDOM("div", ["swiper-slide"]);
      swiperSlide.insertItems([slideItem]);
      return swiperSlide;
    });
    wrapper.insertItems(slides);
    const modules = this.getSwiperModules();
    // console.log(modules);

    this.insertItems([wrapper, ...modules]);
  }

  getSwiperModules() {
    const modules = [];
    if (this.swiperParams.hasOwnProperty("navigation")) {
      modules.push(...this.createNavigation(this.swiperParams["navigation"]));
    }
    if (this.swiperParams.hasOwnProperty("pagination")) {
      modules.push(this.createPagination(this.swiperParams["pagination"]));
    }
    return modules;
  }

  createNavigation(navParams) {
    const buttons = [];

    if (navParams.hasOwnProperty("nextEl")) {
      buttons.push(new ConstructDOM("div", [navParams["nextEl"].slice(1)]));
    }
    if (navParams.hasOwnProperty("prevEl")) {
      buttons.push(new ConstructDOM("div", [navParams["prevEl"].slice(1)]));
    }

    return buttons;
  }

  createPagination(paginParams) {
    if (paginParams.hasOwnProperty("el")) {
      return new ConstructDOM("div", [paginParams["el"].slice(1)]);
    }
    return [];
  }
}

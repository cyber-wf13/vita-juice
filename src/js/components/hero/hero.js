import { createSwiper } from '../../carousel';
import { createElement } from '../../utils';

const hero = createElement("div", "hero"),
  carouselInner = [createElement("div", "hero__slide-content"), createElement("div", "hero__slide-content"), createElement("div", "hero__slide-content")],
  swiperCarousel = createSwiper(carouselInner, "swiper-hero");

  hero.append(swiperCarousel);

export {
  hero
}

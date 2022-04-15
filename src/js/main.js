import { body, browserBreakpoint } from './utils';
// import { containerHeader } from './components/header';
// import { hero } from './old-components/hero/hero';
// import { productsSect } from './components/ourProduction';
// import { bestSection } from './components/bestsellers/bestsellers';
// import { deliverySect } from './components/delivery/delivery';
// import { loyaltySect } from './components/loyalty/loyalty';
// import { footer } from './components/footer';
import { Navigation, Pagination } from 'swiper';

import { Skelet } from './classSkelet';
import { Carousel } from './classCarousel';


const carouselHeroParams = {
  loop: true,
  modules: [Navigation, Pagination],
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
};

const carouselBestsellersParams = {
  loop: true,
  modules: [Navigation],
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1400: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 2,
    }
  }
};

const render = () => {
  const hero = new Skelet("div", "hero");
  const heroCarousel = new Carousel(carouselHeroParams, "swiper-hero");

  const heroCarouselContent = [new Skelet("div", "hero__slide-content").elem, new Skelet("div", "hero__slide-content").elem, new Skelet("div", "hero__slide-content").elem];

  heroCarousel.createSlide(heroCarouselContent);

  hero.appendItems(heroCarousel.carouselSkelet);
  
  body.prepend(hero.elem);
  
  heroCarousel.init();

  // new Swiper(".swiper-hero", carouselHeroParams);
  // let carousellBestseller = new Swiper(".swiper-bestsellers", carouselBestsellersParams);

  // if (browserBreakpoint == "md" || browserBreakpoint == "sm"){
  //   carousellBestseller.navigation.destroy();
  // }
}

render();
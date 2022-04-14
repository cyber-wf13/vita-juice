import {body, browserBreakpoint} from './utils';
import { containerHeader } from './components/header';
import { hero } from './components/hero/hero';
import { productsSect } from './components/ourProduction';
import { bestSection } from './components/bestsellers/bestsellers';
import { deliverySect } from './components/delivery/delivery';
import { loyaltySect } from './components/loyalty/loyalty';
import { footer } from './components/footer';
import Swiper, { Navigation, Pagination } from 'swiper';


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
  body.prepend(hero, productsSect, bestSection);
  // body.append(containerHeader, hero, productsSect, bestSection, deliverySect, loyaltySect, footer);
  new Swiper(".swiper-hero", carouselHeroParams);
  let carousellBestseller = new Swiper(".swiper-bestsellers", carouselBestsellersParams);

  if (browserBreakpoint == "md" || browserBreakpoint == "sm"){
    carousellBestseller.navigation.destroy();
  }
}

render();
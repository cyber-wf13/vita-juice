import { containerHeader } from './components/header';
import { hero } from './components/hero/hero';
import { productsSect } from './components/ourProduction';
import { bestSection } from './components/bestsellers/bestsellers';
import { deliverySect } from './components/delivery/delivery';
import { loyaltySect } from './components/loyalty/loyalty';
import { footer } from './components/footer';
import Swiper, { Navigation, Pagination } from 'swiper';

const body = document.body;

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
  slidesPerView: 3,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
};

const render = () => {
  body.append(containerHeader, hero, productsSect, bestSection, deliverySect, loyaltySect, footer);
  new Swiper(".swiper-hero", carouselHeroParams);
  new Swiper(".swiper-bestsellers", carouselBestsellersParams);
}

render();
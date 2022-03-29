import {containerHeader} from './components/header';
import {hero} from './components/hero/hero';
import Swiper, { Navigation, Pagination } from 'swiper';

const body = document.body;

const carouselParams = {
  loop: true,
  modules: [Navigation, Pagination],
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
}

const render = ()=>{
  body.append(containerHeader, hero);
  new Swiper(".swiper", carouselParams);
}

render();
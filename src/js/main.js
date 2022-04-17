import { body, browserBreakpoint } from './utils';
// import { containerHeader } from './components/header';
// import { hero } from './old-components/hero/hero';
// import { productsSect } from './components/ourProduction';
// import { bestSection } from './components/bestsellers/bestsellers';
// import { deliverySect } from './components/delivery/delivery';
// import { loyaltySect } from './components/loyalty/loyalty';
// import { footer } from './components/footer';
import { Navigation, Pagination } from 'swiper';
import { heroImgPaths, productCardInfo, bestsellersCardInfo, deliveryBlockInfo } from './infoOfServer';

import { Skelet } from './classSkelet';
import { Carousel } from './classCarousel';
import { Hero } from './components/hero/classHero';
import { Production } from './components/production/classProduction';
import { SkeletSect } from './classSkeletSect';
import { Bestsellers } from './components/bestsellers/classBestsellers';
import { Delivery } from './components/delivery/classDelivery';


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
  const hero = new Hero("div", "hero");
  const heroCarousel = new Carousel(carouselHeroParams, "swiper-hero");
  heroCarousel.createSlide(hero.createSliderImg(heroImgPaths));
  hero.insertItems(heroCarousel.carouselSkelet);

  const production = new Production("наша продукция", "products");
  production.sectionWrapper.insertItems(production.getProductCard(productCardInfo));

  const bestsellers = new Bestsellers("хиты продаж", "bestsellers");
  const bestsellersCarousel = new Carousel(carouselBestsellersParams, "swiper-bestsellers");
  bestsellers.sectionWrapper.insertItems(bestsellersCarousel.carouselSkelet);
  bestsellersCarousel.createSlide(bestsellers.getBestsellersCard(bestsellersCardInfo));

  const delivery = new Delivery("доставка и оплата", "delivery");
  const deliveryBlockZones = delivery.setDeliveryContent("Зона доставки",
    delivery.createDeliveryZones(deliveryBlockInfo.deliveryZone)),
    deliveryBlockPayment = delivery.setDeliveryContent("варианты оплаты",
      delivery.createDeliveryOptions(deliveryBlockInfo.deliveryPayment)),
    deliveryBlockWays = delivery.setDeliveryContent("способы доставки",
      delivery.createDeliveryOptions(deliveryBlockInfo.deliveryWays));

  const deliveryBlockZonesMap = new Skelet("img", "delivery__block-map");
  deliveryBlockZonesMap.setAttr("src", "img/delivery/map.jpg");
  deliveryBlockZones.insertItems(deliveryBlockZonesMap);

  delivery.sectionWrapper.insertItems([deliveryBlockZones, deliveryBlockPayment, deliveryBlockWays]);

  body.prepend(hero.elem, production.collectElements(), bestsellers.collectElements(), delivery.collectElements());

  heroCarousel.init();
  bestsellersCarousel.init();

  // loyalty, footer
  // new Swiper(".swiper-hero", carouselHeroParams);
  // let carousellBestseller = new Swiper(".swiper-bestsellers", carouselBestsellersParams);

  if (browserBreakpoint == "md" || browserBreakpoint == "sm" || browserBreakpoint == "xs") {
    bestsellersCarousel.swiperObj.navigation.destroy();
  }
}

render();
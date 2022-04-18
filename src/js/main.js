import { body, browserBreakpoint } from './utils';
import { Navigation, Pagination } from 'swiper';
import { heroImgPaths, productCardInfo, bestsellersCardInfo, 
  deliveryBlockInfo, loyaltyListInfo, footerInfo, socialInfo } from './infoOfServer';

import { Skelet } from './classSkelet';
import { Carousel } from './classCarousel';
import { Hero } from './components/hero/classHero';
import { Production } from './components/production/classProduction';
import { Bestsellers } from './components/bestsellers/classBestsellers';
import { Delivery } from './components/delivery/classDelivery';
import { Loyalty } from './components/loyalty/classLoyalty';
import { Footer } from './components/base/classFooter';
import { Social } from './components/base/classSocial';


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

  const loyalty = new Loyalty("Наша система лояльности", "loyalty"),

    loyaltyListContent = loyalty.createListContent(loyaltyListInfo),
    loyaltyList = loyalty.createList(loyaltyListContent, "loyalty-list", "loyalty", true),

    loyaltyBlockText = loyalty.createBlockText(),
    loyaltyBlockContent = loyalty.createContentBlockInner([loyalty.subTitle, loyaltyList, loyaltyBlockText], "div", "loyalty__content"),

    loyaltyCard = loyalty.createCard(),
    loyaltyWrapperInner = loyalty.createContentBlockInner([loyaltyCard, loyaltyBlockContent], "div", "loyalty__wrapper-inner");

  loyalty.container.insertItems(loyaltyWrapperInner);
  loyalty.sectionWrapper.insertItems(loyalty.container);

  const footer = new Footer("footer", "footer"),

  footerListInfoContent = footer.createListInfoContent(footerInfo.infoText),
  footerListInfo = footer.createList(footerListInfoContent, "list-info", false, true, "footer__list-info"),

  footerListLinksContent = footer.createListContent(footerInfo.infoLink),
  footerListLinks = footer.createList(footerListLinksContent, "list-links", false, true, "footer__list-links"),

  footerListBonusContent = footer.createListContent(footerInfo.infoBonus),
  footerListBonus = footer.createList(footerListBonusContent, "list-links", false, true, "footer__list-links");

  footer.listWrapper.insertItems([footerListInfo, footerListLinks, footerListBonus]);

  const social = new Social("div", "social");
  social.createSocialLinks(socialInfo);
  const socialCollected = social.collectSocial();

  body.prepend(hero.elem, production.collectElements(), bestsellers.collectElements(), delivery.collectElements(),
    loyalty.collectElements(), footer.collectFooter(socialCollected));

  heroCarousel.init();
  bestsellersCarousel.init();


  if (browserBreakpoint == "md" || browserBreakpoint == "sm" || browserBreakpoint == "xs") {
    bestsellersCarousel.swiperObj.navigation.destroy();
  }
}

render();
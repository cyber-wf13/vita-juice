import { body, browserBreakpoint, getInfoByServer } from "./utils";
import { Navigation, Pagination } from "swiper";
import {
  navProductsInfo,
  navMenuInfo,
  heroImgPaths,
  productCardInfo,
  bestsellersCardInfo,
  deliveryBlockInfo,
  loyaltyListInfo,
  footerInfo,
  socialInfo,
} from "./infoOfServer";

import { Skelet } from "./classSkelet";
import { Carousel } from "./classCarousel";

import { Header } from "./components/base/classHeader";
import { Hero } from "./components/hero/classHero";
import { Production } from "./components/production/classProduction";
import { Bestsellers } from "./components/bestsellers/classBestsellers";
import { Delivery } from "./components/delivery/classDelivery";
import { Loyalty } from "./components/loyalty/classLoyalty";
import { Footer } from "./components/base/classFooter";
import { Social } from "./components/base/classSocial";
import { Select } from "./components/select/classSelect";
import { ConstructDOM } from "./core/DOM/ConstructDOM";
import { ConstructModalDOM } from "./core/DOM/ConstructModalDOM";

import {
  generateNavProducts,
  generateListProducts,
} from "./components/generateListProducts";

const carouselHeroParams = {
  loop: true,
  modules: [Navigation, Pagination],
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};

const carouselBestsellersParams = {
  loop: true,
  modules: [Navigation],
  spaceBetween: 0,
  simulateTouch: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1400: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    },
  },
};

const render = () => {
  getInfoByServer("data/typesProducts.json").then((types) => {
    generateListProducts(
      types,
      ".nav-products",
      ["menu-products", "menu-products__list"],
      (type) => {
        const listItem = new ConstructDOM("li", ["menu-products__item"]);
        const listItemLink = new ConstructDOM("a", [], type.text);

        listItemLink.setAttr({
          "href": "#",
          "style": `--juice-color: #${type["color"]}`,
        });
        listItem.insertItems([listItemLink]);
        return listItem;
      },
    );
    generateListProducts(
      types,
      ".products__wrapper",
      ["products__card-items"],
      (type) => {
        const listItem = new ConstructDOM("li", [
          "product-card",
          "products__card",
        ]);
        const listItemImg = new ConstructDOM("img", ["product-card__img"]);
        const listItemTitle = new ConstructDOM("h4", ["product-card__title"]);

        listItemImg.setAttr({
          "src": type.img,
        });
        listItemTitle.setContent(type.text);
        listItem.insertItems([listItemImg, listItemTitle]);
        return listItem;
      },
    );
  });

  const modalRegion = new ConstructModalDOM(".select", [], "Ваш регион");
  // const cd = new ConstructDOM("h1", ["as"]);
  // const list = new ConstructListDOM(["text", cd], ["list"], ["list-items"]);
  // console.log(new ConstructDOM().elem);
  // console.log(list.elem);

  // const header = new Header("header", "header"),
  //   headerActions = new Skelet("div", "header__actions"),
  //   cart = header.createCart(),
  //   cabinet = header.createCabinet(),
  //   navProducts = new Skelet("nav", "nav-products"),
  //   navProductsContent = header.createNavListContent(navProductsInfo),
  //   navProductList = header.createList(
  //     navProductsContent,
  //     "menu-products",
  //     "menu-products",
  //     true
  //   ),
  //   navMenu = new Skelet("nav", "nav-menu");
  // let navMenuContent = header.createNavListContent(navMenuInfo);
  // if (
  //   browserBreakpoint == "md" ||
  //   browserBreakpoint == "sm" ||
  //   browserBreakpoint == "xs"
  // ) {
  //   const menuLink = header.createMobileButton("menu-btn", navProducts, "меню");
  //   menuLink.setContent("меню");
  //   navMenuContent = [menuLink, ...navMenuContent];
  // }
  // const navMenuList = header.createList(
  //     navMenuContent,
  //     "menu-list",
  //     "menu-list",
  //     true
  //   ),
  //   selectHeader = new Select("div", "select", "header", "Ваш регион");
  // navProducts.insertItems(navProductList);
  // navMenu.insertItems(navMenuList);
  // if (
  //   browserBreakpoint == "md" ||
  //   browserBreakpoint == "sm" ||
  //   browserBreakpoint == "xs"
  // ) {
  //   const menuButton = header.createMobileButton(
  //       "menu-btn",
  //       navProducts,
  //       "меню"
  //     ),
  //     burger = header.createMobileButton("burger", navMenu, header.logo);
  //   menuButton.setContent("меню");
  //   header.topHeaderWrapper.insertItems([
  //     burger,
  //     menuButton,
  //     selectHeader,
  //     cart,
  //     cabinet,
  //   ]);
  // } else {
  //   headerActions.insertItems([cart, cabinet]);
  //   header.topHeaderWrapper.insertItems([selectHeader, headerActions]);
  //   header.bottomHeaderWrapper.insertItems([navProducts, navMenu]);
  // }
  // const headerContainer = header.createCarcass();
  // const hero = new Hero("div", "hero");
  // const heroCarousel = new Carousel(carouselHeroParams, "swiper-hero", {
  //   navigation: true,
  //   pagination: true,
  // });
  // heroCarousel.createSlide(hero.createSliderImg(heroImgPaths));
  // hero.insertItems(heroCarousel.carouselSkelet);
  // const production = new Production("наша продукция", "products");
  // production.sectionWrapper.insertItems(
  //   production.getProductCard(productCardInfo)
  // );
  // const bestsellers = new Bestsellers("хиты продаж", "bestsellers");
  // const bestsellersCarousel = new Carousel(
  //   carouselBestsellersParams,
  //   "swiper-bestsellers",
  //   {
  //     pagination: true,
  //   }
  // );
  // bestsellers.sectionWrapper.insertItems(bestsellersCarousel.carouselSkelet);
  // bestsellersCarousel.createSlide(
  //   bestsellers.getBestsellersCard(bestsellersCardInfo)
  // );
  // const delivery = new Delivery("доставка и оплата", "delivery");
  // const deliveryBlockZones = delivery.setDeliveryContent(
  //     "Зона доставки",
  //     delivery.createDeliveryZones(deliveryBlockInfo.deliveryZone)
  //   ),
  //   deliveryBlockPayment = delivery.setDeliveryContent(
  //     "варианты оплаты",
  //     delivery.createDeliveryOptions(deliveryBlockInfo.deliveryPayment)
  //   ),
  //   deliveryBlockWays = delivery.setDeliveryContent(
  //     "способы доставки",
  //     delivery.createDeliveryOptions(deliveryBlockInfo.deliveryWays)
  //   );
  // const deliveryBlockZonesMap = new Skelet("img", "delivery__block-map");
  // deliveryBlockZonesMap.setAttr("src", "img/delivery/map.png");
  // deliveryBlockZones.insertItems(deliveryBlockZonesMap);
  // delivery.sectionWrapper.insertItems([
  //   deliveryBlockZones,
  //   deliveryBlockPayment,
  //   deliveryBlockWays,
  // ]);
  // const loyalty = new Loyalty("Наша система лояльности", "loyalty"),
  //   loyaltyListContent = loyalty.createListContent(loyaltyListInfo),
  //   loyaltyList = loyalty.createList(
  //     loyaltyListContent,
  //     "loyalty-list",
  //     "loyalty",
  //     true
  //   ),
  //   loyaltyBlockText = loyalty.createBlockText(),
  //   loyaltyBlockContent = loyalty.createContentBlockInner(
  //     [loyalty.subTitle, loyaltyList, loyaltyBlockText],
  //     "div",
  //     "loyalty__content"
  //   ),
  //   loyaltyCard = loyalty.createCard(),
  //   loyaltyWrapperInner = loyalty.createContentBlockInner(
  //     [loyaltyCard, loyaltyBlockContent],
  //     "div",
  //     "loyalty__wrapper-inner"
  //   );
  // loyalty.container.insertItems(loyaltyWrapperInner);
  // loyalty.sectionWrapper.insertItems(loyalty.container);
  // const footer = new Footer("footer", "footer"),
  //   footerListInfoContent = footer.createListInfoContent(footerInfo.infoText),
  //   footerListInfo = footer.createList(
  //     footerListInfoContent,
  //     "list-info",
  //     false,
  //     true,
  //     "footer__list-info"
  //   ),
  //   footerListLinksContent = footer.createListContent(footerInfo.infoLink),
  //   footerListLinks = footer.createList(
  //     footerListLinksContent,
  //     "list-links",
  //     false,
  //     true,
  //     "footer__list-links"
  //   ),
  //   footerListBonusContent = footer.createListContent(footerInfo.infoBonus),
  //   footerListBonus = footer.createList(
  //     footerListBonusContent,
  //     "list-links",
  //     false,
  //     true,
  //     "footer__list-links"
  //   );
  // footer.listWrapper.insertItems([
  //   footerListInfo,
  //   footerListLinks,
  //   footerListBonus,
  // ]);
  // const social = new Social("div", "social");
  // social.createSocialLinks(socialInfo);
  // const socialCollected = social.collectSocial();
  // body.prepend(
  //   headerContainer.elem,
  //   hero.elem,
  //   production.collectElements(),
  //   bestsellers.collectElements(),
  //   delivery.collectElements(),
  //   loyalty.collectElements(),
  //   footer.collectFooter(socialCollected)
  // );
  // heroCarousel.init();
  // bestsellersCarousel.init();
  // if (
  //   browserBreakpoint == "md" ||
  //   browserBreakpoint == "sm" ||
  //   browserBreakpoint == "xs"
  // ) {
  //   bestsellersCarousel.swiperObj.navigation.destroy();
  // }
};

render();

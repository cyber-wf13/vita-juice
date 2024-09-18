import { getInfoByServer } from "./utils";
import { ConstructDOM } from "./core/DOM/ConstructDOM";
import { ConstructModalDOM } from "./core/DOM/ConstructModalDOM";

import { generateListProducts } from "./components/generateListProducts";
import { generateModalRegion } from "./components/generateModalRegion";
import { SwiperWrapper } from "./components/swiper-wrapper/SwiperWrapper";
import {
  carouselBestsellersParams,
  carouselHeroParams,
} from "./components/swiper-wrapper/initParams";
import { generateSlideHero } from "./components/generateSlideHero";
import { generateBestProducts } from "./components/generateBestProducts";

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

  getInfoByServer("data/cities.json").then((cities) => {
    const modalContent = generateModalRegion(cities, (city) => {
      const listItem = new ConstructDOM("li", ["region-list__item"]);
      const radioItem = new ConstructDOM("input", [
        "region-list__radio",
        "_visually-hidden",
      ]);
      const labelItem = new ConstructDOM("label", ["region-list__label"]);

      radioItem.setAttr({
        "name": "region",
        "value": city.id,
        "type": "radio",
      });

      radioItem.elem.addEventListener("change", (e) => {
        const form = document.forms["region"];
        const title = form.querySelector("#region-title");
        title.textContent = "Ваше місто: " + city.name;
      });

      labelItem.setContent(city.name);
      labelItem.insertItems([radioItem]);
      listItem.insertItems([labelItem]);
      return listItem;
    });

    new ConstructModalDOM(".select", [modalContent], "Ваш регіон");
  });

  getInfoByServer("data/products.json").then((products) => {
    const bestProductsItems = generateBestProducts(products);

    new SwiperWrapper(
      ".bestsellers__wrapper",
      bestProductsItems,
      carouselBestsellersParams,
      ["swiper-bestsellers"],
    );
  });

  const heroCarouselItems = generateSlideHero(
    ["img/hero/slider-1.png", "img/hero/slider-1.png", "img/hero/slider-1.png"],
    ["hero__slide-content"],
    ["hero__slide-img"],
  );

  new SwiperWrapper(".hero", heroCarouselItems, carouselHeroParams, [
    "swiper-hero",
  ]);
};

render();

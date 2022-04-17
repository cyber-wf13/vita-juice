import { createElement, createTitle } from "../utils";

const title = createTitle("наша продукция", "products__title"),
  productsSect = createElement("section", "products"),
  productsWrapper = createElement("div", "products__wrapper"),
  productsCardItems = createElement("div", "products__card-items");


let productCardInfo = { "соки": "img/products/cards/juice.png", "миксы": "img/products/cards/mix.png", "смузи": "img/products/cards/smoothies.png", "ласси": "img/products/cards/lassy.png", "детокс": "img/products/cards/detox.png", "боулы": "img/products/cards/bouly.png", "салаты": "img/products/cards/salads.png", "здоровая еда": "img/products/cards/eat.png" };

for (const productCardInfoTitle in productCardInfo) {
  let productCard = createElement("div", ["product-card", "products__card"]),
    productCardImg = createElement("img", "product-card__img"),
    productCardTitle = createElement("h4", "product-card__title");

  productCardImg.src = productCardInfo[productCardInfoTitle];
  productCardTitle.textContent = productCardInfoTitle;

  productCard.append(productCardImg, productCardTitle);
  productsCardItems.append(productCard);
}

productsWrapper.append(productsCardItems);
productsSect.append(title, productsWrapper);

export {
  productsSect
}
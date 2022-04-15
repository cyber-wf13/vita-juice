import { createElement } from '../../utils';

let cardItems = [];

let cardInfoItems = [{
  "title": "ласси",
  "ml": "500",
  "price": "375",
  "imgPath": "img/bestsellers/lassy.png"
},
{
  "title": "микс",
  "ml": "350",
  "price": "450",
  "imgPath": "img/bestsellers/mix.png"
},
{
  "title": "боул",
  "ml": "350",
  "price": "300",
  "imgPath": "img/bestsellers/boul.png"
},
{
  "title": "ласси",
  "ml": "500",
  "price": "375",
  "imgPath": "img/bestsellers/lassy.png"
}];

cardInfoItems.forEach((cardInfo) => {
  let card = createElement("div", "bestsellers-card"),
    cardImg = createElement("img", "bestsellers-card__img"),
    cardWrapper = createElement("div", "bestsellers-card__wrapper"),
    cardTitle = createElement("h4", "bestsellers-card__title"),
    cardDescr = createElement("span", "bestsellers-card__descr"),
    cardPriceWrapper = createElement("div", "bestsellers-card__price-wrapper"),
    cardPrice = createElement("b", "bestsellers-card__price"),
    cardLikeBtn = createElement("btn", "bestsellers-card__price-btn"),
    cardBtn = createElement("btn", "bestsellers-card__cart-btn");

  cardImg.src = cardInfo.imgPath;
  cardTitle.textContent = cardInfo.title;
  cardDescr.textContent = cardInfo.ml;
  cardPrice.textContent = cardInfo.price;
  cardLikeBtn.innerHTML = `<svg width="35" height="33" viewBox="0 0 35 33" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path id="heart-path" fill-rule="evenodd" clip-rule="evenodd" d="M17 26.9375L5.08662 16.0104C-7.23887 4.70634 12.1976 -4.57492 17 5.39958C21.8024 -4.57492 41.2388 4.70634 28.9134 16.0104L17 26.9375Z" stroke="#2B2A29" stroke-width="2" stroke-miterlimit="22.9256"/>
  </svg>
  `;
  cardBtn.textContent = "Корзина";

  cardPriceWrapper.append(cardPrice, cardLikeBtn);
  card.append(cardImg, cardTitle, cardDescr, cardPriceWrapper, cardBtn);

  cardItems.push(card);
})

export {
  cardItems
}
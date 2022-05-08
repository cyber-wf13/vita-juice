import { Skelet } from "../../classSkelet";
import { SkeletSect } from "../../classSkeletSect";

export class Bestsellers extends SkeletSect {
  constructor(textTitle, prefix) {
    super(textTitle, prefix);
  }

  createCardCarcass() {
    const card = new Skelet("div", "bestsellers-card"),
      cardImg = new Skelet("img", "bestsellers-card__img"),
      cardWrapper = new Skelet("div", "bestsellers-card__wrapper"),
      cardTitle = new Skelet("h4", "bestsellers-card__title"),
      cardDescr = new Skelet("span", "bestsellers-card__descr"),
      cardPriceWrapper = new Skelet("div", "bestsellers-card__price-wrapper"),
      cardPrice = new Skelet("b", "bestsellers-card__price"),
      cardLikeBtn = new Skelet("btn", "bestsellers-card__price-btn"),
      cardBtn = new Skelet("btn", "bestsellers-card__cart-btn");

    cardLikeBtn.setHtml(`<svg width="35" height="33" viewBox="0 0 35 33" fill="transparent" xmlns="http://www.w3.org/2000/svg">
      <path id="heart-path" fill-rule="evenodd" clip-rule="evenodd" d="M17 26.9375L5.08662 16.0104C-7.23887 4.70634 12.1976 -4.57492 17 5.39958C21.8024 -4.57492 41.2388 4.70634 28.9134 16.0104L17 26.9375Z" stroke="#2B2A29" stroke-width="2" stroke-miterlimit="22.9256"/>
      </svg>
      `);
    cardBtn.setContent("Корзина");

    return [
      card,
      cardImg,
      cardWrapper,
      cardTitle,
      cardDescr,
      cardPriceWrapper,
      cardPrice,
      cardLikeBtn,
      cardBtn,
    ];
  }

  getBestsellersCard(bestsellersCardInfo) {
    const cardItems = [];

    bestsellersCardInfo.forEach((cardInfo) => {
      let [
        card,
        cardImg,
        cardWrapper,
        cardTitle,
        cardDescr,
        cardPriceWrapper,
        cardPrice,
        cardLikeBtn,
        cardBtn,
      ] = this.createCardCarcass();

      cardImg.setAttr("src", cardInfo.imgPath);
      cardTitle.setContent(cardInfo.title);
      cardDescr.setContent(cardInfo.ml);
      cardPrice.setContent(cardInfo.price);

      cardPriceWrapper.insertItems([cardPrice, cardLikeBtn]);
      card.insertItems([
        cardImg,
        cardTitle,
        cardDescr,
        cardPriceWrapper,
        cardBtn,
      ]);

      cardItems.push(card);
    });

    return cardItems;
  }
}

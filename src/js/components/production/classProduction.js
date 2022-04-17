import { Skelet } from "../../classSkelet";
import { SkeletSect } from "../../classSkeletSect";

export class Production extends SkeletSect {
  constructor(titleText, prefix) {
    super(titleText, prefix);

    this.cardWrapper = new Skelet("div", "products__card-items");
  }

  createProductCardCarcass() {
    const card = new Skelet("div", ["product-card", "products__card"]),
      cardImg = new Skelet("img", "product-card__img"),
      cardTitle = new Skelet("h4", "product-card__title");

    return [card, cardImg, cardTitle];
  }

  getProductCard(productCardInfo) {

    for (const title in productCardInfo) {
      let [ card, cardImg, cardTitle ] = this.createProductCardCarcass();

      cardImg.setAttr("src", productCardInfo[title]);
      cardTitle.setContent(title);

      card.insertItems([cardImg, cardTitle]);
      this.cardWrapper.insertItems(card);
    }

    return this.cardWrapper;
  }
}
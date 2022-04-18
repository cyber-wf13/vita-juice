import { Skelet } from "../../classSkelet";
import { SkeletSect } from "../../classSkeletSect";

export class Loyalty extends SkeletSect {
  constructor(titleText, prefix) {
    super(titleText, prefix);

    this.container = new Skelet("div", "container");
    this.subTitle = new Skelet("h4", "loyalty__sub-title");
    this.subTitle.setContent("С картой вы получаете");
  }
  createBlockText() {
    const block = new Skelet("div", "loyalty__block"),
      blockText = new Skelet("span", "loyalty__text"),
      blockBtn = new Skelet("btn", "loyalty__btn");

    blockText.setContent("Хотите оформить?");
    blockBtn.setContent("получить");

    block.insertItems([blockText, blockBtn]);

    return block;
  }

  createContentBlockInner(contentItem, selector, className) {
    const contentBlock = new Skelet(selector, className);
    contentBlock.insertItems(contentItem);
    return contentBlock;
  }


  createListContent(listInfo) {
    const listContent = [];

    listInfo.forEach((info) => {
      let imgWrapper = new Skelet("div", "loyalty-list__wrapper-img"),
        img = new Skelet("img", "loyalty-list__img"),
        listText = new Skelet("span", "loyalty-list__text"),
        listContentWrapper = [];

      listText.setContent(info.text);
      img.setAttr("src", info.pathImg);

      imgWrapper.insertItems(img);
      listContentWrapper.push(imgWrapper, listText);

      listContent.push(listContentWrapper);
    });

    return listContent;
  }

  createCard() {
    const card = new Skelet("div", "loyalty-card"),
      cardTop = new Skelet("div", "loyalty-card__top"),
      cardBottom = new Skelet("div", "loyalty-card__bottom"),
      cardCode = new Skelet("img", "loyalty-card__code"),
      cardHeader = new Skelet("div", "loyalty-card__header"),
      cardLogoWrapper = new Skelet("div", "loyalty-card__logo-wrapper"),
      cardLogoImg = new Skelet("img", "loyalty-card__logo-img"),
      cardLogoText = new Skelet("span", "loyalty-card__logo-text"),
      cardBalance = new Skelet("div", "loyalty-card__balance"),
      cardBalanceText = new Skelet("span", "loyalty-card__balance-text"),
      cardBalanceCount = new Skelet("span", "loyalty-card__balance-count"),
      cardImg = new Skelet("img", "loyalty-card__img"),
      cardInfo = new Skelet("div", "loyalty-card__info"),
      cardInfoTitle = new Skelet("h6", "loyalty-card__info-title"),
      cardInfoWrapper = new Skelet("div", "loyalty-card__info-wrapper"),
      cardInfoName = new Skelet("span", "loyalty-card__info-name"),
      cardInfoSurname = new Skelet("span", "loyalty-card__info-curname");

    cardLogoImg.setAttr("src", "img/loyalty/card/logo.svg");
    cardLogoText.setContent("Вита Джус");

    cardLogoWrapper.insertItems([cardLogoImg, cardLogoText]);

    cardBalanceText.setContent("Баланс")
    cardBalanceCount.setContent("500");
    cardBalance.insertItems([cardBalanceText, cardBalanceCount]);
    cardHeader.insertItems([cardLogoWrapper, cardBalance]);

    cardInfoTitle.setContent("Владелец");
    cardInfoName.setContent("Имя");
    cardInfoSurname.setContent("Фамилия");
    cardInfoWrapper.insertItems([cardInfoName, cardInfoSurname]);
    cardInfo.insertItems([cardInfoTitle, cardInfoWrapper]);

    cardImg.setAttr("src", "img/loyalty/card/juice.png");
    cardTop.insertItems([cardHeader, cardImg, cardInfo]);

    cardBottom.insertItems(cardCode);
    cardCode.setAttr("src", "img/loyalty/card/code.svg");
    card.insertItems([cardTop, cardBottom]);

    return card;
  }
}
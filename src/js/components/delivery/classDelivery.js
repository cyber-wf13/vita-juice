import { Skelet } from "../../classSkelet";
import { SkeletSect } from "../../classSkeletSect";

export class Delivery extends SkeletSect {
  createBlockCarcase() {
    const deliveryBlock = new Skelet("div", "delivery__block"),
      deliveryBlockTitle = new Skelet("h4", "delivery__block-title"),
      deliveryBlockContent = new Skelet("div", "delivery__block-content");

    deliveryBlock.insertItems([deliveryBlockTitle, deliveryBlockContent]);

    return [deliveryBlock, deliveryBlockTitle, deliveryBlockContent];
  }

  createDeliveryZones(deliveryZoneInfo) {
    let zoneItems = [];
    deliveryZoneInfo.forEach((info) => {
      let zone = new Skelet("div", ["delivery__zone", "delivery-zone"]),
        zoneColor = new Skelet("div", "delivery-zone__color"),
        zoneText = new Skelet("p", "delivery-zone__text");

      zoneColor.setAttr("style", `background-color: ${info.color};`);
      zoneText.setContent(info.text);

      zone.insertItems([zoneColor, zoneText]);
      zoneItems.push(zone);
    });

    return zoneItems;
  }

  createDeliveryOptions(deliveryOptionInfo) {
    let optionItems = [];

    deliveryOptionInfo.forEach((info) => {
      let card = new Skelet("div", ["delivery-card", "delivery__card"]),
        cardImgWrapper = new Skelet("div", "delivery-card__img-wrapper"),
        cardImg = new Skelet("img", "delivery-card__img"),
        cardTitle = new Skelet("h4", "delivery-card__title"),
        cardText = new Skelet("p", "delivery-card__text");

      cardImg.setAttr("src", info.imgPath);
      cardTitle.setContent(info.title);
      cardText.setContent(info.text);

      cardImgWrapper.insertItems(cardImg);

      card.insertItems([cardImgWrapper, cardTitle, cardText]);

      optionItems.push(card);
    })

    return optionItems;
  }

  setDeliveryContent(textTitle, deliveryObject) {
    const [deliveryBlockZones, deliveryBlockZonesTitle, deliveryBlockZonesContent] = this.createBlockCarcase();

    deliveryBlockZonesTitle.setContent(textTitle);
    deliveryBlockZonesContent.insertItems(deliveryObject);

    deliveryBlockZones.insertItems([deliveryBlockZonesTitle, deliveryBlockZonesContent]);

    return deliveryBlockZones;
  }
}
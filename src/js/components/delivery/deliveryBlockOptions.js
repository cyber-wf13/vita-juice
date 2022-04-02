import { createElement } from '../../utils';

export function createBlockOptions(infoItems) {
  let deliveryCardItems = [];

  infoItems.forEach((info) => {
    let deliveryCard = createElement("div", "delivery-card"),
      deliveryCardImg = createElement("img", "delivery-card__img"),
      deliveryCardTitle = createElement("h4", "delivery-card__title"),
      deliveryCardText = createElement("p", "delivery-card__text");

      deliveryCardImg.src = info.imgPath;
      deliveryCardTitle.textContent = info.title;
      deliveryCardText.textContent = info.text;

      deliveryCard.append(deliveryCardImg, deliveryCardTitle, deliveryCardText);

      deliveryCardItems.push(deliveryCard);
  })

  return deliveryCardItems;
}
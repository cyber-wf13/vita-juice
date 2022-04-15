import { createElement } from "../../utils";


export function createDeliveryZone(infoItems) {
  let deliveryZoneItems = [];
  infoItems.forEach((info) => {
    let deliveryZone = createElement("div", ["delivery__zone", "delivery-zone"]),
      deliveryZoneColor = createElement("div", "delivery-zone__color"),
      deliveryZoneText = createElement("p", "delivery-zone__text");

    deliveryZoneColor.style = `background-color: ${info.color};`
    deliveryZoneText.textContent = info.text;

    deliveryZone.append(deliveryZoneColor, deliveryZoneText);
    deliveryZoneItems.push(deliveryZone);
  });

  return deliveryZoneItems;
}


import { createElement, createTitle } from '../../utils';
import { createDeliveryZone } from './deliveryZone';
import { createBlockOptions } from './deliveryBlockOptions';

const deliverySect = createElement("section", "delivery"),
  deliveryTitle = createTitle("доставка и оплата", "delivery__title"),
  deliveryWrapper = createElement("div", "delivery__wrapper"),
  deliveryBlock = createElement("div", "delivery__block"),
  deliveryBlockTitle = createElement("h4", "delivery__block-title"),
  deliveryBlockContent = createElement("div", "delivery__block-content"),
  deliveryBlockMap = createElement("img", "delivery__block-map");

let infoDeliveryZone = [
  {
    "color": "#FECF3D",
    "text": "Минимальная сумма заказа 500 руб."
  },
  {
    "color": "#F29114",
    "text": "Минимальная сумма заказа 750 руб."
  },
  {
    "color": "#F08AA8",
    "text": "Минимальная сумма заказа 1000 руб."
  }
];

let infoDeliveryPayment = [{
  "imgPath": "img/delivery/cards/money.svg",
  "title": "наличными",
  "text": "Оплата наличными курьеру или при получении заказа"
},
{
  "imgPath": "img/delivery/cards/card.svg",
  "title": "Картой",
  "text": "Оплата банковской картой курьеру при получение заказа"
},
{
  "imgPath": "img/delivery/cards/online.svg",
  "title": "Онлайн-оплата",
  "text": "Безопасная и удобная оплата заказ на сайте"
}];

let infoDeliveryWays = [{
  "imgPath": "img/delivery/cards/courier.svg",
  "title": "курьером",
  "text": "Вы оплачиваете только заказ, доставка — бесплатно"
},
{
  "imgPath": "img/delivery/cards/pickup.svg",
  "title": "самовывоз",
  "text": "Можете сами забрать заказ, указав это при оформлении заказа."
},
];


let deliveryZonesItems = createDeliveryZone(infoDeliveryZone),
  deliveryPaymentItems = createBlockOptions(infoDeliveryPayment),
  deliveryWaysItems = createBlockOptions(infoDeliveryWays);


deliveryBlockMap.src = "img/delivery/map.png";

const deliveryBlockPaymentWrapper = deliveryBlock.cloneNode(true),
  deliveryBlockWaysWrapper = deliveryBlock.cloneNode(true),
  deliveryBlockZonesWrapper = deliveryBlock.cloneNode(true),
  deliveryBlockZones = deliveryBlockContent.cloneNode(true),
  deliveryBlockPayment = deliveryBlockContent.cloneNode(true),
  deliveryBlockWays = deliveryBlockContent.cloneNode(true);

deliveryBlockZones.append(...deliveryZonesItems);
deliveryBlockPayment.append(...deliveryPaymentItems);
deliveryBlockWays.append(...deliveryWaysItems);

deliveryBlockZonesWrapper.append(deliveryBlockTitle.cloneNode(true), deliveryBlockZones, deliveryBlockMap);
deliveryBlockPaymentWrapper.append(deliveryBlockTitle.cloneNode(true), deliveryBlockPayment);
deliveryBlockWaysWrapper.append(deliveryBlockTitle.cloneNode(true), deliveryBlockWays);

deliveryWrapper.append(deliveryBlockZonesWrapper, deliveryBlockPaymentWrapper, deliveryBlockWaysWrapper);
deliverySect.append(deliveryTitle, deliveryWrapper);

export {
  deliverySect
}
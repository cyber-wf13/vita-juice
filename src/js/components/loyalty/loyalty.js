import { createElement, createTitle } from '../../utils';
import { loyaltyCard } from './loyaltyCard';

const loyaltySect = createElement("section", "loyalty"),
  loyaltyTitle = createTitle("Наша система лояльности", "loyalty__title"),
  loyaltyContainer = createElement("div", "container"),
  loyaltyWrapper = createElement("div", "loyalty__wrapper"),
  loyaltyWrapperInner = createElement("div", "loyalty__wrapper-inner"),
  loyaltyContent = createElement("div", "loyalty__content"),
  loyaltySubTitle = createElement("h4", "loyalty__sub-title"),
  loyaltyList = createElement("ul", ["loyalty__list", "loyalty-list"]),
  loyaltyBlock = createElement("div", "loyalty__block"),
  loyaltyBlockText = createElement("span", "loyalty__text"),
  loyaltyBlockBtn = createElement("btn", "loyalty__btn");

let loyaltyListInfo = [{
  "text": "Всегда рядом в вашем телефоне",
  "pathImg": "img/loyalty/list/phone.svg"
},
{
  "text": "Участвуй в акциях и получай подарки",
  "pathImg": "img/loyalty/list/gift.svg"
}, {
  "text": "Каждый 5-й напиток бесплатно",
  "pathImg": "img/loyalty/list/drink.svg"
}];

loyaltySubTitle.textContent = "С картой вы получаете";
loyaltyBlockText.textContent = "Хотите оформить?";
loyaltyBlockBtn.textContent = "получить";

loyaltyListInfo.forEach((info) => {
  let loyaltyListItem = createElement("li", "loyalty-list__item"),
    loyaltyListImgWrapper = createElement("div", "loyalty-list__wrapper-img"),
    loyaltyListImg = createElement("img", "loyalty-list__img"),
    loyaltyListText = createElement("span", "loyalty-list__text");

  loyaltyListText.textContent = info.text;
  loyaltyListImg.src = info.pathImg;

  loyaltyListImgWrapper.append(loyaltyListImg);
  loyaltyListItem.append(loyaltyListImgWrapper, loyaltyListText);

  loyaltyList.append(loyaltyListItem);
});

loyaltyBlock.append(loyaltyBlockText, loyaltyBlockBtn);
loyaltyContent.append(loyaltySubTitle, loyaltyList, loyaltyBlock);
loyaltyWrapper.append(loyaltyContainer);
loyaltyWrapperInner.append(loyaltyCard, loyaltyContent);
loyaltyContainer.append(loyaltyWrapperInner);
loyaltySect.append(loyaltyTitle, loyaltyWrapper);

export { loyaltySect };
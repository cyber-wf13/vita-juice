import { createElement } from '../../utils';

const loyaltyCard = createElement("div", "loyalty-card"),
  loyaltyCardTop = createElement("div", "loyalty-card__top"),
  loyaltyCardBottom = createElement("div", "loyalty-card__bottom"),
  loyaltyCardCode = createElement("img", "loyalty-card__code"),
  loyaltyCardHeader = createElement("div", "loyalty-card__header"),
  loyaltyCardLogoWrapper = createElement("div", "loyalty-card__logo-wrapper"),
  loyaltyCardLogoImg = createElement("img", "loyalty-card__logo-img"),
  loyaltyCardLogoText = createElement("span", "loyalty-card__logo-text"),
  loyaltyCardBalance = createElement("div", "loyalty-card__balance"),
  loyaltyCardBalanceText = createElement("span", "loyalty-card__balance-text"),
  loyaltyCardBalanceCount = createElement("span", "loyalty-card__balance-count"),
  loyaltyCardImg = createElement("img", "loyalty-card__img"),
  loyaltyCardInfo = createElement("div", "loyalty-card__info"),
  loyaltyCardInfoTitle = createElement("h6", "loyalty-card__info-title"),
  loyaltyCardInfoWrapper = createElement("div", "loyalty-card__info-wrapper"),
  loyaltyCardInfoName = createElement("span", "loyalty-card__info-name"),
  loyaltyCardInfoSurname = createElement("span", "loyalty-card__info-curname");

loyaltyCardLogoImg.src = "img/loyalty/card/logo.svg";
loyaltyCardLogoText.textContent = "Вита Джус";

loyaltyCardLogoWrapper.append(loyaltyCardLogoImg, loyaltyCardLogoText);

loyaltyCardBalanceText.textContent = "Баланс";
loyaltyCardBalanceCount.textContent = "500";
loyaltyCardBalance.append(loyaltyCardBalanceText, loyaltyCardBalanceCount);
loyaltyCardHeader.append(loyaltyCardLogoWrapper, loyaltyCardBalance);

loyaltyCardInfoTitle.textContent = "Владелец";
loyaltyCardInfoName.textContent = "Имя";
loyaltyCardInfoSurname.textContent = "Фамилия";
loyaltyCardInfoWrapper.append(loyaltyCardInfoName, loyaltyCardInfoSurname);
loyaltyCardInfo.append(loyaltyCardInfoTitle, loyaltyCardInfoWrapper);

loyaltyCardImg.src = "img/loyalty/card/juice.png";
loyaltyCardTop.append(loyaltyCardHeader, loyaltyCardImg, loyaltyCardInfo);

loyaltyCardBottom.append(loyaltyCardCode);
loyaltyCardCode.src = "img/loyalty/card/code.svg";
loyaltyCard.append(loyaltyCardTop, loyaltyCardBottom);

export { loyaltyCard };
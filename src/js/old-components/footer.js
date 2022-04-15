import { createElement } from '../utils';

const setContentFooterList = (listInfo, list) => {
  listInfo.forEach((info) => {
    let listItem = createElement("li", "list-links__item"),
      listLink = createElement("a", "list-links__link");

    listLink.href = info.link;
    listLink.textContent = info.text;

    listItem.append(listLink);
    list.append(listItem);
  });

  return list;
}

const footer = createElement("footer", "footer"),
  footerContainer = createElement("div", ["footer__container", "container"]),
  footerTitle = createElement("h2", "footer__title"),
  footerListWrapper = createElement("div", "footer__list-items"),
  footerListInfo = createElement("ul", ["footer__list-info", "list-info"]),
  social = createElement("div", "social"),
  socialContainer = createElement("div", ["container", "social__container"]),
  socialTitle = createElement("h2", ["title", "social__title"]),
  socialWrapper = createElement("div", "social__wrapper");

let footerListLinks = createElement("ul", ["footer__list-links", "list-links"]),
  footerListBonus = createElement("ul", ["footer__list-links", "list-links"]),
  listInfoText = ["Все права пренадлежат ООО «Компания Вита Джус", "ИНН 12456789/ОГРН123456789833"],
  listLinkInfo = [{
    "text": "Публичная оферта",
    "link": "#"
  },
  {
    "text": "Политика конфиденциальности",
    "link": "#"
  }],
  listBonusInfo = [{
    "text": "Пользовательское соглашение",
    "link": "#"
  },
  {
    "text": "Бонусная программа",
    "link": "#"
  }],
  socialInfo = [
    { "pathImg": "img/social/vk.svg", "link": "#" },
    { "pathImg": "img/social/instagram.svg", "link": "#" },
    { "pathImg": "img/social/facebook.svg", "link": "#" }
  ]

listInfoText.forEach((text) => {
  let listItem = createElement("li", "list-info__item");
  listItem.textContent = text;

  footerListInfo.append(listItem);
});

socialInfo.forEach((info) => {
  let link = createElement("a", "social__link"),
    linkImg = createElement("img", "social__link-img");

  link.href = info.link;
  linkImg.src = info.pathImg;

  link.append(linkImg);

  socialWrapper.append(link);
});

footerListLinks = setContentFooterList(listLinkInfo, footerListLinks);
footerListBonus = setContentFooterList(listBonusInfo, footerListBonus);

footerTitle.textContent = "правовая информация";
socialTitle.textContent = "присоединяйтесь к vita juice";

footerListWrapper.append(footerListInfo, footerListLinks, footerListBonus);
footerContainer.append(footerTitle, footerListWrapper);

socialContainer.append(socialTitle, socialWrapper);
social.append(socialContainer);

footer.append(footerContainer, social);



export { footer };
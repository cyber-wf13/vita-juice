import {createElement} from '../utils';

const createList = (linksArray)=>{
  const list = document.createElement("ul");

  linksArray.forEach((link)=>{
    let linkElem = document.createElement("a");
    let listItem = document.createElement("li");
    linkElem.textContent = link;
    listItem.prepend(linkElem)
    list.append(listItem);
  })

  return list;
}

const containerHeader = createElement("div", ["container", "container__header"]),
header = createElement("header", "header"),
logo = createElement("img", "logo"),
headerWrapper = createElement("div", "header__wrapper"),
topHeaderWrapper = createElement("div", "header__wrapper-top"),
bottomHeaderWrapper = createElement("div", "header__wrapper-bottom"),
cart = createElement("a", "cart"),
cartCount = createElement("span", "cart-count"),
cabinet = createElement("a", "cabinet"),
navProducts = createElement("nav", "nav-products"),
navMenu = createElement("nav", "nav-menu"),
navProductsList = createList(["соки", "миксы", "смузи", "ласси", "детокс", "боулы", "салаты", "здоровая еда"]),
navMenuList = createList(["о нас", "франшиза", "контакты", "работа"]);

cart.textContent = "Корзина";
cart.append(cartCount);
cabinet.textContent = "Войти";
logo.setAttribute("src", "img/header/logo.svg");

topHeaderWrapper.prepend(cart, cabinet);
navProducts.prepend(navProductsList);
navMenu.prepend(navMenuList);
bottomHeaderWrapper.prepend(navProducts ,navMenu);
headerWrapper.prepend(topHeaderWrapper, bottomHeaderWrapper);
header.prepend(logo, headerWrapper);
containerHeader.prepend(header);

export {
  containerHeader
};
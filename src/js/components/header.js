import {createElement} from '../utils';

const createNavList = (linksArray, colorsArray)=>{
  const list = document.createElement("ul");

  linksArray.forEach((link, idx)=>{
    let linkElem = document.createElement("a");
    let listItem = document.createElement("li");
    linkElem.textContent = link;
    if (colorsArray != null || colorsArray != undefined){
      listItem.style = `--juice-color: #${colorsArray[idx]}`;
    }
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
navProductsList = createNavList(
  ["соки", "миксы", "смузи", "ласси", "детокс", "боулы", "салаты", "здоровая еда"], 
  ["F29114", "FECF3D", "F08AA8", "E5097F", "EF7F1A", "AE4A84", "009846", "7BB933"]),
navMenuList = createNavList(["о нас", "франшиза", "контакты", "работа"]);

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
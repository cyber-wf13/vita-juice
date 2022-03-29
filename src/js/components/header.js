import {createElement} from '../utils';

const createNavList = (linksParams, colorsArray)=>{
  const list = document.createElement("ul");
  let idx = 0;

  for (const link in linksParams) {
    let linkElem = document.createElement("a");
    let listItem = document.createElement("li");
    linkElem.textContent = link;
    linkElem.href = linksParams[link];
    if (colorsArray != null || colorsArray != undefined){
      listItem.style = `--juice-color: #${colorsArray[idx]}`;
    }
    listItem.prepend(linkElem)
    list.append(listItem);
    idx++;
  }

  return list;
}

let cartSelectCount = 0;

const containerHeader = createElement("div", ["container", "container__header"]),
header = createElement("header", "header"),
logo = createElement("img", "logo"),
headerWrapper = createElement("div", "header__wrapper"),
topHeaderWrapper = createElement("div", "header__wrapper-top"),
bottomHeaderWrapper = createElement("div", "header__wrapper-bottom"),
cart = createElement("a", "cart"),
cartCount = createElement("span", "cart-count"),
cartImg = document.createElement("span"),
cabinet = createElement("a", "cabinet"),
cabinetImg = document.createElement("span"),
navProducts = createElement("nav", "nav-products"),
navMenu = createElement("nav", "nav-menu"),
navProductsList = createNavList(
  {"соки": "#", "миксы": "#", "смузи": "#", "ласси": "#", "детокс": "#", "боулы": "#", "салаты": "#", "здоровая еда": "#"}, 
  ["F29114", "FECF3D", "F08AA8", "E5097F", "EF7F1A", "AE4A84", "009846", "7BB933"]),
navMenuList = createNavList({"о нас": "#", "франшиза": "#", "контакты": "#", "работа": "#"});

cartImg.innerHTML = `<svg width="46" height="37" viewBox="0 0 46 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.13155 4.94168L9.08091 4.8166C8.81314 4.14908 8.64971 3.81301 8.50085 3.74165C8.1924 3.59357 7.3768 3.62426 5.83918 3.68181L4.63608 3.72402C4.18416 3.73628 2.99259 3.73092 2.14934 3.72632L1.40738 3.72323C0.663125 3.72093 0.0623428 3.11401 0.0646428 2.36975C0.0669428 1.6255 0.673858 1.02474 1.41812 1.02704L2.16007 1.0301C2.97493 1.03394 4.12585 1.0393 4.56473 1.0278L5.74402 0.985593C7.71133 0.911949 8.75251 0.872038 9.66403 1.30939C10.6316 1.77283 11.039 2.47181 11.5738 3.78539C13.9961 7.98699 16.248 7.97319 20.6745 7.9471L41.8068 7.95093C42.3531 7.94557 42.8587 8.0269 43.3145 8.17727L43.4449 8.22792C44.1569 8.49108 44.7324 8.92537 45.1421 9.49929C45.5741 10.1039 45.8081 10.8397 45.8081 11.6622C45.8081 12.1571 45.7176 12.6965 45.5281 13.2674L42.5096 22.3512C41.7408 24.666 41.0686 25.9589 39.9039 26.7523C38.7292 27.5533 37.3382 27.6745 35.0962 27.6745L18.7747 27.673C16.9478 27.6784 15.246 27.2073 13.9163 26.1668C12.6955 25.2093 11.8209 23.8067 11.4948 21.8939C11.2354 20.3716 11.0129 17.9516 10.7804 15.4035C10.4229 11.4927 10.0339 7.25655 9.45918 5.7803L9.13155 4.94168ZM34.6642 28.8063C35.7315 28.8063 36.7044 29.2421 37.4095 29.9464C38.1192 30.6569 38.5551 31.6298 38.5551 32.6971C38.5551 33.7644 38.1192 34.7365 37.4149 35.4424C36.7044 36.1521 35.7315 36.588 34.6642 36.588C33.5969 36.588 32.6248 36.1521 31.9189 35.4478C31.2092 34.7365 30.7733 33.7644 30.7733 32.6971C30.7733 31.6298 31.2092 30.6569 31.9135 29.9518C32.6248 29.2421 33.5969 28.8063 34.6642 28.8063ZM35.5036 31.857C35.2911 31.6444 34.9941 31.5132 34.6642 31.5132C34.3343 31.5132 34.0373 31.6444 33.8271 31.8547C33.6115 32.0702 33.4803 32.3672 33.4803 32.6971C33.4803 33.027 33.6115 33.324 33.8217 33.5342C34.0373 33.7498 34.3343 33.881 34.6642 33.881C34.9941 33.881 35.2911 33.7498 35.5013 33.5396C35.7169 33.324 35.8481 33.027 35.8481 32.6971C35.8481 32.3672 35.7169 32.0702 35.5036 31.857ZM19.819 28.8063C20.8862 28.8063 21.8591 29.2421 22.5643 29.9464C23.274 30.6569 23.7098 31.6298 23.7098 32.6971C23.7098 33.7644 23.274 34.7365 22.5696 35.4424C21.8591 36.1521 20.8862 36.588 19.819 36.588C18.7517 36.588 17.7795 36.1521 17.0736 35.4478C16.3639 34.7365 15.9281 33.7644 15.9281 32.6971C15.9281 31.6298 16.3639 30.6569 17.0683 29.9518C17.7795 29.2421 18.7517 28.8063 19.819 28.8063ZM20.6583 31.857C20.4458 31.6444 20.1489 31.5132 19.819 31.5132C19.489 31.5132 19.1921 31.6444 18.9818 31.8547C18.7662 32.0702 18.635 32.3672 18.635 32.6971C18.635 33.027 18.7662 33.324 18.9765 33.5342C19.1921 33.7498 19.489 33.881 19.819 33.881C20.1489 33.881 20.4458 33.7498 20.656 33.5396C20.8717 33.324 21.0029 33.027 21.0029 32.6971C21.0029 32.3672 20.8717 32.0702 20.6583 31.857ZM20.686 10.6433C17.2954 10.664 14.9391 10.6778 12.8751 9.36195C13.0991 11.1558 13.2864 13.1976 13.4659 15.161C13.6899 17.614 13.904 19.9442 14.1587 21.4396C14.3628 22.6397 14.8738 23.4906 15.5767 24.0415C16.3946 24.6814 17.5209 24.9714 18.7747 24.9714L35.0962 24.9729C36.8041 24.9676 37.8131 24.9085 38.3817 24.521C38.9587 24.1282 39.3799 23.222 39.95 21.5056L42.9684 12.4218C43.0574 12.1518 43.1012 11.8963 43.1012 11.6622C43.1012 11.4113 43.0452 11.208 42.9431 11.0645C42.8541 10.9395 42.7168 10.8374 42.5388 10.7668L42.4689 10.7461C42.2848 10.6855 42.063 10.6525 41.8068 10.6525L20.686 10.6433Z" fill="#2B2A29"/>
</svg>`;
cabinetImg.innerHTML = `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.6468 10.1338C16.1486 10.1338 15.7445 9.72966 15.7445 9.23142C15.7445 8.73318 16.1486 8.32907 16.6468 8.32907C19.1994 8.32907 21.4962 9.12501 23.3423 10.4985C25.2376 11.9088 26.6514 13.9258 27.3707 16.3116C28.9616 21.586 25.6171 26.154 20.645 27.6528C19.1058 28.1168 17.4602 28.2554 15.8821 28.0048C14.4907 27.7838 13.2144 27.2145 12.1223 26.4103C10.7667 25.4123 9.68484 24.046 9.00757 22.5329C7.82797 19.898 7.89805 16.863 9.63932 14.4982C10.3151 13.581 11.2292 12.8142 12.3668 12.2909C13.3991 11.8167 14.6099 11.5436 15.9844 11.5436C19.094 11.5436 21.3146 13.5293 22.3111 15.8558C23.8677 19.4877 22.3484 23.4562 17.964 23.4562C15.944 23.4562 13.9633 21.9717 13.7531 19.9189C13.6032 18.4472 14.3848 17.2231 15.5803 16.7193C16.3036 16.4144 18.0392 16.1433 18.1513 17.2953C18.1994 17.7894 17.8382 18.2304 17.3441 18.2784C16.4801 18.3644 15.4391 18.7148 15.5435 19.7358C15.6601 20.8852 16.8883 21.6515 17.964 21.6515C19.5437 21.6515 20.4757 20.9446 20.8614 19.965C21.2844 18.8923 21.0982 17.5971 20.6547 16.5607C19.9125 14.8276 18.2715 13.3483 15.9844 13.3483C14.8723 13.3483 13.9127 13.5595 13.1137 13.9268C12.2686 14.3156 11.5913 14.8834 11.091 15.5622C9.73088 17.4088 9.73344 19.7516 10.6506 21.7993C11.2031 23.0342 12.0839 24.1468 13.1863 24.9586C14.0595 25.6011 15.0708 26.0553 16.1645 26.2287C17.4643 26.4349 18.8352 26.3162 20.1304 25.9259C21.5714 25.4911 22.9075 24.7212 23.9372 23.691C25.8289 21.7973 26.4105 19.368 25.6437 16.8262C25.0376 14.8158 23.8544 13.1222 22.2712 11.9441C20.7304 10.7982 18.8019 10.1338 16.6468 10.1338Z" fill="#2B2A29"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.1657 36.0052C18.7206 36.0052 18.276 35.7182 18.2797 35.1433C18.2863 33.8311 18.3917 32.498 18.1983 31.1952C18.0981 30.5184 18.6797 30.0739 19.1948 30.0739C19.5371 30.0739 19.8495 30.2688 19.916 30.721C20.135 32.1938 20.0689 33.6587 20.0608 35.1433C20.0577 35.7182 19.6112 36.0052 19.1657 36.0052ZM8.57843 34.0256C7.92519 34.0256 7.32869 33.1324 7.90619 32.4771C8.90987 31.3374 9.70933 30.0396 10.5953 28.8109C10.7933 28.5357 11.0706 28.4217 11.3433 28.4217C11.9851 28.4217 12.6067 29.0549 12.1341 29.7098C11.1591 31.0637 10.2721 32.4812 9.16662 33.737C8.98709 33.9406 8.7805 34.0256 8.57843 34.0256ZM28.2131 33.6864C27.9527 33.6864 27.7048 33.5492 27.564 33.2173C26.983 31.8397 26.3158 30.4591 25.3281 29.3245C24.7552 28.6661 25.3506 27.7736 26.0013 27.7736C26.2028 27.7736 26.4095 27.8589 26.5891 28.0647C27.6853 29.3245 28.4571 30.786 29.1038 32.3175C29.406 33.0347 28.7804 33.6864 28.2131 33.6864ZM34.5419 26.5269C34.4027 26.5269 34.2559 26.4911 34.1071 26.4093C32.8523 25.7223 31.6134 25.0183 30.2465 24.5749C29.2588 24.2562 29.5499 22.8101 30.4316 22.8101C30.5217 22.8101 30.6185 22.825 30.7197 22.8582C32.2343 23.3472 33.6166 24.1094 35.0058 24.8701C35.8647 25.3401 35.3394 26.5269 34.5419 26.5269ZM2.22716 25.3868C1.41426 25.3868 0.877263 24.1917 1.75141 23.7396C3.17765 23.0015 4.74598 22.671 6.26314 22.1783C6.36505 22.1456 6.46007 22.1308 6.55014 22.1308C7.43249 22.1308 7.72518 23.5773 6.73685 23.8971C5.37305 24.3391 3.93205 24.6142 2.65073 25.2783C2.50597 25.3534 2.36226 25.3868 2.22716 25.3868ZM6.30817 17.0283C4.78004 17.0283 3.33262 16.8688 1.61969 16.835C-0.399554 16.7958 -0.339451 15.0359 1.83125 15.039C3.6585 15.0421 4.70927 15.1975 6.27337 15.246C7.40792 15.2823 7.42328 17.0283 6.30817 17.0283ZM34.8944 17.0277C33.5377 17.0277 32.1801 17.0277 30.823 17.0277C29.6731 17.0277 29.6731 15.246 30.823 15.246C32.1801 15.246 33.5377 15.246 34.8944 15.246C36.0447 15.246 36.0447 17.0277 34.8944 17.0277ZM8.37478 11.3215C8.17988 11.3215 7.97885 11.2592 7.79375 11.1112C6.72764 10.2602 5.51429 9.63251 4.22622 9.18995C3.25133 8.85646 3.53468 7.41898 4.40225 7.41898C4.49583 7.41898 4.59509 7.43535 4.70094 7.47118C6.29691 8.01958 7.73381 8.79769 9.0536 9.85037C9.76357 10.4182 9.11646 11.3215 8.37478 11.3215ZM28.468 11.2954C27.6495 11.2954 27.3901 9.88822 28.3232 9.50765C29.6557 8.96801 30.7612 7.99853 31.9565 7.22307C32.1152 7.12028 32.2712 7.07525 32.418 7.07525C33.1664 7.07525 33.659 8.2405 32.8558 8.76084C31.5121 9.63251 30.2951 10.6187 28.7963 11.2264C28.6792 11.2739 28.5691 11.2954 28.468 11.2954ZM12.9454 7.71474C12.5893 7.71474 12.2318 7.52804 12.0895 7.09733C11.6011 5.62505 10.6983 4.33656 9.91606 3.01222C9.51034 2.32419 10.1263 1.68324 10.736 1.68324C11.0062 1.68324 11.2758 1.80896 11.4547 2.11292C12.3208 3.57848 13.2681 4.99637 13.8069 6.62362C14.0257 7.28403 13.4861 7.71474 12.9454 7.71474ZM23.997 7.12599C23.4447 7.12541 22.9152 6.70242 23.1751 6.05737C23.6856 4.79636 24.2437 3.55699 24.8498 2.33794C25.0095 2.01716 25.2683 1.88426 25.5338 1.88426C26.1199 1.88426 26.7379 2.53179 26.388 3.23768C25.8515 4.31856 25.3461 5.41335 24.8938 6.53209C24.7266 6.94645 24.3573 7.12599 23.997 7.12599ZM18.231 6.38677C17.8909 6.38677 17.5808 6.19188 17.5196 5.74011C17.2889 4.05466 17.3855 2.4182 17.633 0.740947C17.6995 0.289318 18.0115 0.0944214 18.3534 0.0944214C18.8685 0.0944214 19.4501 0.53933 19.3504 1.21567C19.1534 2.54876 19.0546 3.92571 19.2388 5.26656C19.3303 5.94217 18.7456 6.38677 18.231 6.38677Z" fill="#2B2A29"/>
</svg>
`
cartCount.textContent = `(${cartSelectCount})`;
cart.textContent = "Корзина";
cart.append(cartCount, cartImg);
cabinet.textContent = "Войти";
cabinet.append(cabinetImg);
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
import { ConstructDOM } from "../core/DOM/ConstructDOM";

export function generateBestProducts(products) {
  return products.map((product) => {
    const card = new ConstructDOM("div", ["bestsellers-card"]);
    const image = new ConstructDOM("img", ["bestsellers-card__img"]);
    const title = new ConstructDOM("h4", ["bestsellers-card__title"]);
    const descr = new ConstructDOM("span", ["bestsellers-card__descr"]);
    const priceWrapper = new ConstructDOM("div", [
      "bestsellers-card__price-wrapper",
    ]);
    const price = new ConstructDOM("b", ["bestsellers-card__price"]);
    const btnLike = new ConstructDOM("btn", ["bestsellers-card__price-btn"]);
    const btnCart = new ConstructDOM("btn", ["bestsellers-card__cart-btn"]);
    const likeSvg = `<svg width="35" height="33" viewBox="0 0 35 33" fill="transparent" xmlns="http://www.w3.org/2000/svg">
  <path id="heart-path" fill-rule="evenodd" clip-rule="evenodd" d="M17 26.9375L5.08662 16.0104C-7.23887 4.70634 12.1976 -4.57492 17 5.39958C21.8024 -4.57492 41.2388 4.70634 28.9134 16.0104L17 26.9375Z" stroke="#2B2A29" stroke-width="2" stroke-miterlimit="22.9256"></path>
</svg>`;

    image.setAttr({ "src": product.imgPath });
    title.setContent(product.title);
    descr.setContent(product.ml);
    price.setContent(product.price);
    btnLike.setHtml(likeSvg);
    btnCart.setContent("Корзина");

    priceWrapper.insertItems([price, btnLike]);
    card.insertItems([image, title, descr, priceWrapper, btnCart]);
    return card;
  });
}

import { ConstructListDOM } from "../core/DOM/ConstructListDOM";

export function generateListProducts(
  typesProducts,
  parentSelector,
  listClassNames,
  generateItemFunc,
) {
  const parentItem = document.querySelector(parentSelector);
  const contentListProducts = typesProducts.map((type) =>
    generateItemFunc(type),
  );

  const listProducts = new ConstructListDOM(
    contentListProducts,
    listClassNames,
  );

  parentItem.append(listProducts.elem);
}

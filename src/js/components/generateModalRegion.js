import { ConstructDOM } from "../core/DOM/ConstructDOM";
import { ConstructListDOM } from "../core/DOM/ConstructListDOM";

export function generateModalRegion(cities, generateItemFunc) {
  const region = new ConstructDOM("form", ["region"]);
  const head = new ConstructDOM("div", ["region__head"]);
  const headTitle = new ConstructDOM("h4", ["region__title"]);
  const headBtn = new ConstructDOM("button", ["region__button"]);
  const body = new ConstructDOM("div", ["region__body"]);
  const bodyTitle = new ConstructDOM("h4", ["region__title"]);
  const lists = new ConstructDOM("div", ["region__lists"]);

  region.setAttr({ "method": "get", "action": "/", "name": "region" });
  headTitle.setContent("Ваш город Киев?");
  headBtn.setContent("Да");
  bodyTitle.setContent("Выбрать из списка");

  const contentList = cities.map((city) => generateItemFunc(city));

  const contentListlength = contentList.length;
  const countOfItem = 4;
  for (let i = 0; i < contentListlength; i += countOfItem) {
    const list = new ConstructListDOM(contentList.splice(0, countOfItem), [
      "region-list",
      "region__list",
    ]);
    lists.insertItems([list]);
  }

  head.insertItems([headTitle, headBtn]);
  body.insertItems([bodyTitle, lists]);
  region.insertItems([head, body]);

  return region;
}

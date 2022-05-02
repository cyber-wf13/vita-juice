import { Skelet } from "./classSkelet";
/* 
Класс SkeletSect является унаследованным от Skelet и позволяет создавать сразу базовую структуру секции.
titleText - строка - текст заголовка секции
prefix - строка/булевое - задает префикс для дочерного класса БЭМ (напр. {{main}}__wrapper, {{main}} => prefix)
*/
export class SkeletSect extends Skelet {
  constructor(titleText, prefix = false) {
    super("section", prefix);

    if (prefix === false || prefix == " " || prefix == "") {
      this.section = new Skelet("section", "skelet");
      this.sectionWrapper = new Skelet("div", "skelet__wrapper");
      this.sectionTitle = this.createTitle(titleText, "skelet__title");
    } else {
      this.section = new Skelet("section", ["skelet", `${prefix}`]);
      this.sectionWrapper = new Skelet("div", [
        "skelet__wrapper",
        `${prefix}__wrapper`,
      ]);
      this.sectionTitle = this.createTitle(titleText, [
        "skelet__title",
        `${prefix}__title`,
      ]);
    }
  }

  // Данные метод вызывается в конце, чтобы собрать секцию. Возвразает DOM-элемент
  collectElements() {
    this.section.insertItems([this.sectionTitle, this.sectionWrapper]);

    return this.section.elem;
  }
}

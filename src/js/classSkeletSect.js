import { Skelet } from "./classSkelet";

export class SkeletSect extends Skelet {
  constructor(titleText, prefix = false) {
    super("section", prefix);

    if (prefix === false || prefix == " " || prefix == "") {
      this.section = new Skelet("section", "skelet");
      this.sectionWrapper = new Skelet("div", "skelet__wrapper");
      this.sectionTitle = this.createTitle(titleText);
    }else {
      this.section = new Skelet("section", ["skelet", `${prefix}`]);
      this.sectionWrapper = new Skelet("div", ["skelet__wrapper", `${prefix}__wrapper`]);
      this.sectionTitle = this.createTitle(titleText, `${prefix}__title`);
    }
  }

  collectElements() {
    this.section.insertItems([this.sectionTitle, this.sectionWrapper]);

    return this.section.elem;
  }
}
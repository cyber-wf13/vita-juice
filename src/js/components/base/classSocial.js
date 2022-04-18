import { Skelet } from "../../classSkelet";

export class Social extends Skelet {
  constructor(selector, className) {
    super(selector, className);

    this.social = new Skelet(selector, className);
    this.wrapper = new Skelet("div", `${className}__wrapper`);
    this.title = this.createTitle("присоединяйтесь к vita juice", "social__title");
    this.container = new Skelet("div", ["container", "social__container"]);
  }

  createSocialLinks(socialLinks) {
    socialLinks.forEach((info) => {
      let link = new Skelet("a", `${this.className}__link`),
        linkImg = new Skelet("img", `${this.className}__link-img`);

      link.setAttr("href", info.link);
      linkImg.setAttr("src", info.pathImg);

      link.insertItems(linkImg);

      this.wrapper.insertItems(link);
    })
  }

  collectSocial() {
    this.container.insertItems([this.title, this.wrapper]);
    this.social.insertItems(this.container);

    return this.social;
  }
}
import { Skelet } from "../../classSkelet";

export class Footer extends Skelet{
  constructor(selector, className) {
    super(selector, className);

    this.footer = new Skelet(selector, className);
    this.container = new Skelet("div", ["footer__container", "container"]);
    this.listWrapper = new Skelet("div", "footer__list-items");
    this.title = this.createTitle("правовая информация", "footer__title");
  }

  collectFooter(social){
    this.container.insertItems([this.title, this.listWrapper]);
    this.footer.insertItems([this.container, social]);

    return this.footer.elem;
  }

  createListInfoContent(listInfo){
    const content = [];

    listInfo.forEach((info)=>{
      let span = new Skelet("span", "list-info__text")
      span.setContent(info);

      content.push(span);
    });

    return content;
  }

  createListContent(listInfo){
    const content = [];

    listInfo.forEach((info)=>{
      let listLink = new Skelet("a", "list-links__link");

      listLink.setAttr("href", info.link);
      listLink.setContent(info.text);

      content.push(listLink);
    });

    return content;
  }
}
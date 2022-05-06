import { Skelet } from "../../classSkelet";
import { body } from "../../utils";

export class Modal extends Skelet {
  constructor(selector, className, titleText) {
    super(selector, className);

    if (Array.isArray(className)) {
      this.prefix = this.className[0];
    } else {
      this.prefix = this.className;
    }

    if (typeof titleText == "object") {
      this.title = titleText;
    } else {
      this.title = new Skelet("h4", `${this.prefix}__title`);
      this.title.setContent(titleText);
    }

    this.wrapper = new Skelet("div", `${this.prefix}-wrapper`);
  }

  createCarcass(blockContent) {
    const head = new Skelet("div", `${this.prefix}__head`),
      closeBtn = new Skelet("button", `${this.prefix}__button`),
      bodyBlock = new Skelet("div", `${this.prefix}__body`);

    head.insertItems([this.title, closeBtn]);
    bodyBlock.insertItems(blockContent);
    this.insertItems([head, bodyBlock]);
    this.wrapper.insertItems(this);

    closeBtn.elem.addEventListener(
      "click",
      this.removeModalFromBody.bind(this)
    );

    this.wrapper.elem.addEventListener(
      "click",
      this.handleWrapperClick.bind(this)
    );
  }

  addModalToBody() {
    body.classList.add("_modal-open");
    body.append(this.wrapper.elem);
  }

  removeModalFromBody() {
    body.classList.remove("_modal-open");
    body.removeChild(this.wrapper.elem);
  }

  handleWrapperClick(e) {
    const target = e.target;
    if (this.wrapper.elem === target) {
      this.removeModalFromBody();
    }
  }
}

import { ConstructDOM } from "./ConstructDOM";

export class ConstructModalDOM extends ConstructDOM {
  constructor(openBtnSelector, modalContent = [], title = "", classNames = []) {
    classNames.push("modal-wrapper");
    super("div", classNames);
    this.title = title;
    this.isShowModal = false;
    this.modalContent = modalContent;

    this.openBtn = document.querySelector(openBtnSelector);
    this.openBtn.addEventListener("click", (e) => this.OpenBtnHandler(e));
  }

  createModalBody() {
    const modal = new ConstructDOM("div", ["modal"]);
    const head = new ConstructDOM("div", ["modal__head"]);
    const closeBtn = new ConstructDOM("button", ["modal__button"]);
    const headTitle = new ConstructDOM("h4", ["modal__title"], this.title);
    const body = new ConstructDOM("div", ["modal__body"]);

    closeBtn.elem.addEventListener("click", (e) => this.closeBtnHandler(e));
    this.elem.addEventListener("click", (e) => this.wrapperClickHandler(e));

    body.insertItems(this.modalContent);

    head.insertItems([headTitle, closeBtn]);
    modal.insertItems([head, body]);
    this.insertItems([modal]);
  }

  OpenBtnHandler(e) {
    if (this.isShowModal == false) {
      this.createModalBody();
    }
    this.isShowModal = true;
    document.body.append(this.elem);
  }

  closeBtnHandler(e) {
    if (this.isShowModal) {
      this.destroyModal();
    }
  }

  wrapperClickHandler(e) {
    if (e.target == this.elem) {
      this.destroyModal();
    }
  }

  destroyModal() {
    this.elem.remove();
    this.isShowModal = false;
  }
}

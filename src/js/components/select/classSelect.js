import { Skelet } from "../../classSkelet";
import { Modal } from "../modal/classModal";
import { selectModalCities } from "../../infoOfServer";

export class Select extends Skelet {
  constructor(selector, className, prefix, titleText) {
    super(selector, [className, `${prefix}__${className}`]);

    this.title = new Skelet("span", `${this.className[0]}__title`);
    this.title.setContent(titleText);

    this.modal = null;
    this.init();
  }

  init() {
    const mark = new Skelet("span", `${this.className[0]}__mark`),
      button = new Skelet("button", `${this.className[0]}__button`);

    mark.setHtml(`<svg class="select-mark-svg" width="27" height="36" viewBox="0 0 27 36" fill="#2B2A29" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.5 36C13.7893 36 14.0786 35.8579 14.2232 35.6684C14.7536 35.0526 27 20.3211 27 13.2632C27 5.96842 20.925 0 13.5 0C6.075 0 0 5.96842 0 13.2632C0 20.3211 12.2464 35.0526 12.7768 35.6684C12.9214 35.8579 13.2107 36 13.5 36ZM13.5 1.89474C19.8643 1.89474 25.0714 7.01053 25.0714 13.2632C25.0714 18.7105 16.1518 30.2211 13.5 33.5368C9.69107 28.8 1.92857 18.1895 1.92857 13.2632C1.92857 7.01053 7.13571 1.89474 13.5 1.89474Z"/>
    <path d="M19 12C19 8.7 16.525 6 13.5 6C10.475 6 8 8.7 8 12C8 15.3 10.475 18 13.5 18C16.525 18 19 15.3 19 12ZM9.83333 12C9.83333 9.8 11.4833 8 13.5 8C15.5167 8 17.1667 9.8 17.1667 12C17.1667 14.2 15.5167 16 13.5 16C11.4833 16 9.83333 14.2 9.83333 12Z"/>
    </svg>`);
    button.setHtml(`<svg class="select-arrow-btn" width="16" height="16" viewBox="0 0 23 35" fill="#2B2A29" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.2725 0.469277C19.9863 -0.244506 21.1283 -0.10175 21.8421 0.612033C22.4131 1.32582 22.4131 2.46787 21.6994 3.18165L5.1396 17.4573L21.6994 31.8757C22.4131 32.4467 22.4131 33.5888 21.8421 34.4453C21.1283 35.1591 19.9863 35.1591 19.2725 34.5881L1.14242 18.8849C0.285879 18.1711 0.285879 16.8863 1.14242 16.1725L19.2725 0.469277Z"/>
    </svg>`);

    this.insertItems([mark, this.title, button]);

    this.elem.addEventListener("click", this.createModalWindow.bind(this));
  }

  createModalWindow() {
    const modalContent = this.createModalContent();

    this.modal = new Modal("div", "modal", "Ваш регион");
    this.modal.createCarcass(modalContent);
    this.modal.addModalToBody();
  }

  createModalContent() {
    const listOfCities = this.dropList(selectModalCities, 4);

    const region = new Skelet("div", "region"),
      regionHead = new Skelet("div", "region__head"),
      regionHeadTitle = new Skelet("h4", "region__title"),
      regionHeadButton = new Skelet("button", "region__button"),
      regionBody = new Skelet("div", "region__body"),
      regionBodyTitle = new Skelet("h4", "region__title"),
      regionLists = this.setRegionList(listOfCities);

    regionHeadTitle.setContent("Ваш город Красноярск?");
    regionBodyTitle.setContent("Выбрать из списка");
    regionHeadButton.setContent("Да");

    regionHead.insertItems([regionHeadTitle, regionHeadButton]);
    regionBody.insertItems([regionBodyTitle, regionLists]);
    region.insertItems([regionHead, regionBody]);

    regionHeadButton.elem.addEventListener(
      "click",
      function () {
        if (this.modal != null || this.modal != undefined) {
          this.modal.removeModalFromBody();
        }
      }.bind(this)
    );

    return region;
  }

  dropList(list, dropCount) {
    const listLength = list.length;
    let formatedList = [];

    for (let i = 0; i <= listLength; i += dropCount) {
      if (i == listLength) {
        break;
      }
      formatedList.push(list.sort().slice(i, i + dropCount));
    }

    return formatedList;
  }

  setRegionList(listOfCities) {
    const blockLists = new Skelet("div", "region__lists");
    listOfCities.forEach((listCities) => {
      let list = blockLists.createList(
        listCities,
        "region-list",
        "region",
        true
      );
      blockLists.insertItems(list);
    });

    return blockLists;
  }
}

export class Skelet {

  constructor(selector, className) {
    this.className = className;
    this.selector = selector;
    this.elem = this.createElement();
  }

  createElement() {
    const elem = document.createElement(this.selector);

    if (this.className === false || this.className == " " || this.className == "") {
      return elem;
    }

    if (typeof this.className == "string") {
      elem.classList.add(this.className);
    } else if (typeof this.className == "object") {
      this.className.forEach((className, idx) => {
        if (className === false || className == " " || className == "") {
          this.className.splice(idx, 1);
        }
      });

      elem.classList.add(...this.className);
    }

    return elem;
  }

  // createCarcass(titleText, prefix = "skelet") {
  //   let section = new Skelet("section", `${prefix}`),
  //   sectionWrapper = new Skelet("div", `${prefix}__wrapper`),
  //   sectionTitle = section.createTitle(titleText, `${prefix}__title`);

  //   return [section, sectionTitle, sectionWrapper];
  // }

  createTitle(titleText, className = " ") {
    const title = new Skelet("h2", ["title", className]);
    title.setContent(titleText);

    return title;
  }

  insertItems(items, prepend = true) {
    if (Array.isArray(items)) {
      items.forEach((item) => {
        prepend ? this.elem.append(item.elem) : this.elem.prepend(item.elem);
      })
    } else {
      prepend ? this.elem.append(items.elem) : this.elem.prepend(items.elem);
    }
  }

  setAttr(attr, value) {
    this.elem.setAttribute(attr, value);
  }

  setContent(text) {
    this.elem.textContent = text;
  }

  setHtml(html){
    this.elem.innerHTML = html;
  }
}
export class Skelet {

  constructor(selector, className) {
    this.className = className;
    this.selector = selector;
    this.elem = this.createElement();
  }

  createElement() {
    const elem = document.createElement(this.selector);

    if (typeof this.className == "string") {
      elem.classList.add(this.className);
    } else if (typeof this.className == "object") {
      elem.classList.add(...this.className);
    }

    return elem;
  }

  createTitle(text, className) {
    const title = createElement("h2", "title");
    title.textContent = text;

    if (className) {
      title.classList.add(className);
    }

    return title;
  }

  appendItems(items) {
    if (Array.isArray(items)) {
      this.elem.append(...items);
    } else {
      this.elem.append(items);
    }
  }
}
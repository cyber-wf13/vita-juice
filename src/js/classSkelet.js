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

  createList(listContent, className, prefix, arrayWrapper = false, customPrefix = false) {
    let listClassNames = [className, `${prefix}__list`];

    if (prefix === false && customPrefix != false){
      listClassNames[1] = customPrefix;
    }

    const list = new Skelet("ul", listClassNames);

    if (arrayWrapper == true) {
      listContent.forEach((item) => {
        let listItem = new Skelet("li", `${className}__item`);
        listItem.insertItems(item)
        list.insertItems(listItem);
      })
    } else {
      let listItem = new Skelet("li", `${className}__item`);
      listItem.insertItems(listContent)
      list.insertItems(listItem);
    }

    return list;
  }

  createTitle(titleText, className = " ") {
    let titleClassNames = ["title"];
    if (Array.isArray(className)){
      titleClassNames.push(...className);
    }else{
      titleClassNames.push(className);
    }
    const title = new Skelet("h2", titleClassNames);
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

  setHtml(html) {
    this.elem.innerHTML = html;
  }
}
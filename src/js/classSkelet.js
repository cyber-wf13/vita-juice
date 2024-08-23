/* 
Класс Skelet отвечает за создание объектов которые позволяют манипулоровать DOM-узлами как объекты класса и
расширяет возможность создание базовых html-блоков (например списков или заголовков).
*/
export class Skelet {
  constructor(selector, className) {
    this.className = className;
    this.selector = selector;
    this.elem = this.createElement();
  }

  // Метод возвращает DOM-элемент с параметрами, которые были определенны в конструкторе (класс и вид узла)
  // createElement() {
  //   const elem = document.createElement(this.selector);

  //   // Проверка в случаи если в конструктор не был передан строка с классом или пустая строка
  //   if (
  //     this.className === false ||
  //     this.className == " " ||
  //     this.className == ""
  //   ) {
  //     return elem;
  //   }

  //   if (typeof this.className == "string") {
  //     elem.classList.add(this.className);
  //   } else if (typeof this.className == "object") {
  //     // Та же проверка, что и выше, но для каждого элемента массива
  //     this.className.forEach((className, idx) => {
  //       if (className === false || className == " " || className == "") {
  //         this.className.splice(idx, 1);
  //       }
  //     });

  //     elem.classList.add(...this.className);
  //   }

  //   return elem;
  // }

  /*   
  Данный метод создает базовую структуру списка ul > li > {{listContent}}
  listContent - массив/строка - контент, которые будет внутри каждого элемента списка
  className - строка - название класса для списка
  prefix - строка/булевое - префикс для задания дочерного класса БЄМ (напр. {{header}}__list, {{header}} => prefix) 
  arrayWrapper - булевое - если контент listContent не статичный, а список рахзных элементов
  customPrefix - строка/булевое - если нужно задать префикс, который отличается от основного префикса 
   */
  // createList(
  //   listContent,
  //   className,
  //   prefix,
  //   arrayWrapper = false,
  //   customPrefix = false,
  // ) {
  //   let listClassNames = [className, `${prefix}__list`];

  //   if (prefix === false && customPrefix != false) {
  //     listClassNames[1] = customPrefix;
  //   }

  //   const list = new Skelet("ul", listClassNames);

  //   if (arrayWrapper == true) {
  //     listContent.forEach((item) => {
  //       let listItem = new Skelet("li", `${className}__item`);
  //       if (typeof item == "string") {
  //         listItem.setContent(item);
  //       } else {
  //         listItem.insertItems(item);
  //       }
  //       list.insertItems(listItem);
  //     });
  //   } else {
  //     let listItem = new Skelet("li", `${className}__item`);
  //     listItem.insertItems(listContent);
  //     list.insertItems(listItem);
  //   }

  //   return list;
  // }

  // createTitle(titleText, className = " ") {
  //   let titleClassNames = ["title"];
  //   if (Array.isArray(className)) {
  //     titleClassNames.push(...className);
  //   } else {
  //     titleClassNames.push(className);
  //   }
  //   const title = new Skelet("h2", titleClassNames);
  //   title.setContent(titleText);

  //   return title;
  // }

  /*  Метод позволяет вставить DOM-элемент 
    items - объект/массив - элементы, которые нужно вставить
    prepend - булевое - позволяет вставить элемент до или после дочерных элементов, которые уже присутствуют
  */
  // insertItems(items, prepend = true) {
  //   if (Array.isArray(items)) {
  //     items.forEach((item) => {
  //       prepend ? this.elem.append(item.elem) : this.elem.prepend(item.elem);
  //     });
  //   } else {
  //     prepend ? this.elem.append(items.elem) : this.elem.prepend(items.elem);
  //   }
  // }

  // setAttr(attr, value) {
  //   this.elem.setAttribute(attr, value);
  // }

  // setContent(text) {
  //   this.elem.textContent = text;
  // }

  // setHtml(html) {
  //   this.elem.innerHTML = html;
  // }
}

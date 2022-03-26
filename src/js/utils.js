export function createElement(selector, className) {

  if (selector === "") {
    return;
  }

  const elem = document.createElement(selector);

  if (typeof className == "string") {
    elem.classList.add(className);
  }else if (typeof className == "object"){
    elem.classList.add(...className);
  }

return elem;  
}
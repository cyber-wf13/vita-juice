export const body = document.body,
  browserBreakpoint = window.getComputedStyle(body, ":after").getPropertyValue("content").replaceAll(/"/g, "");

export function createElement(selector, className) {

  if (selector === "") {
    return;
  }

  const elem = document.createElement(selector);

  if (typeof className == "string") {
    elem.classList.add(className);
  } else if (typeof className == "object") {
    elem.classList.add(...className);
  }

  return elem;
}

export function createTitle(text, className) {
  const title = createElement("h2", "title");
  title.textContent = text;

  if (className) {
    title.classList.add(className);
  }

  return title;
}
export const body = document.body,
  browserBreakpoint = window.getComputedStyle(body, ":after").getPropertyValue("content").replaceAll(/"/g, "");


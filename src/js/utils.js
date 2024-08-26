export const body = document.body,
  // Переменная позволяет определить ширину области просмотра с помощью css свойства after элемента body
  browserBreakpoint = window
    .getComputedStyle(body, ":after")
    .getPropertyValue("content")
    .replaceAll(/"/g, "");

export async function getInfoByServer(url, options = {}) {
  const response = await fetch(url, options);
  return await response.json();
}

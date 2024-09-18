export async function getInfoByServer(url, options = {}) {
  const response = await fetch(url, options);
  return await response.json();
}

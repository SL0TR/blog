export function getParsedJson(str) {
  let parsedJson = str;

  try {
    parsedJson = JSON.parse(str);
    return parsedJson;
  } catch (e) {
    return parsedJson;
  }
}

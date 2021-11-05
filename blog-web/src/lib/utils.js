import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { PRIVATE_ROUTE } from "router";
dayjs.extend(relativeTime);

export function getParsedJson(str) {
  let parsedJson = str;

  try {
    parsedJson = JSON.parse(str);
    return parsedJson;
  } catch (e) {
    return parsedJson;
  }
}

export function getPostedTime(date) {
  return dayjs(date).fromNow("h");
}

export function getPostAuthorLink(authorId) {
  return `/${PRIVATE_ROUTE.POSTS}?author=${authorId}`;
}

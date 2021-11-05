import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { PRIVATE_ROUTE } from "router";
dayjs.extend(relativeTime);

export const pageSize = 6;

export function getParsedJson(str) {
  if (!str) {
    return null;
  }

  try {
    return JSON.parse(str);
  } catch (e) {
    return str;
  }
}

export function getPostedTime(date) {
  return dayjs(date).fromNow("h");
}

export function getPostAuthorLink(authorId) {
  return `/${PRIVATE_ROUTE.POSTS}?author=${authorId}`;
}

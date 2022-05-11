import { getStrapiURL } from "./api";

export function getStrapiMedia(media) {
  const imageUrl = media.startsWith("/") ? getStrapiURL(media) : media;
  return imageUrl;
}

export function img(file: string) {
  if (!file) return "";
  if (file.startsWith("/")) return file;
  return `/images/${file}`;
}

export const HERO_IMAGE = "/images/baoding_hospital-DbKCK1jB.webp";

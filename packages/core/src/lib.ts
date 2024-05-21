import { fileURLToPath } from "node:url";
import path from "node:path";

export function dirname(url: string) {
  return path.dirname(fileURLToPath(url));
}

export function filename(url: string) {
  return fileURLToPath(url);
}

export function root() {
  return path.resolve(dirname(import.meta.url), "../");
}

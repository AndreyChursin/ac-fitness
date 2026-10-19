import type { Locale } from "./config";
import type english from "./messages/en.json";

export type Messages = typeof english;

const dictionaries = {
  ru: () => import("./messages/ru.json").then((module) => module.default),
  en: () => import("./messages/en.json").then((module) => module.default),
} satisfies Record<Locale, () => Promise<Messages>>;

export function getDictionary(locale: Locale): Promise<Messages> {
  return dictionaries[locale]();
}

export const locales = ["ru", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ru";
export const languageNames: Record<Locale, string> = {
  ru: "Русский",
  en: "English",
};
export const intlLocales: Record<Locale, string> = { ru: "ru-RS", en: "en-RS" };

export function isLocale(value: string): value is Locale {
  return locales.some((locale) => locale === value);
}

export function localizePath(pathname: string, locale: Locale) {
  const segments = pathname.split("/");
  if (isLocale(segments[1] ?? "")) segments.splice(1, 1);
  return `/${locale}${segments.join("/") === "/" ? "" : segments.join("/")}`;
}

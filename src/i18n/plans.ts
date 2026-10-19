import { intlLocales, type Locale } from "./config";

export const plans = [
  { price: 800, featured: false },
  { price: 1500, featured: true },
  { price: 3000, featured: false },
] as const;

export function formatPrice(price: number, locale: Locale) {
  return new Intl.NumberFormat(intlLocales[locale], {
    style: "currency",
    currency: "RSD",
    currencyDisplay: "code",
    maximumFractionDigits: 0,
  }).format(price);
}

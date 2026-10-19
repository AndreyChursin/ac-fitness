import { intlLocales, type Locale } from "./config";

export const plans = [
  { price: 15, usdtPrice: 15, featured: false },
  { price: 29, usdtPrice: 30, featured: true },
  { price: 59, usdtPrice: 60, featured: false },
] as const;

export function formatPrice(price: number, locale: Locale) {
  return new Intl.NumberFormat(intlLocales[locale], {
    style: "currency",
    currency: "EUR",
    currencyDisplay: "symbol",
    maximumFractionDigits: 0,
  }).format(price);
}

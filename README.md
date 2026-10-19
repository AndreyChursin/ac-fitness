# Train With Andrey

Полная документация проекта: [`.docs/index.md`](.docs/index.md).
Инструкции для агентов: [`AGENTS.md`](AGENTS.md).

Next.js App Router landing page with Russian and English localization.

## Development

```sh
pnpm install
pnpm dev
```

- `/ru` — Russian version.
- `/en` — English version.
- `/` — temporary redirect to the default locale (`ru`), preserving query parameters.
- Unsupported locales (for example `/de`) return 404.

## Localization

`src/app/[locale]/page.tsx` contains the shared markup and
`src/app/[locale]/layout.tsx` sets the HTML language and localized metadata.
Translations live in `src/i18n/messages/{ru,en}.json`; keep their keys and array
lengths identical. Include navigation labels, accessibility labels, and SEO text.
`src/i18n/config.ts` defines supported locales and the default language.

The language switcher preserves the page path, query parameters, and section
anchor. Explicit language URLs always take precedence; browser language detection
is intentionally not enabled. The default applies only to `/`.

Prices are numeric data in `src/i18n/plans.ts`. `Intl.NumberFormat` formats them
for the selected locale in EUR (€). Fixed USDT alternatives are 15, 30, and 60 USDT for the three plans respectively; they are not live exchange-rate conversions. Use `Intl.DateTimeFormat` with
`intlLocales` from the locale config when adding dates.

To add a language, register it in the locale config, add a dictionary and loader,
update the translation check, and add the corresponding Open Graph locale.

## Environment

- `SITE_URL` — public origin, such as `https://your-domain.com`, for absolute
  canonical, hreflang, and Open Graph URLs. On Vercel the production deployment
  domain is used automatically if this is unset; locally it defaults to
  `http://localhost:3000`. Set this before building for a custom production domain.
- `NEXT_PUBLIC_CONTACT_URL` — contact URL (Telegram or email). If unset, the
  existing `https://t.me/` placeholder and a setup note are displayed.

## Validation

```sh
pnpm check:i18n
pnpm lint
pnpm exec next typegen
pnpm exec tsc --noEmit
pnpm build
```

The build runs the translation check first. It rejects missing or unexpected
keys, incomplete lists, and empty translations. TypeScript also checks both
dictionaries against the shared message type.

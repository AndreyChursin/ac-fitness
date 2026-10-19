# Разработка

[Содержание](index.md)

## Окружение

В существующем GitHub workflow используется Node.js 22. Отдельный `engines` или
файл фиксации Node в репозитории отсутствует. Для воспроизводимого окружения
используй Node.js 22 и pnpm 10.32.1 из `packageManager` в `package.json`.

```sh
node --version
pnpm --version
pnpm install --frozen-lockfile
pnpm dev
```

Открой `http://localhost:3000/ru` или `/en`. Если pnpm отсутствует, установи
соответствующую версию через принятый в твоём окружении менеджер пакетов.

## Команды

| Команда | Действие |
| --- | --- |
| `pnpm dev` | Next.js dev server |
| `pnpm lint` | ESLint по проекту |
| `pnpm check:i18n` | Проверка словарей EN/RU |
| `pnpm exec next typegen` | Генерация PageProps/LayoutProps и типов маршрутов |
| `pnpm exec tsc --noEmit` | Проверка TypeScript |
| `pnpm build` | Проверка переводов и production-сборка Next.js |
| `pnpm start` | Запуск существующей production-сборки |
| `pnpm start --port 3107` | Production-сервер на другом порту |
| `git diff --check` | Проверка whitespace в diff |

Отдельных npm-скриптов `test`, `format` и `typecheck` нет. Prettier не закреплён
в зависимостях и постоянной конфигурации форматтера сейчас нет.

## Конфигурация

- `.editorconfig`: UTF-8, LF, два пробела, финальная новая строка; конечные пробелы
  удаляются, кроме Markdown, где они могут обозначать перенос строки.
- `tsconfig.json`: strict, noEmit, bundler resolution и alias `@/*` → `src/*`.
- `eslint.config.mjs`: Next core-web-vitals и TypeScript presets; генерируемые
  каталоги `.next`, `out`, `build` и `next-env.d.ts` исключены.
- `next.config.ts`: Cache Components, Partial Prefetching, React Compiler и
  Turbopack CSS-loader `@tailwindcss/turbopack`.
- `pnpm-workspace.yaml`: `sharp` и `unrs-resolver` перечислены в
  `ignoredBuiltDependencies`. Других workspace-пакетов не определено.

Не переноси привычные API Next.js из другой версии без проверки локальных
руководств в `node_modules/next/dist/docs/`.

## Типовые изменения

| Требуется | Где менять |
| --- | --- |
| Текст или доступное имя | Оба файла `src/i18n/messages/*.json` |
| Структура секции | `src/app/[locale]/page.tsx` |
| Цена или featured-карточка | `src/i18n/plans.ts` |
| Название, состав и период формата | `services.cards` обоих словарей |
| Язык по умолчанию | `src/i18n/config.ts` |
| CSS и адаптивность | `src/app/globals.css` |
| Шапка | `src/components/SiteHeader.tsx` |
| Переключение языка | `src/components/LanguageSwitcher.tsx` |
| Canonical и Open Graph | `[locale]/layout.tsx` и окружение |
| Контакт | `NEXT_PUBLIC_CONTACT_URL` перед сборкой |

При добавлении зависимостей обновляй lockfile обычной установкой pnpm. Не редактируй
его вручную и не запускай `--no-frozen-lockfile` для маскировки непонятного рассогласования.

## Работа с изменениями

Перед редактированием смотри `git status` и существующий diff. Сохраняй сторонние
незакоммиченные изменения. После изменения поведения актуализируй `.docs/` и
выполни проверки по [verification.md](verification.md).

`.next/`, `node_modules/`, `.env*`, `next-env.d.ts` и `*.tsbuildinfo` исключены
из Git. Не добавляй сгенерированные файлы ради прохождения проверки типов.

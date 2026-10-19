# Архитектура

[Содержание](index.md)

## Структура

```text
ac-fitnes/
├── AGENTS.md                       # Инструкции для агентов
├── README.md                       # Краткий запуск и ссылки
├── .docs/                          # Подробная документация
├── .editorconfig                   # Базовые правила редактора
├── .github/workflows/
│   └── update-analytics-lockfile.yml
├── next.config.ts                  # Возможности Next.js и обработка CSS
├── eslint.config.mjs
├── tsconfig.json                   # Strict, alias @/* → src/*
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml             # ignoredBuiltDependencies
├── public/                         # Статические SVG из стартового шаблона
├── scripts/
│   └── check-translations.mjs       # Проверка структуры и заполненности словарей
└── src/
    ├── proxy.ts                    # Перенаправление только корня /
    ├── app/
    │   ├── favicon.ico
    │   ├── globals.css
    │   └── [locale]/
    │       ├── layout.tsx          # Root layout, metadata, статические локали
    │       └── page.tsx            # Общая страница
    ├── components/
    │   ├── SiteHeader.tsx          # Серверная шапка
    │   └── LanguageSwitcher.tsx    # Клиентский переключатель
    └── i18n/
        ├── config.ts              # Locale, defaultLocale, имена и форматы
        ├── dictionaries.ts        # Тип Messages и загрузчики JSON
        ├── plans.ts               # Числовые цены и Intl.NumberFormat
        └── messages/
            ├── ru.json
            └── en.json
```

## Маршруты

Next.js получает маршруты из файловой структуры App Router. Отдельного списка
роутов в конфигурации нет. `[locale]` — динамический сегмент URL.

| Запрос | Обработчик | Результат |
| --- | --- | --- |
| `/` | `src/proxy.ts` | Временный redirect 307 на `/ru` |
| `/?source=test` | `src/proxy.ts` | Redirect на `/ru?source=test` |
| `/ru` | `[locale]/page.tsx` | Русская страница |
| `/en` | `[locale]/page.tsx` | Английская страница |
| `/de` | Проверка `isLocale` | 404 |
| `/ru/missing` | Нет соответствующего page | 404 |
| `/favicon.ico` | Файл App Router | Иконка сайта |

Proxy имеет matcher `['/']` и не добавляет языковой префикс к произвольным путям.
`defaultLocale` определяет только перенаправление с корня и SEO `x-default`.
Порядок локалей не задаёт приоритет обработки страниц.

## Root layout и рендеринг

`[locale]/layout.tsx` — общий корневой layout. Он выводит `<html lang={locale}>`,
`<body>`, содержимое страницы и Analytics. Общего `src/app/layout.tsx` сейчас нет:
корневой layout допустимо располагать под динамическим сегментом.

`generateStaticParams` перечисляет обе поддерживаемые локали. При сборке `/ru`
и `/en` предварительно рендерятся. Сначала layout и страница ожидают `params`,
проверяют локаль, затем загружают JSON через `getDictionary`. Неподдерживаемое
значение вызывает `notFound()`.

`generateMetadata` в layout получает переведённые title/description и строит
canonical, языковые альтернативы и Open Graph. См. [локализацию](localization.md).

## Граница Server / Client

Страница, layout и `SiteHeader` — Server Components. Загрузка словарей и форматирование
цен происходят на сервере. Весь словарь не передаётся в клиентский переключатель:
он получает локаль и небольшой объект подписей `header`.

`LanguageSwitcher` имеет `"use client"`, использует `usePathname` и читает
`window.location` только в обработчике клика. Он рендерит обычные ссылки; при
выборе языка выполняется полная навигация браузера. Это не переключение текстов
через глобальное клиентское состояние.

## Правила расширения

- Общие страницы добавляй под `[locale]`, сохраняя существующий root layout.
- Для новой вложенной страницы отдельно продумай её canonical и hreflang:
  текущие метаданные layout указывают на главные страницы локалей.
- Не возвращай группы `(ru)` / `(en)` с копиями разметки.
- Не создавай страницу вне локализованного дерева без подходящего root layout.
- Поддерживай проверку локали и не обращайся к загрузчику по непроверенной строке.

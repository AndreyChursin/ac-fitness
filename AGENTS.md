# AGENTS.md — Train With Andrey

## Проект

`ac-fitnes` — двуязычный лендинг личного фитнес-наставничества Train With
Andrey. Стек: Next.js App Router, React, TypeScript, Tailwind CSS и Vercel
Analytics. Backend, база данных, авторизация, оплата и CMS в репозитории отсутствуют.

## Документация

Полная документация расположена в [`.docs/`](.docs/index.md) относительно корня
репозитория; это не каталог `/.docs` в корне файловой системы.

| Задача | Документ |
| --- | --- |
| Назначение, возможности и ограничения | [Описание проекта](.docs/project.md) |
| Файлы, маршруты, Server/Client Components | [Архитектура](.docs/architecture.md) |
| Тексты, словари, языки, цены и SEO | [Локализация](.docs/localization.md) |
| Стили, адаптивность и доступность | [Интерфейс](.docs/interface.md) |
| Установка, команды и правила изменений | [Разработка](.docs/development.md) |
| Автоматические и ручные проверки | [Проверки](.docs/verification.md) |
| Переменные окружения, сборка и CI | [Деплой](.docs/deployment.md) |
| Типовые проблемы | [Устранение ошибок](.docs/troubleshooting.md) |

Перед изменением подсистемы прочитай соответствующий документ и её текущий код.
При расхождении документации и реализации проверь реализацию и обнови документацию
в рамках изменения. Не описывай запланированную возможность как работающую.

## Правила работы

- Используй pnpm; версия зафиксирована в `package.json`. При изменении зависимостей
  обновляй `pnpm-lock.yaml`.
- Сохраняй одну общую страницу и один root layout в `src/app/[locale]/`.
  Не создавай копии страниц для языков и конкурирующую `src/app/page.tsx`.
- Пользовательские тексты, метаданные и подписи доступности добавляй в оба словаря
  `src/i18n/messages/`. Сохраняй одинаковую структуру ключей и массивов.
- Согласовывай порядок `services.cards` с массивом `plans` в `src/i18n/plans.ts`.
  Цены храни числами и форматируй через `Intl`.
- Проверяй локаль через `isLocale` до загрузки словаря. Неподдерживаемые языки
  должны возвращать 404. Язык URL является явным выбором пользователя.
- Оставляй страницы и layout серверными. Клиентский код добавляй только для
  браузерного взаимодействия; сейчас он выделен в `LanguageSwitcher`.
- Сохраняй якоря секций, поведение переключателя языка и адаптивную шапку.
  SVG-иконки и оформление уже реализованы локально.
- Следуй `.editorconfig`: UTF-8, LF, два пробела, завершающая новая строка.
  Не переформатируй несвязанные файлы и не затирай пользовательские изменения.
- Не коммить `.env*`, `.next/`, `node_modules/` и сгенерированные файлы типов.
- После изменения поведения обновляй соответствующие файлы `.docs/`.

## Проверка изменений

Для изменений приложения:

```sh
pnpm check:i18n
pnpm lint
pnpm exec next typegen
pnpm exec tsc --noEmit
pnpm build
```

После изменения маршрутов или локализации проверь `/`, `/ru`, `/en`, `/de`,
canonical/hreflang и переключение RU → EN → RU с query и hash.
Подробности и границы проверок: [verification.md](.docs/verification.md).
Для изменений только документации проверь ссылки, пути, команды и
`git diff --check`; сборка приложения не обязательна.

В отчёте перечисли фактические изменения, выполненные проверки и ограничения.
В конце правок предоставь готовый текст коммита. Коммит и публикацию выполняй
только по запросу пользователя.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

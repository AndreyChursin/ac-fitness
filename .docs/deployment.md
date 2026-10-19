# Окружение, деплой и CI

[Содержание](index.md)

## Переменные окружения

| Переменная | Назначение | Если отсутствует |
| --- | --- | --- |
| `SITE_URL` | Полный публичный origin для metadataBase | Используется Vercel-домен, затем localhost |
| `VERCEL_PROJECT_PRODUCTION_URL` | Production hostname, который предоставляет Vercel | `http://localhost:3000`, если нет SITE_URL |
| `NEXT_PUBLIC_CONTACT_URL` | URL контакта автора | `https://t.me/` и сообщение о настройке |

Пример локального `.env.local`:

```dotenv
SITE_URL=https://your-domain.com
NEXT_PUBLIC_CONTACT_URL=https://t.me/your_username
```

Для email допустим `mailto:you@example.com`. Пример содержит заглушки; подставь
реальные значения. `SITE_URL` должен быть абсолютным URL со схемой `https://`
и без пути языковой страницы. Для `VERCEL_PROJECT_PRODUCTION_URL` код сам добавляет
`https://`, поэтому ожидается hostname без схемы.

`NEXT_PUBLIC_` не подходит для секретов. Все эти настройки определяют публичные
ссылки. `.env*` игнорируются Git. Отдельного `.env.example` сейчас нет.

## Production-сборка

```sh
pnpm install --frozen-lockfile
pnpm lint
pnpm build
pnpm start
```

Задай окружение до сборки: страницы и их метаданные предварительно рендерятся,
а публичные переменные могут встраиваться при build. После изменения origin или
контакта пересобери и перезапусти приложение.

Для Vercel используй корень репозитория, preset Next.js, pnpm и build command
`pnpm build`. Для самостоятельного хостинга используется Next.js server через
`pnpm start`; `output: 'export'` и standalone-output в конфигурации не заданы.
Наличие статически сгенерированных страниц не означает, что каталог можно
публиковать как простой HTML-export: в приложении используется Proxy.

## Перед публикацией

- Укажи реальный production-origin и контакт.
- Проверь обе локали, редирект корня и 404.
- Проверь canonical/hreflang в production-HTML; они не должны вести на localhost.
- Проверь целевой контакт из шапки и нижнего CTA.
- Проверь наличие Analytics и его работу в целевом окружении; сам компонент
  в layout ещё не подтверждает поступление событий в dashboard.
- Проверь, что в `src/app/[locale]/layout.tsx` подключён `<SpeedInsights />`,
  а в настройках Vercel-проекта включён Speed Insights. После production-деплоя
  открой страницы `/ru` и `/en`, выполни несколько переходов и проверь
  поступление показателей в **Vercel → Speed Insights**. Данные могут появиться
  с задержкой; наличие компонента само по себе не подтверждает сбор метрик.
- Перед деплоем выполни `pnpm install --frozen-lockfile`: `package.json` и
  `pnpm-lock.yaml` должны быть согласованы, включая `@vercel/speed-insights`.

Приложение не публикуется автоматически при локальной сборке. Конфигурация
конкретного Vercel-проекта и домена не хранится в этом репозитории.

## Workflow для Speed Insights

`.github/workflows/speed-insights-lockfile.yml` обновляет `pnpm-lock.yaml`
в ветке `feature/vercel-speed-insights` при изменении самого workflow или
ручном запуске. Он не заменяет проверку `pnpm install --frozen-lockfile`
и не гарантирует успешную установку для коммита, в котором lockfile ещё не
обновлён. В PR необходимо включать уже сгенерированный lockfile.

## Существующий GitHub workflow

`.github/workflows/update-analytics-lockfile.yml` предназначен для обновления
lockfile, а не для общего деплоя:

- Запускается вручную через `workflow_dispatch` или при изменении самого workflow
  в ветке `feature/vercel-analytics`.
- Использует Ubuntu, Node.js 22 и pnpm 10.32.1.
- Выполняет `pnpm install --no-frozen-lockfile`, lint и build.
- Если `pnpm-lock.yaml` изменился, делает commit от github-actions bot и push.
- Имеет `contents: write` и сохранённые credentials checkout.

Это не универсальная CI-проверка всех pull requests: триггер `pull_request`
отсутствует. Запуск вручную может записать commit в выбранную ветку. Не запускай
этот workflow как безусловную read-only проверку.

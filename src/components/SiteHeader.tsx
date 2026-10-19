import Link from "next/link";

type Locale = "ru" | "en";

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c-2.5 2.4-3.8 5.4-3.8 9s1.3 6.6 3.8 9M12 3c2.5 2.4 3.8 5.4 3.8 9s-1.3 6.6-3.8 9" />
  </svg>
);

const ChatIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 11.5a8 8 0 0 1-8 8 9 9 0 0 1-3.5-.7L4 20l1.2-4.5A8 8 0 1 1 20 11.5Z" />
    <path d="M8.5 11.5h7" />
  </svg>
);

export function SiteHeader({ locale, contactUrl }: { locale: Locale; contactUrl: string }) {
  const english = locale === "en";
  return (
    <header className="site-header">
      <Link className="logo" href={english ? "/en#top" : "/#top"} aria-label="Train With Andrey — home">
        TRAIN<span>WITH</span>ANDREY.
      </Link>
      <nav className="site-nav" aria-label={english ? "Page sections" : "Разделы сайта"}>
        <a href="#approach">{english ? "Approach" : "Подход"}</a>
        <a href="#services">{english ? "Plans" : "Форматы"}</a>
        <a href="#about">{english ? "About me" : "Обо мне"}</a>
        <a href="#faq">{english ? "Questions" : "Вопросы"}</a>
      </nav>
      <div className="header-actions">
        <details className="language-menu">
          <summary aria-label={english ? "Choose language" : "Выбрать язык"} title={english ? "Language" : "Язык"}>
            <GlobeIcon /><span className="language-current">{english ? "EN" : "RU"}</span>
            <svg className="language-chevron" viewBox="0 0 16 16" width="12" height="12" aria-hidden="true"><path d="m3 6 5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </summary>
          <div className="language-options">
            <Link href="/" hrefLang="ru" aria-current={!english ? "page" : undefined}>Русский</Link>
            <Link href="/en" hrefLang="en" aria-current={english ? "page" : undefined}>English</Link>
          </div>
        </details>
        <a className="btn outline header-contact" href={contactUrl} target="_blank" rel="noopener noreferrer" aria-label={english ? "Contact via Telegram" : "Связаться через Telegram"}>
          <ChatIcon />
          <span>{english ? "Get in touch" : "Связаться"}</span>
        </a>
      </div>
    </header>
  );
}

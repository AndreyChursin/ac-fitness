import Link from "next/link";

import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/dictionaries";
import { LanguageSwitcher } from "./LanguageSwitcher";

const ChatIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="22"
    height="22"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 11.5a8 8 0 0 1-8 8 9 9 0 0 1-3.5-.7L4 20l1.2-4.5A8 8 0 1 1 20 11.5Z" />
    <path d="M8.5 11.5h7" />
  </svg>
);

export function SiteHeader({
  locale,
  contactUrl,
  messages,
}: {
  locale: Locale;
  contactUrl: string;
  messages: Messages;
}) {
  return (
    <header className="site-header">
      <Link
        className="logo"
        href={`/${locale}#top`}
        aria-label={messages.header.home}
      >
        TRAIN<span>WITH</span>ANDREY
      </Link>
      <nav className="site-nav" aria-label={messages.header.sections}>
        <a href="#approach">{messages.nav[0]}</a>
        <a href="#services">{messages.nav[1]}</a>
        <a href="#about">{messages.nav[2]}</a>
        <a href="#faq">{messages.nav[3]}</a>
      </nav>
      <div className="header-actions">
        <LanguageSwitcher locale={locale} labels={messages.header} />
        <a
          className="btn outline header-contact"
          href={contactUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={messages.header.contact}
        >
          <ChatIcon />
          <span>{messages.nav[4]}</span>
        </a>
      </div>
    </header>
  );
}

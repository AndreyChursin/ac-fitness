"use client";

import styles from "../styles/Site.module.css";

import { usePathname } from "next/navigation";
import {
  languageNames,
  locales,
  localizePath,
  type Locale,
} from "@/i18n/config";
import type { Messages } from "@/i18n/dictionaries";

const GlobeIcon = () => (
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
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c-2.5 2.4-3.8 5.4-3.8 9s1.3 6.6 3.8 9M12 3c2.5 2.4 3.8 5.4 3.8 9s-1.3 6.6-3.8 9" />
  </svg>
);

export function LanguageSwitcher({
  locale,
  labels,
}: {
  locale: Locale;
  labels: Messages["header"];
}) {
  const pathname = usePathname();
  return (
    <details className="language-menu">
      <summary aria-label={labels.chooseLanguage} title={labels.language}>
        <GlobeIcon />
        <span className="language-current">{locale.toUpperCase()}</span>
        <svg
          className="language-chevron"
          viewBox="0 0 16 16"
          width="12"
          height="12"
          aria-hidden="true"
        >
          <path
            d="m3 6 5 5 5-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </summary>
      <div className="language-options">
        {locales.map((language) => (
          <a
            key={language}
            href={localizePath(pathname, language)}
            hrefLang={language}
            lang={language}
            aria-current={locale === language ? "page" : undefined}
            onClick={(event) => {
              event.currentTarget.href = `${localizePath(pathname, language)}${window.location.search}${window.location.hash}`;
            }}
          >
            {languageNames[language]}
          </a>
        ))}
      </div>
    </details>
  );
}

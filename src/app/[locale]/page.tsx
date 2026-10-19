import styles from "../../styles/Site.module.css";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { formatPrice, plans } from "@/i18n/plans";

const contactUrl = process.env.NEXT_PUBLIC_CONTACT_URL || "https://t.me/";

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const lang = await getDictionary(locale);
  return (
    <div className={styles.wrap}>
      <SiteHeader locale={locale} contactUrl={contactUrl} messages={lang} />
      <main id="top">
        <div className={styles.hero}>
          <div>
            <div className={styles.eyebrow}>{lang.eyebrow}</div>
            <h1 className={styles.headingOne}>
              {lang.hero[0]}
              <br />
              {lang.hero[1]}
              <br />
              <em>{lang.hero[2]}</em>
            </h1>
            <p className={styles.lead}>{lang.lead}</p>
            <div className={styles.actions}>
              <a className={styles.btn} href="#services">
                {lang.actions[0]}
              </a>
              <a className={styles.btn + " " + styles.outline} href="#about">
                {lang.actions[1]}
              </a>
            </div>
          </div>
          <div className={styles.heroArt} role="img" aria-label={lang.art.label}>
            <div className={styles.artLabel}>
              {lang.art.lines[0]}
              <br />
              <span>{lang.art.lines[1]}</span>
              <br />
              {lang.art.lines[2]}
            </div>
          </div>
        </div>
        <section className={styles.section} id="approach">
          <div className={styles.eyebrow}>{lang.approach.eyebrow}</div>
          <h2 className={styles.headingTwo}>
            {lang.approach.title[0]}
            <br />
            {lang.approach.title[1]}
          </h2>
          <p className={styles.sub}>{lang.approach.sub}</p>
          <div className={styles.grid}>
            {lang.approach.cards.map(([title, body], i) => (
              <article className={styles.card} key={title}>
                <div className={styles.number}>0{i + 1}</div>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>
        <section className={styles.section} id="services">
          <div className={styles.eyebrow}>{lang.services.eyebrow}</div>
          <h2 className={styles.headingTwo}>{lang.services.title}</h2>
          <p className={styles.sub}>{lang.services.sub}</p>
          <div className={styles.grid}>
            {lang.services.cards.map((plan, i) => (
              <article
                key={plan.name}
                className={`${styles.card}${plans[i].featured ? ` ${styles.featured}` : ""}`}
              >
                <div className={styles.number}>{plan.tag}</div>
                <h3>{plan.name}</h3>
                <div className={styles.price}>
                  {formatPrice(plans[i].price, locale)}{" "}
                  <small>{plan.unit}</small>
                </div>
                <ul>
                  {plan.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a
                  className={`${styles.btn}${plans[i].featured ? "" : ` ${styles.outline}`}`}
                  href="#contact"
                >
                  {plan.cta}
                </a>
              </article>
            ))}
          </div>
          <p className={styles.note}>{lang.services.note}</p>
        </section>
        <section className={styles.section} id="about">
          <div className={styles.about}>
            <div>
              <div className={styles.eyebrow}>{lang.about.eyebrow}</div>
              <h2 className={styles.headingTwo}>{lang.about.title}</h2>
              {lang.about.paragraphs.map((p) => (
                <p className={styles.sub} key={p}>
                  {p}
                </p>
              ))}
            </div>
            <div className={styles.quote}>{lang.about.quote}</div>
          </div>
        </section>
        <section className={`${styles.section} ${styles.faq}`} id="faq">
          <div className={styles.eyebrow}>{lang.faq.eyebrow}</div>
          <h2 className={styles.headingTwo}>{lang.faq.title}</h2>
          {lang.faq.items.map(([q, a]) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </section>
        <section className={styles.section} id="contact">
          <div className={styles.cta}>
            <div className={styles.eyebrow} style={{ color: "#39522b" }}>
              {lang.contact.eyebrow}
            </div>
            <h2 className={styles.headingTwo}>{lang.contact.title}</h2>
            <p>{lang.contact.body}</p>
            <a className={styles.btn} href={contactUrl}>
              {lang.contact.cta}
            </a>
            {!process.env.NEXT_PUBLIC_CONTACT_URL && (
              <p style={{ fontSize: 12, marginTop: 20 }}>
                {lang.contact.placeholder}
              </p>
            )}
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <span>© 2026 Train With Andrey</span>
        <span>{lang.footer}</span>
      </footer>
    </div>
  );
}

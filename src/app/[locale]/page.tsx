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
    <div className="wrap">
      <SiteHeader locale={locale} contactUrl={contactUrl} messages={lang} />
      <main id="top">
        <div className="hero">
          <div>
            <div className="eyebrow">{lang.eyebrow}</div>
            <h1>
              {lang.hero[0]}
              <br />
              {lang.hero[1]}
              <br />
              <em>{lang.hero[2]}</em>
            </h1>
            <p className="lead">{lang.lead}</p>
            <div className="actions">
              <a className="btn" href="#services">
                {lang.actions[0]}
              </a>
              <a className="btn outline" href="#about">
                {lang.actions[1]}
              </a>
            </div>
          </div>
          <div className="hero-art" role="img" aria-label={lang.art.label}>
            <div className="art-label">
              {lang.art.lines[0]}
              <br />
              <span>{lang.art.lines[1]}</span>
              <br />
              {lang.art.lines[2]}
            </div>
          </div>
        </div>
        <section id="approach">
          <div className="eyebrow">{lang.approach.eyebrow}</div>
          <h2>
            {lang.approach.title[0]}
            <br />
            {lang.approach.title[1]}
          </h2>
          <p className="sub">{lang.approach.sub}</p>
          <div className="grid">
            {lang.approach.cards.map(([title, body], i) => (
              <article className="card" key={title}>
                <div className="number">0{i + 1}</div>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>
        <section id="services">
          <div className="eyebrow">{lang.services.eyebrow}</div>
          <h2>{lang.services.title}</h2>
          <p className="sub">{lang.services.sub}</p>
          <div className="grid">
            {lang.services.cards.map((plan, i) => (
              <article
                key={plan.name}
                className={`card${plans[i].featured ? " featured" : ""}`}
              >
                <div className="number">{plan.tag}</div>
                <h3>{plan.name}</h3>
                <div className="price">
                  {formatPrice(plans[i].price, locale)}{" "}
                  <small>{plan.unit}</small>
                </div>
                <ul>
                  {plan.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a
                  className={`btn${plans[i].featured ? "" : " outline"}`}
                  href="#contact"
                >
                  {plan.cta}
                </a>
              </article>
            ))}
          </div>
          <p className="note">{lang.services.note}</p>
        </section>
        <section id="about">
          <div className="about">
            <div>
              <div className="eyebrow">{lang.about.eyebrow}</div>
              <h2>{lang.about.title}</h2>
              {lang.about.paragraphs.map((p) => (
                <p className="sub" key={p}>
                  {p}
                </p>
              ))}
            </div>
            <div className="quote">{lang.about.quote}</div>
          </div>
        </section>
        <section className="faq" id="faq">
          <div className="eyebrow">{lang.faq.eyebrow}</div>
          <h2>{lang.faq.title}</h2>
          {lang.faq.items.map(([q, a]) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </section>
        <section id="contact">
          <div className="cta">
            <div className="eyebrow" style={{ color: "#39522b" }}>
              {lang.contact.eyebrow}
            </div>
            <h2>{lang.contact.title}</h2>
            <p>{lang.contact.body}</p>
            <a className="btn" href={contactUrl}>
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
      <footer>
        <span>© 2026 Train With Andrey</span>
        <span>{lang.footer}</span>
      </footer>
    </div>
  );
}

import { SiteHeader } from "../../../components/SiteHeader";

const copy = {
  "nav": [
    "Approach",
    "Plans",
    "About me",
    "Questions",
    "Get in touch"
  ],
  "eyebrow": "Fitness mentoring · Belgrade / online",
  "hero": [
    "Stronger.",
    "Calmer.",
    "At your own pace."
  ],
  "lead": "No exhausting challenges or promises of a perfect body. I share what I've learned about training, nutrition fundamentals, and building habits that last.",
  "actions": [
    "Explore plans →",
    "My approach"
  ],
  "approach": {
    "eyebrow": "01 / Philosophy",
    "title": [
      "Not perfection.",
      "Consistency."
    ],
    "sub": "Training and nutrition shouldn't become a second job. My goal is to help you understand the basics, find a sustainable rhythm, and stick with it beyond the first two weeks.",
    "cards": [
      [
        "Habits",
        "Realistic goals, consistency, and working through the obstacles that hold you back."
      ],
      [
        "Mindful training",
        "Understanding general principles of training load, recovery, and tracking progress."
      ],
      [
        "Balanced nutrition",
        "Talking about calories, protein, and eating habits without rigid restrictions or therapeutic diets."
      ]
    ]
  },
  "services": {
    "eyebrow": "02 / Plans",
    "title": "Simple and affordable.",
    "sub": "A small fee for my time, attention, and personal experience. No expensive subscriptions or pushy sales.",
    "cards": [
      {
        "tag": "ONE TIME",
        "name": "A useful conversation",
        "price": "800 RSD",
        "unit": "/ 30 min",
        "items": [
          "Discuss goals and habits",
          "Answers to your questions",
          "General guidance and resources"
        ],
        "cta": "Let's talk"
      },
      {
        "tag": "START HERE",
        "name": "Basic Mentor",
        "price": "1,500 RSD",
        "unit": "/ month",
        "items": [
          "Weekly goal check-in",
          "Support by message",
          "Habit tracking"
        ],
        "cta": "Choose Basic →"
      },
      {
        "tag": "MORE SUPPORT",
        "name": "Personal Mentor",
        "price": "3,000 RSD",
        "unit": "/ month",
        "items": [
          "Everything in Basic",
          "Two 30-minute calls",
          "Review of progress and challenges"
        ],
        "cta": "Choose Personal"
      }
    ],
    "note": "This is educational mentoring based on personal experience, not medical care or professional personal training. Plans do not include individualized exercise prescriptions or therapeutic diets."
  },
  "about": {
    "eyebrow": "03 / About me",
    "title": "Hi, I'm Andrey.",
    "paragraphs": [
      "I'm a software developer, and training has become part of my everyday life. I like a systematic approach: observe, measure progress, learn, and gradually improve habits.",
      "I don't claim to be a certified personal trainer or dietitian. I share what I've learned and tried myself, and help others stay consistent."
    ],
    "quote": "“A good system works even when motivation doesn't.”"
  },
  "faq": {
    "eyebrow": "04 / FAQ",
    "title": "Frequently asked questions",
    "items": [
      [
        "Is mentoring suitable for beginners?",
        "Yes, if you're looking for general knowledge, support, and help with habits. For personalized exercise technique or training loads, consult a qualified trainer."
      ],
      [
        "Do you create personalized workout plans or diets?",
        "No. We can discuss general principles of training and nutrition, but I don't prescribe individualized training loads, therapeutic diets, or medical advice."
      ],
      [
        "Can we work together online?",
        "Yes. We can communicate through messages and calls wherever you live."
      ],
      [
        "What happens during the first meeting?",
        "You tell me about your goals, we discuss expectations, and decide whether this format would be useful for you."
      ]
    ]
  },
  "contact": {
    "eyebrow": "05 / Ready to start?",
    "title": "You don't need a perfect Monday. You can start today.",
    "body": "Tell me what you'd like to achieve and what's getting in your way. We'll discuss whether this approach fits.",
    "cta": "Contact details on GitHub →",
    "placeholder": "For direct messages, add a contact URL before launch."
  },
  "footer": "Personal experience · No promises of quick results"
};

const contactUrl = process.env.NEXT_PUBLIC_CONTACT_URL || "https://t.me/";

export default function EnglishHome() {
  return (
    <div className="wrap">
      <SiteHeader locale="en" contactUrl={contactUrl} />
      <main id="top">
        <div className="hero">
          <div>
            <div className="eyebrow">{copy.eyebrow}</div>
            <h1>{copy.hero[0]}<br />{copy.hero[1]}<br /><em>{copy.hero[2]}</em></h1>
            <p className="lead">{copy.lead}</p>
            <div className="actions">
              <a className="btn" href="#services">{copy.actions[0]}</a>
              <a className="btn outline" href="#about">{copy.actions[1]}</a>
            </div>
          </div>
          <div className="hero-art" role="img" aria-label="Abstract fitness-inspired artwork">
            <div className="art-label">CONSISTENCY<br /><span>OVER</span><br />PERFECTION.</div>
          </div>
        </div>
        <section id="approach">
          <div className="eyebrow">{copy.approach.eyebrow}</div>
          <h2>{copy.approach.title[0]}<br />{copy.approach.title[1]}</h2>
          <p className="sub">{copy.approach.sub}</p>
          <div className="grid">{copy.approach.cards.map(([title, body], i) => (
            <article className="card" key={title}><div className="number">0{i+1}</div><h3>{title}</h3><p>{body}</p></article>
          ))}</div>
        </section>
        <section id="services">
          <div className="eyebrow">{copy.services.eyebrow}</div>
          <h2>{copy.services.title}</h2>
          <p className="sub">{copy.services.sub}</p>
          <div className="grid">{copy.services.cards.map((plan,i) => (
            <article key={plan.name} className={`card${i === 1 ? " featured" : ""}`}>
              <div className="number">{plan.tag}</div>
              <h3>{plan.name}</h3>
              <div className="price">{plan.price} <small>{plan.unit}</small></div>
              <ul>{plan.items.map(item => <li key={item}>{item}</li>)}</ul>
              <a className={`btn${i === 1 ? "" : " outline"}`} href="#contact">{plan.cta}</a>
            </article>
          ))}</div>
          <p className="note">{copy.services.note}</p>
        </section>
        <section id="about">
          <div className="about">
            <div>
              <div className="eyebrow">{copy.about.eyebrow}</div>
              <h2>{copy.about.title}</h2>
              {copy.about.paragraphs.map(p => <p className="sub" key={p}>{p}</p>)}
            </div>
            <div className="quote">{copy.about.quote}</div>
          </div>
        </section>
        <section id="faq" className="faq">
          <div className="eyebrow">{copy.faq.eyebrow}</div>
          <h2>{copy.faq.title}</h2>
          {copy.faq.items.map(([q,a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
        </section>
        <section id="contact">
          <div className="cta">
            <div className="eyebrow" style={{color:"#39522b"}}>{copy.contact.eyebrow}</div>
            <h2>{copy.contact.title}</h2>
            <p>{copy.contact.body}</p>
            <a className="btn" href={contactUrl}>{copy.contact.cta}</a>
            <p style={{fontSize:12,marginTop:20}}>{copy.contact.placeholder}</p>
          </div>
        </section>
      </main>
      <footer><span>© 2026 Train With Andrey</span><span>{copy.footer}</span></footer>
    </div>
  );
}

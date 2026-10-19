import Link from "next/link";

export default function Home() {
  return (
    <div className="wrap">
      <header>
        <a className="logo" href="#top">
          TRAIN<span>WITH</span>ANDREY.
        </a>
        <nav>
          <a href="#approach">Подход</a>
          <a href="#services">Форматы</a>
          <a href="#about">Обо мне</a>
          <a href="#faq">Вопросы</a>
        </nav>
        <div className="locale-switch"><span aria-current="page">RU</span><Link href="/en">EN</Link></div>
        <a className="btn outline" href="#contact">
          Связаться
        </a>
      </header>
      <main id="top">
        <div className="hero">
          <div>
            <div className="eyebrow">Fitness mentoring · Белград / онлайн</div>
            <h1>
              Сильнее.
              <br />
              Спокойнее.
              <br />
              <em>В своём темпе.</em>
            </h1>
            <p className="lead">
              Без марафонов на износ и обещаний идеального тела. Делюсь опытом
              тренировок, принципами питания и помогаю выстроить привычки,
              которые останутся надолго.
            </p>
            <div className="actions">
              <a className="btn" href="#services">
                Выбрать формат →
              </a>
              <a className="btn outline" href="#about">
                Мой подход
              </a>
            </div>
          </div>
          <div
            className="hero-art"
            role="img"
            aria-label="Абстрактная графика в спортивной эстетике"
          >
            <div className="art-label">
              CONSISTENCY
              <br />
              <span>OVER</span>
              <br />
              PERFECTION.
            </div>
          </div>
        </div>
        <section id="approach">
          <div className="eyebrow">01 / Философия</div>
          <h2>
            Не идеальность.
            <br />А последовательность.
          </h2>
          <p className="sub">
            Тренировки и питание не должны превращаться во вторую работу. Моя
            цель — помочь разобраться в базовых принципах, найти устойчивый ритм
            и не бросить всё через две недели.
          </p>
          <div className="grid">
            <article className="card">
              <div className="number">01</div>
              <h3>Привычки</h3>
              <p>
                Реалистичные цели, регулярность и работа с тем, что мешает
                двигаться дальше.
              </p>
            </article>
            <article className="card">
              <div className="number">02</div>
              <h3>Осознанные тренировки</h3>
              <p>
                Разбираем общие принципы нагрузки, восстановления и отслеживания
                прогресса.
              </p>
            </article>
            <article className="card">
              <div className="number">03</div>
              <h3>Питание без крайностей</h3>
              <p>
                Обсуждаем калории, белки и пищевые привычки без жёстких запретов
                и лечебных диет.
              </p>
            </article>
          </div>
        </section>
        <section id="services">
          <div className="eyebrow">02 / Форматы</div>
          <h2>Просто и доступно.</h2>
          <p className="sub">
            Небольшая стоимость за время, внимание и личный опыт. Без дорогих
            подписок и навязанных пакетов.
          </p>
          <div className="grid">
            <article className="card">
              <div className="number">РАЗОВО</div>
              <h3>Разговор по делу</h3>
              <div className="price">
                800 RSD <small>/ 30 мин</small>
              </div>
              <ul>
                <li>Обсуждение целей и привычек</li>
                <li>Ответы на вопросы</li>
                <li>Общие рекомендации и ресурсы</li>
              </ul>
              <a className="btn outline" href="#contact">
                Обсудить
              </a>
            </article>
            <article className="card featured">
              <div className="number">НАЧАТЬ ЗДЕСЬ</div>
              <h3>Basic Mentor</h3>
              <div className="price">
                1 500 RSD <small>/ месяц</small>
              </div>
              <ul>
                <li>Еженедельная проверка целей</li>
                <li>Поддержка в переписке</li>
                <li>Отслеживание привычек</li>
              </ul>
              <a className="btn" href="#contact">
                Выбрать Basic →
              </a>
            </article>
            <article className="card">
              <div className="number">БОЛЬШЕ ВНИМАНИЯ</div>
              <h3>Personal Mentor</h3>
              <div className="price">
                3 000 RSD <small>/ месяц</small>
              </div>
              <ul>
                <li>Всё из Basic</li>
                <li>Два созвона по 30 минут</li>
                <li>Разбор прогресса и трудностей</li>
              </ul>
              <a className="btn outline" href="#contact">
                Выбрать Personal
              </a>
            </article>
          </div>
          <p className="note">
            Это образовательное наставничество на основе личного опыта, а не
            медицинские услуги или профессиональные персональные тренировки.
            Пакеты не включают индивидуальное назначение физических нагрузок и
            лечебного питания.
          </p>
        </section>
        <section id="about">
          <div className="about">
            <div>
              <div className="eyebrow">03 / Кто я</div>
              <h2>Привет, я Андрей.</h2>
              <p className="sub">
                Я разработчик и человек, для которого тренировки стали частью
                повседневной жизни. Мне близок системный подход: наблюдать,
                измерять прогресс, делать выводы и менять привычки постепенно.
              </p>
              <p className="sub">
                Я не выдаю себя за сертифицированного тренера или диетолога.
                Здесь я делюсь тем, что изучил и проверил на собственном опыте,
                и помогаю сохранять регулярность.
              </p>
            </div>
            <div className="quote">
              «Хорошая система работает не только тогда, когда у тебя есть
              мотивация».
            </div>
          </div>
        </section>
        <section id="faq" className="faq">
          <div className="eyebrow">04 / FAQ</div>
          <h2>Частые вопросы</h2>
          <details>
            <summary>Подойдёт ли мне наставничество, если я новичок?</summary>
            <p>
              Да, если тебе нужны общие знания, поддержка и помощь с привычками.
              Для индивидуальной техники упражнений и подбора нагрузок лучше
              обратиться к квалифицированному тренеру.
            </p>
          </details>
          <details>
            <summary>
              Ты составляешь персональные программы тренировок и диеты?
            </summary>
            <p>
              Нет. Мы можем обсудить общие принципы тренировок и питания, но я
              не назначаю индивидуальные нагрузки, лечебные диеты и медицинские
              рекомендации.
            </p>
          </details>
          <details>
            <summary>Можно ли общаться онлайн?</summary>
            <p>
              Да, формат предполагает переписку и созвоны независимо от города.
            </p>
          </details>
          <details>
            <summary>Как проходит первая встреча?</summary>
            <p>
              Ты рассказываешь о своих целях, мы обсуждаем ожидания и решаем,
              полезен ли тебе такой формат.
            </p>
          </details>
        </section>
        <section id="contact">
          <div className="cta">
            <div className="eyebrow" style={{ color: "#39522b" }}>
              05 / Начнём?
            </div>
            <h2>Не нужен идеальный понедельник. Можно начать сегодня.</h2>
            <p>
              Напиши, чего хочешь достичь и что сейчас мешает. Обсудим, подойдёт
              ли тебе такой формат.
            </p>
            <a
              className="btn"
              href="mailto:hello@example.com?subject=Train%20With%20Andrey%20%E2%80%94%20%D0%BD%D0%B0%D1%81%D1%82%D0%B0%D0%B2%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%BE"
            >
              Написать Андрею →
            </a>
            <p style={{ fontSize: 12, marginTop: 20 }}>
              Контактный адрес демонстрационный — замените перед публикацией.
            </p>
          </div>
        </section>
      </main>
      <footer>
        <span>© 2026 Train With Andrey</span>
        <span>Личный опыт · Без обещаний быстрых результатов</span>
      </footer>
    </div>
  );
}

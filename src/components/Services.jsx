import { SERVICES } from '../data/content.js'

export default function Services() {
  return (
    <section id="prestations" className="section services">
      <div className="container">
        <div className="section__head" data-reveal>
          <span className="section__eyebrow">Prestations</span>
          <h2 className="section__title">
            Nos <span className="script">signatures</span>
          </h2>
          <p className="section__lead">
            Chaque pose est pensée comme une pièce unique : précision technique, respect de l’ongle
            naturel et finition impeccable.
          </p>
        </div>

        <div className="services__list">
          {SERVICES.map((s, i) => (
            <article
              key={s.title}
              className={`service ${i % 2 ? 'service--flip' : ''}`}
              data-reveal
            >
              <div className="service__media">
                <img src={s.image} alt={s.title} loading="lazy" />
                <span className="service__index">0{i + 1}</span>
              </div>
              <div className="service__body">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

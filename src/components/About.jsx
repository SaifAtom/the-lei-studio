import { ABOUT } from '../data/content.js'
import { SparkleIcon } from './Icons.jsx'

export default function About() {
  return (
    <section id="a-propos" className="section about">
      <div className="container about__grid">
        <div className="about__aside" data-reveal>
          <span className="section__eyebrow">À propos</span>
          <h2 className="section__title">{ABOUT.title}</h2>
          <div className="about__signature">
            {ABOUT.signature.map((line) => (
              <span key={line} className="script">
                {line}
              </span>
            ))}
          </div>
          <ul className="about__pills">
            <li><SparkleIcon size={14} /> Certifiée en France</li>
            <li><SparkleIcon size={14} /> 100 % gel</li>
            <li><SparkleIcon size={14} /> Produits professionnels français</li>
            <li><SparkleIcon size={14} /> Instruments stérilisés</li>
          </ul>
        </div>

        <div className="about__text">
          {ABOUT.paragraphs.map((p, i) => (
            <p key={i} data-reveal data-reveal-delay={i * 90}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

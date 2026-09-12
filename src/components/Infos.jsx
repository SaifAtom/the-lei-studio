import { INFOS } from '../data/content.js'
import { AlertIcon } from './Icons.jsx'

export default function Infos() {
  return (
    <section id="infos" className="section infos">
      <div className="container">
        <div className="infos__card" data-reveal>
          <div className="infos__head">
            <span className="infos__icon">
              <AlertIcon />
            </span>
            <div>
              <span className="section__eyebrow">Attention</span>
              <h2 className="section__title section__title--sm">Informations importantes</h2>
            </div>
          </div>
          <ol className="infos__list">
            {INFOS.map((line, i) => (
              <li key={line} data-reveal data-reveal-delay={i * 80}>
                <span className="infos__num">{String(i + 1).padStart(2, '0')}</span>
                <span>{line}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

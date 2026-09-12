import { useState } from 'react'
import { PRICES, CONTACT } from '../data/content.js'
import { WhatsAppIcon } from './Icons.jsx'

function Price({ value }) {
  if (value === null) return <span className="price__tag price__tag--quote">sur devis</span>
  return (
    <span className="price__tag">
      {value}
      <small>DT</small>
    </span>
  )
}

export default function Prices() {
  const [active, setActive] = useState(0)
  const current = PRICES[active]

  return (
    <section id="tarifs" className="section prices">
      <div className="container">
        <div className="section__head" data-reveal>
          <span className="section__eyebrow">Tarifs</span>
          <h2 className="section__title">
            Nos <span className="script">prestations</span> &amp; tarifs
          </h2>
          <p className="section__lead">Prix en dinars tunisiens. Nail Art personnalisé sur devis.</p>
        </div>

        <div className="prices__tabs" role="tablist" data-reveal>
          {PRICES.map((cat, i) => (
            <button
              key={cat.category}
              role="tab"
              aria-selected={i === active}
              className={`prices__tab ${i === active ? 'is-active' : ''}`}
              onClick={() => setActive(i)}
            >
              {cat.category}
            </button>
          ))}
        </div>

        <div className="prices__panel" key={current.category} data-reveal>
          <ul className="price-list">
            {current.items.map((item) => (
              <li key={item.name} className="price">
                <div className="price__main">
                  <span className="price__name">{item.name}</span>
                  <span className="price__dots" aria-hidden="true" />
                  <Price value={item.price} />
                </div>
                {item.note && <p className="price__note">{item.note}</p>}
              </li>
            ))}
          </ul>
        </div>

        <div className="prices__cta" data-reveal>
          <p>Une envie particulière ? Envoyez-nous une photo, nous vous répondons avec un devis.</p>
          <a href={CONTACT.whatsappHref} target="_blank" rel="noreferrer" className="btn btn--dark">
            <WhatsAppIcon /> Demander un devis
          </a>
        </div>
      </div>
    </section>
  )
}

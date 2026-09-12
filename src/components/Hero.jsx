import { CONTACT, LOGO } from '../data/content.js'
import { WhatsAppIcon, PhoneIcon } from './Icons.jsx'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__orb hero__orb--1" />
        <span className="hero__orb hero__orb--2" />
        <span className="hero__orb hero__orb--3" />
      </div>

      <div className="container hero__inner">
        <div className="hero__logo-wrap">
          <img src={LOGO} alt="The Lei Studio — Nail Salon" className="hero__logo" />
        </div>

        <p className="hero__eyebrow">Nail salon · Tunis</p>
        <h1 className="hero__title">
          <span className="script">The Lei Studio</span>
        </h1>
        <p className="hero__tagline">L’expertise française, désormais à Tunis.</p>
        <p className="hero__sub">
          Manucure russe · Gainage · Capsules gel · Nail Art · Pédicure médicale
        </p>

        <div className="hero__actions">
          <a href={CONTACT.whatsappHref} target="_blank" rel="noreferrer" className="btn btn--dark">
            <WhatsAppIcon /> WhatsApp
          </a>
          <a href={CONTACT.phoneHref} className="btn btn--outline">
            <PhoneIcon /> Appeler
          </a>
        </div>

        <a href="#a-propos" className="hero__scroll" aria-label="Défiler vers le bas">
          <span />
        </a>
      </div>
    </section>
  )
}

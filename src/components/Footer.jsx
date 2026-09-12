import { CONTACT } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <span className="script footer__brand">The Lei Studio</span>
          <p className="footer__sub">Nail Salon · Tunis</p>
        </div>
        <p className="footer__tag">
          Une expertise française. <br /> Une signature unique.
        </p>
        <div className="footer__links">
          <a href={CONTACT.whatsappHref} target="_blank" rel="noreferrer">WhatsApp</a>
          <a href={CONTACT.phoneHref}>Appeler</a>
          <a href={CONTACT.mapsLink} target="_blank" rel="noreferrer">Google Maps</a>
        </div>
      </div>
      <div className="container footer__copy">
        © {new Date().getFullYear()} The Lei Studio. Tous droits réservés.
      </div>
    </footer>
  )
}

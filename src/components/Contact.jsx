import { CONTACT } from '../data/content.js'
import { WhatsAppIcon, PhoneIcon, PinIcon } from './Icons.jsx'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container contact__grid">
        <div className="contact__info" data-reveal>
          <span className="section__eyebrow">Contact</span>
          <h2 className="section__title">
            Prenez <span className="script">rendez-vous</span>
          </h2>
          <p className="section__lead">
            La prise de rendez-vous se fait uniquement par WhatsApp ou par téléphone.
          </p>

          <div className="contact__cards">
            <a href={CONTACT.whatsappHref} target="_blank" rel="noreferrer" className="contact__card">
              <span className="contact__card-icon"><WhatsAppIcon size={22} /></span>
              <span>
                <strong>WhatsApp</strong>
                <span>{CONTACT.whatsapp}</span>
              </span>
            </a>
            <a href={CONTACT.phoneHref} className="contact__card">
              <span className="contact__card-icon"><PhoneIcon size={22} /></span>
              <span>
                <strong>Téléphone</strong>
                <span>{CONTACT.phone}</span>
              </span>
            </a>
            <a href={CONTACT.mapsLink} target="_blank" rel="noreferrer" className="contact__card">
              <span className="contact__card-icon"><PinIcon size={22} /></span>
              <span>
                <strong>Le studio</strong>
                <span>Tunis · Ouvrir dans Google Maps</span>
              </span>
            </a>
          </div>
        </div>

        <div className="contact__map" data-reveal data-reveal-delay="120">
          <iframe
            title="The Lei Studio sur Google Maps"
            src={CONTACT.mapsEmbed}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}

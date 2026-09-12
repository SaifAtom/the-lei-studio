import { CONTACT } from '../data/content.js'
import { WhatsAppIcon, PhoneIcon } from './Icons.jsx'

export default function FloatingActions() {
  return (
    <div className="fab">
      <a
        href={CONTACT.phoneHref}
        className="fab__btn fab__btn--phone"
        aria-label={`Appeler ${CONTACT.phone}`}
      >
        <PhoneIcon size={22} />
      </a>
      <a
        href={CONTACT.whatsappHref}
        target="_blank"
        rel="noreferrer"
        className="fab__btn fab__btn--wa"
        aria-label={`WhatsApp ${CONTACT.whatsapp}`}
      >
        <WhatsAppIcon size={24} />
      </a>
    </div>
  )
}

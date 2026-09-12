import { useEffect, useState } from 'react'
import { CONTACT } from '../data/content.js'
import { WhatsAppIcon } from './Icons.jsx'

const LINKS = [
  { href: '#a-propos', label: 'À propos' },
  { href: '#prestations', label: 'Prestations' },
  { href: '#tarifs', label: 'Tarifs' },
  { href: '#infos', label: 'Infos' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="nav__brand-script">The Lei Studio</span>
          <span className="nav__brand-sub">Nail Salon</span>
        </a>

        <nav className={`nav__links ${open ? 'is-open' : ''}`} aria-label="Navigation principale">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="btn btn--dark btn--sm nav__cta"
          >
            <WhatsAppIcon size={16} /> Réserver
          </a>
        </nav>

        <button
          className={`nav__burger ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

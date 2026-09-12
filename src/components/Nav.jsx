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

const MOBILE_QUERY = '(max-width: 960px)'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock page scroll while the mobile menu is open, close on Escape or
  // when the viewport grows past the mobile breakpoint.
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const mq = window.matchMedia(MOBILE_QUERY)
    const onMq = (e) => !e.matches && setOpen(false)

    window.addEventListener('keydown', onKey)
    mq.addEventListener('change', onMq)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onMq)
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__brand" onClick={close}>
          <span className="nav__brand-script">The Lei Studio</span>
          <span className="nav__brand-sub">Nail Salon</span>
        </a>

        <nav
          id="main-menu"
          className={`nav__links ${open ? 'is-open' : ''}`}
          aria-label="Navigation principale"
          aria-hidden={!open ? undefined : false}
        >
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>
              {l.label}
            </a>
          ))}
          <a
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="btn btn--dark btn--sm nav__cta"
            onClick={close}
          >
            <WhatsAppIcon size={16} /> Réserver
          </a>
        </nav>

        <button
          type="button"
          className={`nav__burger ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          aria-controls="main-menu"
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

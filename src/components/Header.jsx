import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'
import { PhoneIcon } from './Icons'
import { PHONE_DISPLAY, PHONE_TEL } from '../constants'

const navLinks = [
  { label: 'Home', to: '/#home' },
  { label: 'Services', to: '/#services' },
  { label: 'About Us', to: '/#about' },
  { label: 'Reviews', to: '/#reviews' },
  // { label: 'FAQ', to: '/#faq' },
  { label: 'Contact', to: '/#contact' },
]

export default function Header({ variant = 'overlay' }) {
  const location = useLocation()
  const isSolid = variant === 'solid'
  const onHome = location.pathname === '/'

  return (
    <header
      className={
        isSolid
          ? 'sticky top-0 z-30 border-b border-white/10 bg-panda-black'
          : 'absolute inset-x-0 top-0 z-30'
      }
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-6">
        <Link to="/" className="shrink-0">
          <Logo size={52} light />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const hash = link.to.includes('#') ? link.to.split('#')[1] : ''
            const href = onHome && hash ? `#${hash}` : link.to

            return (
              <a
                key={link.to}
                href={href}
                className="font-display text-sm font-bold uppercase tracking-[0.14em] text-white/90 transition hover:text-panda-orange"
              >
                {link.label}
              </a>
            )
          })}
          <Link
            to="/book"
            className="font-display text-sm font-bold uppercase tracking-[0.14em] text-panda-orange transition hover:text-white"
          >
            Book
          </Link>
        </nav>

        <a
          href={`tel:${PHONE_TEL}`}
          className="slant-phone flex items-center gap-2 bg-panda-orange py-3 pl-6 pr-4 text-white transition hover:bg-panda-orange-dark md:pl-8"
        >
          <PhoneIcon className="h-5 w-5 shrink-0" />
          <span className="font-display text-lg font-extrabold tracking-wide md:text-xl">
            {PHONE_DISPLAY}
          </span>
        </a>
      </div>
    </header>
  )
}

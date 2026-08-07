import { Link } from 'react-router-dom'
import Logo from './Logo'
import {
  PhoneIcon,
  MailIcon,
  GlobeIcon,
  ShieldIcon,
  CalendarIcon,
  FacebookIcon,
  InstagramIcon,
} from './Icons'
import {
  BUSINESS_NAME,
  EMAIL,
  PHONE_DISPLAY,
  PHONE_TEL,
  SERVICE_AREA,
  SOCIAL,
} from '../constants'

const badges = [
  'Licensed & Insured',
  'Locally Owned',
  '5 Star Service',
  'Evening & Saturday Appt.',
]

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-panda-black text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:px-6 lg:grid-cols-3 lg:items-center lg:gap-8">
        <div>
          <h2 className="font-display text-4xl font-extrabold uppercase leading-none tracking-tight md:text-5xl">
            Ready to Get Started?
          </h2>
          <Link
            to="/book"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-panda-orange px-6 py-3.5 font-display text-lg font-extrabold uppercase tracking-wide text-white transition hover:bg-panda-orange-dark"
          >
            <CalendarIcon className="h-5 w-5" />
            Book Online
          </Link>
        </div>

        <div className="flex justify-center">
          <Logo size={88} light className="flex-col text-center sm:flex-row sm:text-left" />
        </div>

        <div className="space-y-4 lg:text-right">
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-3 font-display text-3xl font-extrabold tracking-wide text-panda-orange transition hover:text-white lg:justify-end"
          >
            <PhoneIcon className="h-7 w-7" />
            {PHONE_DISPLAY}
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-3 text-white/80 transition hover:text-panda-orange lg:justify-end"
          >
            <MailIcon className="h-5 w-5 shrink-0" />
            {EMAIL}
          </a>
          <p className="flex items-center gap-3 text-white/80 lg:justify-end">
            <GlobeIcon className="h-5 w-5 shrink-0" />
            Serving the {SERVICE_AREA}
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 md:flex-row md:items-center md:justify-between md:px-6">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium uppercase tracking-wider text-white/60">
            {badges.map((badge) => (
              <li key={badge} className="flex items-center gap-1.5">
                <ShieldIcon className="h-3.5 w-3.5 text-panda-orange" />
                {badge}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <a
              href={SOCIAL.facebook}
              className="text-white/60 transition hover:text-panda-orange"
              aria-label="Facebook"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a
              href={SOCIAL.instagram}
              className="text-white/60 transition hover:text-panda-orange"
              aria-label="Instagram"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <p className="text-xs text-white/40">
              © {new Date().getFullYear()} {BUSINESS_NAME}
            </p>
          </div>
        </div>
      </div>

      <div id="faq" className="sr-only" aria-hidden="true" />
    </footer>
  )
}

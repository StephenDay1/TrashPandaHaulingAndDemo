import { Link } from 'react-router-dom'
import { CalendarIcon, ChatIcon, CheckIcon } from './Icons'
import { PHONE_TEL, SERVICE_AREA } from '../constants'

const perks = [
  'Evening & Saturday Appointments',
  'Free No-Obligation Quotes',
  'Licensed & Insured',
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-svh overflow-hidden bg-panda-black">
      {/* Placeholder hero photo — swap for branded truck shot when available */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/truck-trailer.jpeg')",
        }}
        role="img"
        aria-label="Pickup truck ready for hauling"
      />
      <div className="hero-overlay absolute inset-0" />

      <div className="relative mx-auto flex min-h-svh max-w-7xl flex-col justify-center px-4 pb-20 pt-28 md:px-6 md:pt-32">
        <p className="animate-fade-up font-display text-base font-semibold italic tracking-[0.2em] text-panda-orange md:text-lg">
          {SERVICE_AREA}&apos;s
        </p>

        <h1 className="animate-fade-up-delay-1 mt-2 max-w-3xl font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-white md:text-7xl lg:text-8xl">
          Junk Removal &amp; Light Demo
        </h1>

        <p className="animate-fade-up-delay-2 mt-4 font-display text-xl font-semibold italic tracking-wide text-white md:text-2xl">
          Fast. Reliable. Done Right.
        </p>

        <ul className="animate-fade-up-delay-2 mt-8 space-y-3">
          {perks.map((perk) => (
            <li key={perk} className="flex items-center gap-3 text-white">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-panda-orange/20 text-panda-orange">
                <CheckIcon className="h-4 w-4" />
              </span>
              <span className="text-base font-medium md:text-lg">{perk}</span>
            </li>
          ))}
        </ul>

        <div className="animate-fade-up-delay-3 mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            to="/book"
            className="inline-flex items-center justify-center gap-3 rounded-lg bg-panda-orange px-6 py-4 text-white transition hover:bg-panda-orange-dark hover:scale-[1.02]"
          >
            <CalendarIcon className="h-6 w-6" />
            <span className="text-left leading-tight">
              <span className="block font-display text-xl font-extrabold uppercase tracking-wide">
                Book Online
              </span>
              <span className="block text-sm font-medium text-white/90">See Availability</span>
            </span>
          </Link>

          <a
            href={`sms:${PHONE_TEL}`}
            className="inline-flex items-center justify-center gap-3 rounded-lg border-2 border-white px-6 py-4 text-white transition hover:bg-white/10 hover:scale-[1.02]"
          >
            <ChatIcon className="h-6 w-6" />
            <span className="text-left leading-tight">
              <span className="block font-display text-xl font-extrabold uppercase tracking-wide">
                Text Photos
              </span>
              <span className="block text-sm font-medium text-white/90">Get a Fast Quote</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

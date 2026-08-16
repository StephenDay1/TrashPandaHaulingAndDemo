import Cal from '@calcom/embed-react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { CalendarIcon, PhoneIcon, ChatIcon } from '../components/Icons'
import { CAL_LINK, PHONE_DISPLAY, PHONE_TEL } from '../constants'

function toCalPath(calLink) {
  return calLink
    .trim()
    .replace(/^https?:\/\/(www\.)?(app\.)?cal\.com\//i, '')
    .replace(/^\/+|\/+$/g, '')
}

function CalEmbed({ calLink }) {
  if (!calLink) {
    return (
      <div className="flex min-h-120 flex-col items-center justify-center gap-4 rounded-xl border-2 border-dashed border-panda-orange/40 bg-white px-6 py-16 text-center">
        <CalendarIcon className="h-12 w-12 text-panda-orange" />
        <div>
          <p className="font-display text-2xl font-extrabold uppercase tracking-wide text-panda-black">
            Calendar Coming Soon
          </p>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-panda-muted">
            Online booking will connect to Cal.com here. In the meantime, call or text to schedule.
          </p>
        </div>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-panda-orange px-5 py-3 font-display text-base font-extrabold uppercase tracking-wide text-white transition hover:bg-panda-orange-dark"
          >
            <PhoneIcon className="h-5 w-5" />
            {PHONE_DISPLAY}
          </a>
          <a
            href={`sms:${PHONE_TEL}`}
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-panda-black px-5 py-3 font-display text-base font-extrabold uppercase tracking-wide text-panda-black transition hover:bg-panda-black hover:text-white"
          >
            <ChatIcon className="h-5 w-5" />
            Text Us
          </a>
        </div>
        <p className="mt-4 text-xs text-panda-muted">
          Dev: set <code className="rounded bg-panda-paper px-1.5 py-0.5 font-mono">CAL_LINK</code> in{' '}
          <code className="rounded bg-panda-paper px-1.5 py-0.5 font-mono">src/constants.js</code>
        </p>
      </div>
    )
  }

  return (
    <div className="min-h-175 w-full overflow-auto rounded-xl bg-white shadow-sm ring-1 ring-black/5">
      <Cal
        calLink={toCalPath(calLink)}
        namespace="booking"
        config={{ layout: 'month_view', theme: 'light' }}
        style={{ width: '100%', height: '100%', minHeight: '700px', overflow: 'scroll' }}
      />
    </div>
  )
}

export default function BookingPage() {
  return (
    <div className="min-h-svh">
      <Header variant="solid" />
      <main className="paper-bg">
        <section className="mx-auto max-w-5xl px-4 pb-20 pt-28 md:px-6 md:pt-32">
          <div className="text-center">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-panda-orange">
              Schedule Your Job
            </p>
            <h1 className="mt-2 font-display text-4xl font-extrabold uppercase tracking-tight text-panda-black md:text-6xl">
              Book Online
            </h1>
            <div className="mx-auto mt-3 h-1.5 w-16 rounded-full bg-panda-orange" />
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-panda-black/70 md:text-lg">
              Pick a time that works for you — evenings and Saturdays available. We&apos;ll confirm and
              show up ready to haul.
            </p>
          </div>

          <div className="mt-10">
            <CalEmbed calLink={CAL_LINK} />
          </div>

          <p className="mt-8 text-center text-sm text-panda-muted">
            Prefer to talk it through?{' '}
            <a href={`tel:${PHONE_TEL}`} className="font-semibold text-panda-orange hover:underline">
              Call {PHONE_DISPLAY}
            </a>
            {' · '}
            <Link to="/" className="font-semibold text-panda-black hover:underline">
              Back to home
            </Link>
          </p>
        </section>
      </main>
      <Footer />
    </div>
  )
}

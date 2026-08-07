import { CheckIcon, StarIcon } from './Icons'

const reasons = [
  'Locally Owned & Operated',
  'Licensed & Insured',
  'Fast & Friendly Service',
  'Transparent Pricing',
  'Satisfaction Guaranteed',
]

const reviews = [
  {
    name: 'Sarah M.',
    text: 'Showed up on time, quoted fair, and had our garage emptied in under an hour. Highly recommend!',
  },
  {
    name: 'Mike R.',
    text: 'Needed a hot tub gone ASAP. Trash Panda handled everything — professional and easy to work with.',
  },
  {
    name: 'Jennifer L.',
    text: 'Best junk removal in the Treasure Valley. Fair price, great communication, and they left the place spotless.',
  },
]

function GoogleMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  )
}

export default function WhyChoose() {
  return (
    <section id="about" className="paper-bg relative">
      <svg
        className="section-wave -mt-px"
        viewBox="0 0 1440 36"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0,18 C180,36 360,0 540,12 C720,24 900,36 1080,18 C1260,0 1350,6 1440,18 L1440,0 L0,0 Z"
        />
      </svg>

      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div id="why-us">
            <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight text-panda-black md:text-5xl">
              Why Choose Trash Panda?
            </h2>
            <div className="mt-3 h-1.5 w-16 rounded-full bg-panda-orange" />

            <ul className="mt-8 space-y-4">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-panda-orange text-white">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <span className="text-lg font-semibold text-panda-black">{reason}</span>
                </li>
              ))}
            </ul>

            {/* Mascot placeholder — replace when logo/illustration lands */}
            <div className="mt-10 flex justify-center lg:justify-start">
              <div className="flex h-48 w-48 items-center justify-center rounded-full border-4 border-dashed border-panda-orange/50 bg-white/60">
                <div className="text-center">
                  <p className="font-display text-3xl font-extrabold text-panda-orange">TP</p>
                  <p className="mt-1 text-xs font-medium text-panda-muted">Mascot coming soon</p>
                </div>
              </div>
            </div>
          </div>

          <div id="reviews">
            <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight text-panda-black md:text-5xl">
              What Our Clients Say
            </h2>
            <div className="mt-3 h-1.5 w-16 rounded-full bg-panda-orange" />

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3">
              {reviews.map((review) => (
                <blockquote
                  key={review.name}
                  className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-black/5"
                >
                  <div className="mb-3 flex gap-0.5 text-panda-orange">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} className="h-4 w-4" />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-panda-black/80">&ldquo;{review.text}&rdquo;</p>
                  <footer className="mt-4 flex items-center justify-between">
                    <cite className="not-italic text-sm font-semibold text-panda-black">
                      {review.name}
                    </cite>
                    <GoogleMark />
                  </footer>
                </blockquote>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="#reviews"
                className="inline-block rounded-lg bg-panda-orange px-8 py-3.5 font-display text-lg font-extrabold uppercase tracking-wide text-white transition hover:bg-panda-orange-dark"
              >
                View All Reviews
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Paper ends in a wave — black + orange cut into this section so there's no straight edge */}
      <svg
        className="relative z-10 -mb-px block w-full text-panda-orange"
        style={{ height: 48 }}
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="#141414"
          d="M0,18 C180,36 360,0 540,12 C720,24 900,36 1080,18 C1260,0 1350,6 1440,18 L1440,48 L0,48 Z"
        />
        <path
          fill="currentColor"
          d="M0,8 C180,26 360,2 540,10 C720,18 900,28 1080,14 C1260,2 1350,4 1440,12 L1440,26 C1350,18 1260,12 1080,28 C900,38 720,32 540,20 C360,10 180,36 0,22 Z"
        />
      </svg>
    </section>
  )
}

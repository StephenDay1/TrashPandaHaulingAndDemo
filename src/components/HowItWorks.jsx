import { CalendarIcon, PhoneIcon, TruckIcon } from './Icons'

const steps = [
  {
    number: '1',
    title: 'Book Online',
    description: 'Choose a time that works for you — evenings and Saturdays available.',
    Icon: CalendarIcon,
  },
  {
    number: '2',
    title: 'We Arrive & Quote',
    description: 'We show up on time, assess the job, and give you a fair upfront quote.',
    Icon: PhoneIcon,
  },
  {
    number: '3',
    title: 'We Haul It Away',
    description: 'You relax while we do all the heavy lifting and leave your space clean.',
    Icon: TruckIcon,
  },
]

export default function HowItWorks() {
  return (
    <section className="relative bg-panda-charcoal">
      <svg className="section-wave section-wave-paper -mt-px" viewBox="0 0 1440 36" preserveAspectRatio="none" aria-hidden="true">
        <path fill="currentColor" d="M0,18 C180,36 360,0 540,12 C720,24 900,36 1080,18 C1260,0 1350,6 1440,18 L1440,0 L0,0 Z" />
      </svg>

      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight text-white md:text-5xl">
              How It Works
            </h2>
            <div className="mt-3 h-1.5 w-16 rounded-full bg-panda-orange" />

            <ol className="mt-10 space-y-8">
              {steps.map((step, index) => (
                <li key={step.title} className="relative flex gap-5">
                  {index < steps.length - 1 && (
                    <span
                      className="absolute left-5 top-12 h-[calc(100%-0.5rem)] w-px bg-panda-orange/40"
                      aria-hidden="true"
                    />
                  )}
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-panda-orange bg-panda-charcoal font-display text-lg font-extrabold text-panda-orange">
                    {step.number}
                  </div>
                  <div className="pt-0.5">
                    <div className="mb-2 flex items-center gap-2 text-panda-orange">
                      <step.Icon className="h-5 w-5" />
                      <h3 className="font-display text-xl font-extrabold uppercase tracking-wide text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="max-w-md text-base leading-relaxed text-white/70">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="overflow-hidden rounded-xl shadow-lg ring-1 ring-white/10">
            <img
              src="/B&A5.png"
              alt="Before and after junk removal — cluttered shed cleared out"
              className="h-auto w-full object-cover"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

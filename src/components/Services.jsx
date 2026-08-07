import {
  TruckIcon,
  HomeIcon,
  DemolitionIcon,
  HotTubIcon,
  BroomIcon,
  FenceIcon,
} from './Icons'

const services = [
  {
    title: 'Junk Removal',
    description: 'Furniture, appliances, yard waste, and everything in between — loaded and gone.',
    Icon: TruckIcon,
  },
  {
    title: 'Cleanouts',
    description: 'Garages, basements, attics, and estates cleared out quickly and carefully.',
    Icon: HomeIcon,
  },
  {
    title: 'Light Demolition',
    description: 'Interior tear-outs, walls, flooring, and small structures handled safely.',
    Icon: DemolitionIcon,
  },
  {
    title: 'Hot Tub Removal',
    description: 'We disconnect, break down, and haul away old hot tubs and spas.',
    Icon: HotTubIcon,
  },
  {
    title: 'Property Cleanup',
    description: 'Overgrown lots, construction debris, and curb-appeal cleanups.',
    Icon: BroomIcon,
  },
  {
    title: 'Shed & Deck Removal',
    description: 'Old sheds, decks, and fences demolished and hauled off the property.',
    Icon: FenceIcon,
  },
]

export default function Services() {
  return (
    <section id="services" className="paper-bg relative py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight text-panda-black md:text-5xl">
            Our Services
          </h2>
          <div className="mx-auto mt-3 h-1.5 w-16 rounded-full bg-panda-orange" />
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, Icon }) => (
            <article
              key={title}
              className="rounded-xl bg-panda-card px-6 py-8 text-center transition duration-300 hover:-translate-y-1 hover:bg-panda-black"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center text-panda-orange">
                <Icon className="h-10 w-10" />
              </div>
              <h3 className="font-display text-2xl font-extrabold uppercase tracking-wide text-white">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{description}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#services"
            className="inline-block rounded-lg bg-panda-orange px-8 py-3.5 font-display text-lg font-extrabold uppercase tracking-wide text-white transition hover:bg-panda-orange-dark"
          >
            View All Services
          </a>
        </div>
      </div>
    </section>
  )
}

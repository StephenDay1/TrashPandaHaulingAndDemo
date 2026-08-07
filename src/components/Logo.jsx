/** Placeholder until the raccoon logo is added to /public or /src/assets */
export default function Logo({ className = '', size = 56, light = false }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div
        className={`flex shrink-0 items-center justify-center rounded-full border-2 border-panda-orange bg-panda-black ${light ? 'ring-1 ring-white/20' : ''}`}
        style={{ width: size, height: size }}
        aria-hidden="true"
      >
        <span className="font-display text-[0.55em] font-extrabold leading-none tracking-wide text-panda-orange" style={{ fontSize: size * 0.28 }}>
          TP
        </span>
      </div>
      <div className="leading-tight">
        <p className={`font-display text-lg font-extrabold uppercase tracking-wide ${light ? 'text-white' : 'text-white'}`}>
          Trash Panda
        </p>
        <p className={`font-display text-xs font-semibold uppercase tracking-[0.12em] ${light ? 'text-panda-orange' : 'text-panda-orange'}`}>
          Hauling and Demo
        </p>
      </div>
    </div>
  )
}

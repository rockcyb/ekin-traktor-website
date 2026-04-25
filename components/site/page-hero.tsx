interface Props {
  eyebrow?: string
  title: string
  description?: string
  accent?: string
}

export function PageHero({ eyebrow, title, description, accent }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-[#e4dcc9] bg-[#f6f0e3] text-[#203024]">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-90"
        style={{
          background:
            'radial-gradient(1100px 420px at 0% 0%, rgba(142, 161, 116, 0.22), transparent 58%), radial-gradient(900px 320px at 100% 100%, rgba(99, 129, 87, 0.14), transparent 60%)',
        }}
      />
      <div className="relative mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20">
        {eyebrow && (
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d8ceb8] bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#5d7342] backdrop-blur">
            {eyebrow}
          </div>
        )}
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          {title}
          {accent && <span className="text-[#4a693b]"> {accent}</span>}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#5b6554] sm:text-lg">{description}</p>
        )}
      </div>
    </section>
  )
}

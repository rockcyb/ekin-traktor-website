import Image from 'next/image'
import Link from 'next/link'

export function Logo({
  className = '',
  size = 44,
  alt = 'Ekin Traktör Motorlu Araçlar logosu',
  tone = 'dark',
  showTextOnMobile = false,
}: {
  className?: string
  size?: number
  alt?: string
  tone?: 'dark' | 'light'
  showTextOnMobile?: boolean
}) {
  const titleClass = tone === 'light' ? 'text-white' : 'text-[#211714]'
  const subtitleClass = tone === 'light' ? 'text-[#d6dfc5]' : 'text-[#b52c24]'
  const frameClass =
    tone === 'light'
      ? 'bg-[#101611] ring-white/10 shadow-[0_2px_8px_rgba(0,0,0,0.35)]'
      : 'bg-[#1d281c] ring-[#d9d0be] shadow-[0_8px_24px_rgba(32,48,36,0.12)]'
  const textWrapperClass = showTextOnMobile
    ? 'flex flex-col leading-tight'
    : 'hidden sm:flex flex-col leading-tight'

  return (
    <Link href="/" className={`flex items-center gap-3 ${className}`} aria-label="Ekin Traktör Motorlu Araçlar - Ana Sayfa">
      <span
        className={`relative overflow-hidden rounded-2xl ring-1 ${frameClass}`}
        style={{ width: size, height: size }}
      >
        <Image
          src="/logo.jpg"
          alt={alt}
          fill
          sizes={`${size}px`}
          className="object-cover"
          priority
        />
      </span>
      <span className={textWrapperClass}>
        <span className={`font-display text-[14px] font-bold tracking-[-0.02em] sm:text-[15px] ${titleClass}`}>Ekin Traktör</span>
        <span className={`text-[10px] font-semibold uppercase tracking-[0.16em] sm:text-[11px] sm:tracking-[0.18em] ${subtitleClass}`}>Motorlu Araçlar</span>
      </span>
    </Link>
  )
}

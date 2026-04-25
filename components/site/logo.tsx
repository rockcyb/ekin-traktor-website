import Image from 'next/image'
import Link from 'next/link'

export function Logo({
  className = '',
  size = 44,
  alt = 'Ekin Traktör Motorlu Araçlar logosu',
  tone = 'dark',
}: {
  className?: string
  size?: number
  alt?: string
  tone?: 'dark' | 'light'
}) {
  const titleClass = tone === 'light' ? 'text-white' : 'text-[#203024]'
  const subtitleClass = tone === 'light' ? 'text-[#d6dfc5]' : 'text-[#5d7342]'
  const frameClass =
    tone === 'light'
      ? 'bg-[#101611] ring-white/10 shadow-[0_2px_8px_rgba(0,0,0,0.35)]'
      : 'bg-[#1d281c] ring-[#d9d0be] shadow-[0_8px_24px_rgba(32,48,36,0.12)]'

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
      <span className="hidden sm:flex flex-col leading-tight">
        <span className={`font-display text-[15px] font-bold tracking-tight ${titleClass}`}>EKİN TRAKTÖR</span>
        <span className={`text-[11px] font-medium uppercase tracking-[0.18em] ${subtitleClass}`}>Motorlu Araçlar</span>
      </span>
    </Link>
  )
}

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X, Phone, MapPin } from 'lucide-react'
import { Logo } from './logo'
import { WhatsappIcon } from './whatsapp-icon'
import { CONTACTS } from '@/lib/contact'

const NAV = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/traktorler', label: 'Traktörler' },
  { href: '/tarim-ekipmanlari', label: 'Tarım Ekipmanları' },
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/iletisim', label: 'İletişim' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-[#e5dcc8] bg-[#f7f1e5]/95 shadow-[0_14px_32px_rgba(42,53,34,0.08)] backdrop-blur-md'
          : 'border-b border-[#ece3d1] bg-[#fbf7ef]'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 sm:px-6">
        <Logo tone="dark" />
        <nav className="hidden lg:flex items-center gap-1" aria-label="Ana navigasyon">
          {NAV.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? 'bg-[#e8eddc] text-[#3f5d33]'
                    : 'text-[#4e5b48] hover:bg-white hover:text-[#203024]'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden xl:flex items-center gap-2 rounded-full border border-[#e3dac8] bg-white/80 px-3 py-2 text-xs font-medium text-[#5b6554]">
            <MapPin className="h-3.5 w-3.5 text-[#5d7342]" />
            Tekirdağ / Süleymanpaşa
          </div>
          <a
            href={CONTACTS.hasan.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 rounded-xl bg-[#3f5d33] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(63,93,51,0.2)] transition hover:bg-[#304829]"
          >
            <WhatsappIcon className="h-4 w-4" />
            WhatsApp
          </a>
          <button
            type="button"
            aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-[#203024] hover:bg-white lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-[#ece3d1] bg-[#fbf7ef] transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-auto flex max-w-[1200px] flex-col gap-1 px-4 py-3">
          {NAV.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                  active ? 'bg-[#e8eddc] text-[#3f5d33]' : 'text-[#4e5b48] hover:bg-white'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
          <div className="mt-2 flex flex-col gap-2">
            <a
              href={CONTACTS.hasan.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#3f5d33] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#304829]"
            >
              <WhatsappIcon className="h-4 w-4" /> Hasan Özlü - {CONTACTS.hasan.phoneDisplay}
            </a>
            <a
              href={CONTACTS.burhan.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#3f5d33] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#304829]"
            >
              <WhatsappIcon className="h-4 w-4" /> Burhan Göçmen - {CONTACTS.burhan.phoneDisplay}
            </a>
            <a
              href={`tel:${CONTACTS.hasan.tel}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#dfd6c4] bg-white px-4 py-2.5 text-sm font-semibold text-[#203024] hover:bg-[#f4efe3]"
            >
              <Phone className="h-4 w-4" /> Hemen Ara
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

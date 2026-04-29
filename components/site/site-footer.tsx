import Link from 'next/link'
import { MapPin, Clock, Phone, Tractor } from 'lucide-react'
import { Logo } from './logo'
import { WhatsappIcon } from './whatsapp-icon'
import { CONTACT_LIST, CONTACTS, ADDRESS, WORKING_HOURS, MAPS_LINK } from '@/lib/contact'

const NAV = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/traktorler', label: 'Traktörler' },
  { href: '/tarim-ekipmanlari', label: 'Tarım Ekipmanları' },
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/iletisim', label: 'İletişim' },
]

export function SiteFooter() {
  return (
    <footer className="mt-16 bg-[#253325] text-[#f3eee3]">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo tone="light" className="group" />
            <p className="text-sm leading-relaxed text-[#d5dbc9]">
              Tekirdağ / Süleymanpaşa&apos;da krediye uygun, düşük saatli ve yüksek model 2. el traktör ve tarım ekipmanları.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#c6d4b0]">
              <Tractor className="h-3.5 w-3.5" />
               Traktörde Güvenin Adresi
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-white">
              Hızlı Menü
            </h3>
            <ul className="space-y-2 text-sm">
              {NAV.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[#d5dbc9] transition-colors hover:text-[#ffffff]">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-white">
              İletişim
            </h3>
            <ul className="space-y-3 text-sm">
              {CONTACT_LIST.map((contact) => (
                <li key={contact.key} className="flex items-start gap-2">
                  <WhatsappIcon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  <a
                    href={contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#f3eee3] hover:text-white"
                  >
                    {contact.name}<br />
                    <span className="font-mono text-[13px] text-[#c7cfbb]">{contact.phoneDisplay}</span>
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                <a href={`tel:${CONTACTS.hasan.tel}`} className="text-[#d5dbc9] hover:text-white">
                  Hemen ara
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-white">
              Adres & Saatler
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#d5dbc9] hover:text-white"
                >
                  {ADDRESS.line1},<br />
                  {ADDRESS.line2},<br />
                  {ADDRESS.line3}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                <span className="text-[#d5dbc9]">
                  {WORKING_HOURS.weekdays}: {WORKING_HOURS.weekdayHours}<br />
                  {WORKING_HOURS.sunday}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-[#bbc6ae]">
            © {new Date().getFullYear()} Ekin Traktör Motorlu Araçlar. Tüm hakları saklıdır.
          </p>
          <p className="text-xs text-[#bbc6ae]">Tekirdağ / Süleymanpaşa</p>
        </div>
      </div>
    </footer>
  )
}

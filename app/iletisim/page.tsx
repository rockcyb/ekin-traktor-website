import type { Metadata } from 'next'
import { Phone, Clock, MapPin, ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/site/page-hero'
import { ContactForm } from '@/components/site/contact-form'
import { WhatsappIcon } from '@/components/site/whatsapp-icon'
import { FadeIn } from '@/components/ui/animate'
import { CONTACT_LIST, CONTACTS, ADDRESS, WORKING_HOURS, MAPS_EMBED_URL, MAPS_LINK } from '@/lib/contact'
import Link from 'next/link'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'İletişim | Ekin Traktör Motorlu Araçlar Tekirdağ',
  description:
    'Ekin Traktör Motorlu Araçlar iletişim bilgileri, WhatsApp numaraları, adres, harita ve iletişim formu. Tekirdağ Süleymanpaşa’daki galerimize kolayca ulaşın.',
  path: '/iletisim',
  keywords: ['Ekin Traktör iletişim', 'Tekirdağ traktör iletişim', 'Süleymanpaşa traktör galerisi adres'],
})

export default function IletisimPage() {
  return (
    <>
      <PageHero
        eyebrow="İletişim"
        title="Bize"
        accent="ulaşın"
        description="Soru, stok bilgisi, kredi ve takas için WhatsApp en hızlı yoldur. İki satış temsilcimiz de size yardımcı olmaktan mutluluk duyar."
      />

      {/* CONTACT CARDS */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-14">
          <div className="grid gap-5 md:grid-cols-2">
            {CONTACT_LIST.map((c, i) => (
              <FadeIn key={c.tel} delay={i * 0.1}>
                <div className="group relative overflow-hidden rounded-2xl bg-white p-7 shadow-[0_8px_30px_rgba(0,0,0,0.05)] ring-1 ring-gray-100 transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(16,185,129,0.15)] hover:ring-emerald-200">
                  <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg">
                    <WhatsappIcon className="h-6 w-6" />
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-emerald-700">Satış Temsilcisi</div>
                  <h3 className="mt-1 font-display text-2xl font-bold text-gray-900">{c.name}</h3>
                  <div className="mt-2 font-mono text-lg text-gray-800">{c.phoneDisplay}</div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <a
                      href={c.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-500"
                    >
                      <WhatsappIcon className="h-4 w-4" /> WhatsApp ile İletişime Geç
                    </a>
                    <a
                      href={`tel:${c.tel}`}
                      className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-800 transition hover:bg-gray-50"
                    >
                      <Phone className="h-4 w-4" /> Hemen Ara
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ADDRESS / HOURS + MAP */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-14">
          <div className="grid gap-8 lg:grid-cols-5">
            <FadeIn className="lg:col-span-2">
              <div className="rounded-2xl bg-white p-7 shadow-[0_8px_30px_rgba(0,0,0,0.05)] ring-1 ring-gray-100">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-gray-900">Adres</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-gray-700">
                  {ADDRESS.line1}<br />
                  {ADDRESS.line2}<br />
                  {ADDRESS.line3}
                </p>
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-emerald-700 hover:underline"
                >
                  Haritada aç <ArrowRight className="h-3.5 w-3.5" />
                </a>

                <div className="mt-6 h-px bg-gray-100" />

                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
                    <Clock className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-gray-900">Çalışma Saatleri</h3>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  <li className="flex items-center justify-between">
                    <span>{WORKING_HOURS.weekdays}</span>
                    <span className="font-mono font-semibold text-gray-900">{WORKING_HOURS.weekdayHours}</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Pazar</span>
                    <span className="font-mono font-semibold text-red-600">Kapalı</span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn className="lg:col-span-3" delay={0.1}>
              <div className="relative aspect-[4/3] lg:aspect-[16/10] overflow-hidden rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] ring-1 ring-gray-100">
                <iframe
                  src={MAPS_EMBED_URL}
                  title="Ekin Traktör konumu"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full"
                  allowFullScreen
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <FadeIn>
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-700 ring-1 ring-emerald-200">
                İletişim Formu
              </span>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
                Bize mesajınızı <span className="text-emerald-600">WhatsApp</span> üzerinden iletin
              </h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Formu doldurduğunuzda mesajınız WhatsApp üzerinden seçtiğiniz satış temsilcimize iletilecektir. Bu sayede size daha hızlı dönüş yapabiliriz.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-sm">
                <Link
                  href="/traktorler"
                  className="rounded-full border border-[#d9dfd0] bg-white px-3 py-1.5 font-medium text-[#42503c] transition hover:border-emerald-300 hover:text-[#203024]"
                >
                  Traktör ilanları
                </Link>
                <Link
                  href="/tarim-ekipmanlari"
                  className="rounded-full border border-[#d9dfd0] bg-white px-3 py-1.5 font-medium text-[#42503c] transition hover:border-emerald-300 hover:text-[#203024]"
                >
                  Tarım ekipmanları
                </Link>
                <Link
                  href="/hakkimizda"
                  className="rounded-full border border-[#d9dfd0] bg-white px-3 py-1.5 font-medium text-[#42503c] transition hover:border-emerald-300 hover:text-[#203024]"
                >
                  Hakkımızda
                </Link>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>• Stok, model ve saat bilgisi sorgulama</li>
                <li>• Kredi ve takas seçenekleri</li>
                <li>• Tarım ekipmanları ve uyumlu traktör önerileri</li>
              </ul>
            </FadeIn>
            <FadeIn delay={0.1}>
              <ContactForm />
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}

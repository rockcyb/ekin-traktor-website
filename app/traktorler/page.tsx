import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, BadgeCheck, CalendarDays, Clock3, MapPin, Tractor } from 'lucide-react'
import { PageHero } from '@/components/site/page-hero'
import { WhatsappButtons } from '@/components/site/whatsapp-buttons'
import { FadeIn } from '@/components/ui/animate'
import { CONTACTS } from '@/lib/contact'
import { TRACTOR_LISTINGS } from '@/lib/listings'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: '2. El Traktör Tekirdağ | Krediye Uygun ve Düşük Saatli Traktörler',
  description:
    'Ekin Traktör Tekirdağ stokundaki krediye uygun, düşük saatli ve yüksek model 2. el traktör ilanlarını inceleyin. Güncel fiyat ve stok bilgisi için bize ulaşın.',
  path: '/traktorler',
  keywords: ['2. el traktör Tekirdağ', 'krediye uygun traktör', 'düşük saatli traktör', 'yüksek model traktör'],
})

export default function TraktorlerPage() {
  const whatsappMsg =
    'Merhaba, Ekin Traktör web sitesinden ulaşıyorum. Güncel traktör stokunuz ve fiyatları hakkında bilgi almak istiyorum.'

  return (
    <>
      <PageHero
        eyebrow="Traktörler"
        title="Güncel"
        accent="traktör ilanlarımız"
        description="Krediye uygun, temiz ve özenle seçilmiş traktörleri buradan inceleyebilirsiniz. Detay ve fiyat bilgisi için bize yazabilirsiniz."
      />

      <section className="bg-[#fbf8f1]">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <FadeIn>
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7d8a67]">
                  Stoktaki traktörler
                </div>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#203024] sm:text-4xl">
                  Hazırdaki ilanlarımız
                </h2>
                <div className="mt-4 flex flex-wrap gap-2 text-sm">
                  <Link
                    href="/tarim-ekipmanlari"
                    className="rounded-full border border-[#ddd4c0] bg-white px-3 py-1.5 text-[#42503c] transition hover:border-[#c8bea8] hover:text-[#203024]"
                  >
                    Tarım ekipmanlarına göz at
                  </Link>
                  <Link
                    href="/iletisim"
                    className="rounded-full border border-[#ddd4c0] bg-white px-3 py-1.5 text-[#42503c] transition hover:border-[#c8bea8] hover:text-[#203024]"
                  >
                    İletişime geç
                  </Link>
                  <Link
                    href="/hakkimizda"
                    className="rounded-full border border-[#ddd4c0] bg-white px-3 py-1.5 text-[#42503c] transition hover:border-[#c8bea8] hover:text-[#203024]"
                  >
                    Bizi tanıyın
                  </Link>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <div className="rounded-full bg-[#edf1e5] px-4 py-2 text-sm font-medium text-[#42503c]">
                {TRACTOR_LISTINGS.length} adet ilan
              </div>
            </FadeIn>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {TRACTOR_LISTINGS.map((listing, index) => (
              <FadeIn key={listing.id} delay={index * 0.08}>
                <article className="overflow-hidden rounded-[30px] border border-[#e4dac7] bg-white shadow-[0_18px_42px_rgba(42,53,34,0.08)]">
                  <div className="grid gap-3 p-3 sm:grid-cols-[1.35fr_0.65fr] sm:p-4">
                    <div className="relative min-h-[320px] overflow-hidden rounded-[24px] bg-[#f3ecdf]">
                      <Image
                        src={listing.image}
                        alt={`${listing.brand} ${listing.model} ${listing.year} model ikinci el traktör - Ekin Traktör Tekirdağ`}
                        fill
                        sizes="(min-width: 640px) 60vw, 100vw"
                        className="object-cover"
                      />
                      <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/92 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#4a693b]">
                        <BadgeCheck className="h-3.5 w-3.5" />
                        {listing.condition}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-1">
                      {listing.gallery.slice(1, 5).map((image, imageIndex) => (
                        <div
                          key={image}
                          className="relative min-h-[110px] overflow-hidden rounded-[20px] bg-[#f3ecdf]"
                        >
                          <Image
                            src={image}
                            alt={`${listing.brand} ${listing.model} traktör ilan fotoğrafı ${imageIndex + 2} - Ekin Traktör`}
                            fill
                            sizes="(min-width: 640px) 20vw, 50vw"
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-7 sm:p-8">
                    <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7d8a67]">
                      {listing.brand}
                    </div>
                    <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#203024]">
                      {listing.title}
                    </h3>
                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl bg-[#f6f1e7] px-4 py-3 text-sm text-[#42503c]">
                        <div className="font-semibold text-[#203024]">Fiyat</div>
                        <div className="mt-1">{listing.price}</div>
                      </div>
                      <div className="rounded-2xl bg-[#f6f1e7] px-4 py-3 text-sm text-[#42503c]">
                        <div className="font-semibold text-[#203024]">Model</div>
                        <div className="mt-1">{listing.year}</div>
                      </div>
                    </div>

                    <div className="mt-5 grid gap-3 text-sm text-[#5b6554] sm:grid-cols-2">
                      <div className="flex items-center gap-2 rounded-2xl border border-[#eee5d3] px-4 py-3">
                        <Clock3 className="h-4 w-4 text-[#4a693b]" />
                        {listing.hours}
                      </div>
                      <div className="flex items-center gap-2 rounded-2xl border border-[#eee5d3] px-4 py-3">
                        <CalendarDays className="h-4 w-4 text-[#4a693b]" />
                        {listing.model}
                      </div>
                      <div className="flex items-center gap-2 rounded-2xl border border-[#eee5d3] px-4 py-3 sm:col-span-2">
                        <MapPin className="h-4 w-4 text-[#4a693b]" />
                        {listing.location}
                      </div>
                    </div>

                    <div className="mt-6 flex flex-col gap-3">
                      <div>
                        <Link
                          href={listing.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl bg-[#3f5d33] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#304829]"
                        >
                          İlanı Gör
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                        <div className="mt-2 text-xs leading-relaxed text-[#6a705f]">
                          <div className="font-medium text-[#4f5848]">{CONTACTS.burhan.name}</div>
                          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                            <a href={`tel:${CONTACTS.burhan.tel}`} className="transition hover:text-[#304829]">
                              {CONTACTS.burhan.phoneDisplay}
                            </a>
                            <a
                              href={CONTACTS.burhan.whatsapp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-medium text-[#3f5d33] transition hover:text-[#304829]"
                            >
                              WhatsApp
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="inline-flex items-center gap-2 text-sm text-[#6a705f]">
                        <Tractor className="h-4 w-4 text-[#4a693b]" />
                        Kaynak: {listing.source}
                      </div>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#efe7d7]">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6">
          <FadeIn>
            <div className="rounded-[30px] border border-[#e0d5bf] bg-[#fffdf8] px-8 py-10 text-center shadow-[0_20px_52px_rgba(42,53,34,0.08)] sm:px-12">
              <h3 className="font-display text-3xl font-bold tracking-tight text-[#203024]">
                Farklı traktör arıyorsanız bize yazın
              </h3>
              <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-[#5b6554]">
                Güncel stok, krediye uygun seçenekler ve yeni gelen ilanlar için WhatsApp üzerinden hızlıca bilgi verelim.
              </p>
              <div className="mt-6 flex justify-center">
                <WhatsappButtons message={whatsappMsg} />
              </div>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-sm text-[#5b6554]">
                <Link href="/tarim-ekipmanlari" className="font-semibold text-[#3f5d33] hover:text-[#304829]">
                  Tarım ekipmanlarını inceleyin
                </Link>
                <Link href="/hakkimizda" className="font-semibold text-[#3f5d33] hover:text-[#304829]">
                  Hakkımızda
                </Link>
                <Link href="/iletisim" className="font-semibold text-[#3f5d33] hover:text-[#304829]">
                  İletişim
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

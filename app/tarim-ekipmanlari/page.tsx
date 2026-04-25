import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { PageHero } from '@/components/site/page-hero'
import { WhatsappButtons } from '@/components/site/whatsapp-buttons'
import { FadeIn } from '@/components/ui/animate'
import { EQUIPMENT_LISTINGS } from '@/lib/listings'

export const metadata = {
  title: 'Tarım Ekipmanları | Ekin Traktör Motorlu Araçlar',
  description:
    'Gübre serpme makinası, pulluk, römork ve daha birçok tarım ekipmanı. Güncel stok için WhatsApp üzerinden iletişime geçin.',
}

export default function TarimEkipmanlariPage() {
  const whatsappMsg =
    'Merhaba, Ekin Traktör web sitesinden ulaşıyorum. Güncel tarım ekipmanları stokunuz hakkında bilgi almak istiyorum.'

  return (
    <>
      <PageHero
        eyebrow="Tarım Ekipmanları"
        title="Güncel"
        accent="ekipman ilanlarımız"
        description="İşinizi kolaylaştıracak tarım ekipmanlarını buradan inceleyebilirsiniz. Detay ve fiyat bilgisi için bize yazabilirsiniz."
      />

      <section className="bg-[#fbf8f1]">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <FadeIn>
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7d8a67]">
                  Stoktaki ekipmanlar
                </div>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#203024] sm:text-4xl">
                  Hazırdaki ekipmanlarımız
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <div className="rounded-full bg-[#edf1e5] px-4 py-2 text-sm font-medium text-[#42503c]">
                {EQUIPMENT_LISTINGS.length} adet ekipman
              </div>
            </FadeIn>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {EQUIPMENT_LISTINGS.map((listing, index) => (
              <FadeIn key={listing.id} delay={index * 0.08}>
                <article className="overflow-hidden rounded-[30px] border border-[#e4dac7] bg-white shadow-[0_18px_42px_rgba(42,53,34,0.08)]">
                  <div className="grid gap-3 p-3 sm:grid-cols-[1.35fr_0.65fr] sm:p-4">
                    <div className="relative min-h-[320px] overflow-hidden rounded-[24px] bg-[#f3ecdf]">
                      <Image
                        src={listing.image}
                        alt={listing.title}
                        fill
                        sizes="(min-width: 640px) 60vw, 100vw"
                        className="object-cover"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-1">
                      {listing.gallery.slice(1, 5).map((image, imageIndex) => (
                        <div
                          key={image}
                          className="relative min-h-[110px] overflow-hidden rounded-[20px] bg-[#f3ecdf]"
                        >
                          <Image
                            src={image}
                            alt={`${listing.title} görüntü ${imageIndex + 2}`}
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
                        <div className="font-semibold text-[#203024]">Kategori</div>
                        <div className="mt-1">{listing.category}</div>
                      </div>
                    </div>

                    <div className="mt-5 grid gap-3 text-sm text-[#5b6554]">
                      <div className="flex items-center gap-2 rounded-2xl border border-[#eee5d3] px-4 py-3">
                        <MapPin className="h-4 w-4 text-[#4a693b]" />
                        {listing.location}
                      </div>
                    </div>

                    <div className="mt-6">
                      <Link
                        href={listing.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-[#3f5d33] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#304829]"
                      >
                        İlanı Gör
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
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
                Farklı ekipman arıyorsanız bize yazın
              </h3>
              <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-[#5b6554]">
                Gübre serpme makinası, pulluk, römork ve diğer ekipmanlar için güncel stok bilgisini WhatsApp üzerinden paylaşalım.
              </p>
              <div className="mt-6 flex justify-center">
                <WhatsappButtons message={whatsappMsg} />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CreditCard, MapPin, ShieldCheck, Tractor } from 'lucide-react'
import { PageHero } from '@/components/site/page-hero'
import { WhatsappButtons } from '@/components/site/whatsapp-buttons'
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/animate'
import { ABOUT_IMAGE } from '@/lib/images'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Hakkımızda | Ekin Traktör Motorlu Araçlar Tekirdağ',
  description:
    'Ekin Traktör Motorlu Araçlar Tekirdağ Süleymanpaşa’da krediye uygun traktör, düşük saatli traktör ve tarım ekipmanları alanında güvenilir yerel galeri olarak hizmet verir.',
  path: '/hakkimizda',
  keywords: ['Ekin Traktör', 'Ekin Traktör Motorlu Araçlar', 'Tekirdağ traktör galerisi'],
})

const HIGHLIGHTS = [
  {
    icon: Tractor,
    title: 'Seçilmiş araçlar',
    desc: 'Temiz, bakımlı ve satışa uygun traktörler.',
  },
  {
    icon: CreditCard,
    title: 'Kredi desteği',
    desc: 'Evrak ve ekspertiz sürecinde hızlı yönlendirme.',
  },
  {
    icon: ShieldCheck,
    title: 'Dürüst bilgi',
    desc: 'Araç durumu net anlatılır, süreç uzatılmaz.',
  },
]

export default function HakkimizdaPage() {
  return (
    <>
      <PageHero
        eyebrow="Hakkımızda"
        title="Sıcak, sade ve"
        accent="güvenilir satış anlayışı"
        description="Ekin Traktör olarak Tekirdağ Süleymanpaşa'da ikinci el traktör ve tarım ekipmanlarında çiftçiye kolay ulaşılabilir, net ve güvenilir bir hizmet sunuyoruz."
      />

      <section className="bg-[#fbf8f1]">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <FadeIn>
              <div className="relative min-h-[340px] overflow-hidden rounded-[30px] border border-[#e4dac7] bg-[#e8e1d3] shadow-[0_18px_42px_rgba(42,53,34,0.08)]">
                <Image
                  src={ABOUT_IMAGE}
                  alt="Ekin Traktör Motorlu Araçlar Tekirdağ galerisinde traktör ve tarım ekipmanı alanı"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <div className="rounded-[30px] border border-[#e4dac7] bg-white p-8 shadow-[0_18px_42px_rgba(42,53,34,0.06)] sm:p-10">
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7d8a67]">
                  Kısaca biz
                </div>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#203024] sm:text-4xl">
                  Uzun metin değil, güven veren satış
                </h2>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-[#5b6554]">
                  <p>
                    Ekin Traktör, Traktörcüler Sitesi içinde çiftçinin ihtiyacına uygun traktörü ve ekipmanı daha kolay bulması için çalışan yerel bir galeridir.
                  </p>
                  <p>
                    Bizim için önemli olan doğru aracı dürüstçe göstermek, kredi ve takas sürecinde yardımcı olmak ve müşteriyi yormadan sonuca ulaştırmaktır.
                  </p>
                </div>

                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#edf1e5] px-4 py-2 text-sm font-medium text-[#42503c]">
                  <MapPin className="h-4 w-4 text-[#4a693b]" />
                  Tekirdağ / Süleymanpaşa
                </div>

                <div className="mt-8">
                  <WhatsappButtons
                    variant="outline-light"
                    message="Merhaba, Ekin Traktör hakkında bilgi almak istiyorum."
                  />
                </div>
                <div className="mt-5 flex flex-wrap gap-2 text-sm">
                  <Link
                    href="/traktorler"
                    className="rounded-full border border-[#ddd4c0] bg-[#fbf8f1] px-3 py-1.5 text-[#42503c] transition hover:border-[#c8bea8] hover:text-[#203024]"
                  >
                    Traktör ilanlarını inceleyin
                  </Link>
                  <Link
                    href="/tarim-ekipmanlari"
                    className="rounded-full border border-[#ddd4c0] bg-[#fbf8f1] px-3 py-1.5 text-[#42503c] transition hover:border-[#c8bea8] hover:text-[#203024]"
                  >
                    Tarım ekipmanlarına bakın
                  </Link>
                  <Link
                    href="/iletisim"
                    className="rounded-full border border-[#ddd4c0] bg-[#fbf8f1] px-3 py-1.5 text-[#42503c] transition hover:border-[#c8bea8] hover:text-[#203024]"
                  >
                    İletişime geçin
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-[#f5efe2]">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20">
          <FadeIn>
            <div className="max-w-2xl">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7d8a67]">
                Bizi tercih edenler
              </div>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#203024] sm:text-4xl">
                Çünkü süreç basit, bilgi net
              </h2>
            </div>
          </FadeIn>

          <Stagger className="mt-10 grid gap-4 md:grid-cols-3" staggerDelay={0.08}>
            {HIGHLIGHTS.map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-[24px] border border-[#e4dac7] bg-white p-6 shadow-[0_14px_34px_rgba(42,53,34,0.06)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf1e5] text-[#4a693b]">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-[#203024]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5b6554]">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-[#fbf8f1]">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6">
          <FadeIn>
            <div className="rounded-[30px] border border-[#e0d5bf] bg-[#fffdf8] px-8 py-10 text-center shadow-[0_20px_52px_rgba(42,53,34,0.08)] sm:px-12">
              <h3 className="font-display text-3xl font-bold tracking-tight text-[#203024]">
                Traktör bakıyorsanız bize yazın
              </h3>
              <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-[#5b6554]">
                Güncel stok, krediye uygun seçenekler ve tarım ekipmanları için hızlıca bilgi verelim.
              </p>
              <div className="mt-6 flex justify-center">
                <WhatsappButtons
                  message="Merhaba, traktör ve ekipman seçenekleri hakkında bilgi almak istiyorum."
                />
              </div>
              <Link
                href="/iletisim"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#3f5d33] hover:text-[#304829]"
              >
                İletişim sayfasına git
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

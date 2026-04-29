import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  BadgeCheck,
  Check,
  CreditCard,
  Gauge,
  MapPin,
  ShieldCheck,
  Tractor,
  Wrench,
} from 'lucide-react'
import { WhatsappButtons } from '@/components/site/whatsapp-buttons'
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/animate'
import { MAPS_LINK, WORKING_HOURS } from '@/lib/contact'
import { ABOUT_IMAGE, EQUIPMENT_IMAGE, HERO_IMAGE, TRACTORS_IMAGE } from '@/lib/images'
import { createPageMetadata } from '@/lib/seo'

const ADVANTAGES = [
  {
    icon: CreditCard,
    title: 'Krediye Uygun',
    desc: 'Ekspertiz ve evrak sürecine uygun araçlar.',
  },
  {
    icon: Gauge,
    title: 'Düşük Saatli',
    desc: 'Bakımlı ve temiz ikinci el seçenekler.',
  },
  {
    icon: ShieldCheck,
    title: 'Güvenle Satış',
    desc: 'Aracı net anlatan, şeffaf galeri anlayışı.',
  },
]

const CATEGORY_SECTIONS = [
  {
    href: '/traktorler',
    image: TRACTORS_IMAGE,
    imageAlt: 'Ekin Traktör Tekirdağ galerisinde sıralanmış düşük saatli ikinci el traktörler',
    icon: Tractor,
    eyebrow: 'Traktörler',
    title: 'Yüksek model, düşük saatli traktörler',
    text: 'Bahçe ve tarla işine uygun, krediye elverişli 2. el traktör seçenekleri.',
    cta: 'Traktörlere Bak',
  },
  {
    href: '/tarim-ekipmanlari',
    image: EQUIPMENT_IMAGE,
    imageAlt: 'Ekin Traktör Tekirdağ stokunda bulunan tarım ekipmanları ve tarla makineleri',
    icon: Wrench,
    eyebrow: 'Tarım Ekipmanları',
    title: 'İşe uygun ekipmanı birlikte seçelim',
    text: 'Pulluk, römork, çapa ve farklı ekipmanlar için hızlı bilgi alın.',
    cta: 'Ekipmanları Gör',
  },
]

const TRUST_POINTS = [
  'Araç durumu açık ve net anlatılır',
  'Kredi ve takas konusunda hızlı yönlendirme yapılır',
  'Araçları galerimizde yerinde inceleyebilirsiniz',
  'Tekirdağ’da kolay ulaşılabilir konumdayız',
]

export const metadata: Metadata = createPageMetadata({
  title: 'Ekin Traktör | 2. El Traktör ve Tarım Ekipmanları Tekirdağ',
  description:
    'Ekin Traktör Motorlu Araçlar Tekirdağ Süleymanpaşa’da krediye uygun traktör, düşük saatli traktör, yüksek model traktör ve tarım ekipmanları sunar.',
  path: '/',
  keywords: [
    'Ekin Traktör Tekirdağ',
    'Ekin Traktör Motorlu Araçlar',
    '2. el traktör Tekirdağ',
    'tarım ekipmanları Tekirdağ',
  ],
})

export default function Home() {
  const heroMsg =
    'Merhaba, Ekin Traktör web sitesinden ulaşıyorum. Krediye uygun, düşük saatli ve yüksek model traktörler hakkında bilgi almak istiyorum.'

  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-[#e7ddca] bg-[#f6f1e7]">
        <div className="absolute inset-0">
          <Image
            src={HERO_IMAGE}
            alt="Ekin Traktör için tarlada ilerleyen yüksek model ikinci el traktör görseli"
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(28,40,28,0.72)_0%,rgba(28,40,28,0.48)_38%,rgba(246,241,231,0.22)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,247,232,0.22),transparent_30%)]" />
        </div>

        <div className="relative mx-auto grid max-w-[1200px] gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
          <div className="max-w-2xl">
            <FadeIn>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#f3efe5] backdrop-blur">
                <MapPin className="h-3.5 w-3.5" />
                Tekirdağ / Süleymanpaşa
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Krediye uygun, düşük saatli ve{' '}
                <Link
                  href="/traktorler"
                  className="inline-block underline decoration-white/55 decoration-[0.08em] underline-offset-[0.14em] transition hover:text-[#f4f0df] hover:decoration-white"
                  aria-label="Yüksek model traktörler stok sayfasına git"
                >
                  yüksek model traktörler
                </Link>
              </h1>
            </FadeIn>
            <FadeIn delay={0.16}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-[#ece7da] sm:text-lg">
                Ekin Traktör&apos;de temiz ikinci el traktörleri ve tarım ekipmanlarını kısa yoldan, net bilgiyle ve güvenle bulursunuz.
              </p>
            </FadeIn>
            <FadeIn delay={0.24}>
              <div className="mt-8">
                <WhatsappButtons message={heroMsg} size="lg" />
              </div>
            </FadeIn>
            <FadeIn delay={0.32}>
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-[#f1ecdf]">
                {['Krediye uygun seçenekler', 'Düşük saatli stoklar', 'Yerinde dürüst bilgi'].map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-white/18 bg-white/10 px-4 py-2 backdrop-blur"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <div className="flex h-full items-end">
              <div className="w-full rounded-[28px] border border-white/20 bg-[#fbf6ed]/90 p-6 shadow-[0_28px_60px_rgba(25,35,26,0.22)] backdrop-blur">
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5d7342]">
                  Galeride sizi neler bekliyor?
                </div>
                <div className="mt-4 space-y-4">
                  {[
                    'Krediye uygun traktör seçenekleri',
                    'Düşük saatli ve yüksek model araçlar',
                    'WhatsApp üzerinden hızlı stok bilgisi',
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-[#ebe2d0] bg-white px-4 py-3 text-sm font-medium text-[#203024]"
                    >
                      <BadgeCheck className="h-5 w-5 shrink-0 text-[#4a693b]" />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl bg-[#edf1e5] px-4 py-4 text-sm text-[#42503c]">
                  <div className="font-semibold text-[#203024]">Çalışma Saatleri</div>
                  <div className="mt-1">
                    {WORKING_HOURS.weekdays}: {WORKING_HOURS.weekdayHours}
                  </div>
                  <div>{WORKING_HOURS.sunday}</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-[#fbf8f1]">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20">
          <FadeIn>
            <div className="max-w-2xl">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7d8a67]">
                Kısa ve net
              </div>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#203024] sm:text-4xl">
                Aradığınız traktörü lafı uzatmadan bulalım
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#5b6554]">
                Bizde odak ürün, fiyat ve doğru yönlendirmedir. Karmaşık değil, anlaşılır bir satış süreci sunuyoruz.
              </p>
            </div>
          </FadeIn>

          <Stagger className="mt-10 grid gap-4 md:grid-cols-3" staggerDelay={0.08}>
            {ADVANTAGES.map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-[24px] border border-[#e6decc] bg-white p-6 shadow-[0_14px_34px_rgba(42,53,34,0.06)]">
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

      <section className="bg-[#f5efe2]">
        <div className="mx-auto max-w-[1200px] space-y-8 px-4 py-16 sm:px-6 sm:py-20">
          {CATEGORY_SECTIONS.map((section, index) => (
            <FadeIn key={section.href} delay={index * 0.08}>
              <div className="overflow-hidden rounded-[32px] border border-[#e4dac7] bg-white shadow-[0_18px_44px_rgba(42,53,34,0.08)]">
                <div className="grid lg:grid-cols-2">
                  <div className={`relative min-h-[300px] ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <Image
                      src={section.image}
                      alt={section.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center p-8 sm:p-10 lg:p-12">
                    <div className="max-w-md">
                      <div className="inline-flex items-center gap-2 rounded-full bg-[#edf1e5] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#5d7342]">
                        <section.icon className="h-3.5 w-3.5" />
                        {section.eyebrow}
                      </div>
                      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-[#203024] sm:text-4xl">
                        {section.title}
                      </h2>
                      <p className="mt-4 text-base leading-relaxed text-[#5b6554]">{section.text}</p>
                      <Link
                        href={section.href}
                        className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#3f5d33] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#304829]"
                      >
                        {section.cta}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-[#fbf8f1]">
        <div className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 sm:py-[4.5rem]">
          <FadeIn>
            <div className="overflow-hidden rounded-[30px] border border-[#e4dac7] bg-white shadow-[0_18px_42px_rgba(42,53,34,0.08)]">
              <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
                <div className="relative min-h-[240px] border-b border-[#ece3d1] bg-[#e8e1d3] lg:min-h-[100%] lg:border-b-0 lg:border-r">
                  <Image
                    src={ABOUT_IMAGE}
                    alt="Ekin Traktör Motorlu Araçlar Tekirdağ galerisinde sergilenen traktörler ve tarım makineleri"
                    fill
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(35,44,30,0.08)_0%,rgba(35,44,30,0.34)_100%)]" />
                  <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/25 bg-[#f7f1e7]/88 px-4 py-3 backdrop-blur sm:inset-x-6 sm:bottom-6">
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6d7b56]">
                      Tekirdağ Galeri
                    </div>
                    <div className="mt-1 text-sm font-medium text-[#203024]">
                      Traktörü yerinde görün, aklınızdaki her soruyu aynı anda netleştirelim.
                    </div>
                  </div>
                </div>

                <div className="p-6 pb-24 sm:p-8 sm:pb-10 lg:p-10">
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7d8a67]">
                    GÜVEN BÖLÜMÜ
                  </div>
                  <h2 className="mt-3 max-w-xl font-display text-3xl font-bold leading-tight tracking-tight text-[#203024] sm:text-[2.15rem]">
                    Sade, şeffaf ve güvenilir traktör satışı
                  </h2>
                  <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#5b6554] sm:text-base">
                    Ekin Traktör&apos;de amaç uzun uzun anlatmak değil; aracı net bilgilerle, doğru fiyatla ve güvenle sunmaktır.
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {TRUST_POINTS.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-[20px] border border-[#ebe2d0] bg-[linear-gradient(180deg,#fffdf9_0%,#f7f2e8_100%)] px-4 py-4 shadow-[0_10px_24px_rgba(42,53,34,0.05)]"
                      >
                        <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e8efdb] text-[#446237]">
                          <Check className="h-4 w-4" />
                        </div>
                        <p className="text-sm font-medium leading-6 text-[#334233]">{item}</p>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/hakkimizda"
                    className="mt-7 inline-flex w-fit items-center gap-2 rounded-xl border border-[#d5cbb7] bg-[#f8f3e9] px-4 py-3 text-sm font-semibold text-[#3f5d33] transition hover:border-[#c7bda8] hover:bg-[#f2eadb] hover:text-[#304829]"
                  >
                    Bizi yakından tanıyın
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-[#efe7d7]">
        <div className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 sm:py-16">
          <FadeIn>
            <div className="rounded-[30px] border border-[#e0d5bf] bg-[#fffdf8] p-6 pb-24 shadow-[0_20px_52px_rgba(42,53,34,0.08)] sm:p-8 sm:pb-8 lg:p-10">
              <div className="mx-auto max-w-3xl">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7d8a67]">
                    İletişim / WhatsApp
                  </div>
                  <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#203024] sm:text-4xl">
                    Güncel stok için bize yazın
                  </h2>
                  <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-[#5b6554] sm:text-base">
                    Traktör, ekipman, kredi ve takas için WhatsApp’tan hızlıca ulaşabilirsiniz.
                  </p>
                  <div className="mt-5">
                    <WhatsappButtons
                      message="Merhaba, Ekin Traktör web sitesinden ulaşıyorum. Güncel stok ve fiyat bilgisi almak istiyorum."
                      className="w-full"
                      showPhone={false}
                      variant="outline-light"
                    />
                  </div>

                  <a
                    href={MAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center justify-between gap-3 rounded-[20px] border border-[#d6ddc5] bg-[#f8f4ea] px-4 py-3.5 shadow-[0_10px_24px_rgba(42,53,34,0.05)] transition hover:border-[#b8c59d] hover:bg-[#f4eedf]"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white text-[#4a693b] shadow-[0_6px_14px_rgba(42,53,34,0.08)]">
                        <MapPin className="h-4.5 w-4.5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-[#203024]">Galerimizi ziyaret edin</div>
                        <div className="text-sm text-[#5b6554]">Süleymanpaşa / Tekirdağ</div>
                      </div>
                    </div>
                    <div className="shrink-0 rounded-full border border-[#cdd6b7] bg-white px-3 py-1.5 text-xs font-semibold text-[#3f5d33]">
                      Yol Tarifi Al
                    </div>
                  </a>

                  <Link
                    href="/iletisim"
                    className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl border border-[#d8ceb8] bg-white px-5 py-3 text-sm font-semibold text-[#203024] transition hover:bg-[#f4efe3]"
                  >
                    İletişim sayfasına git
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

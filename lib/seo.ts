import type { Metadata } from 'next'
import { ADDRESS, CONTACTS, MAPS_LINK, MAPS_DESTINATION, WORKING_HOURS } from '@/lib/contact'

export const SITE_URL = 'https://ekintraktor.tr'
export const SITE_NAME = 'Ekin Traktör Motorlu Araçlar'
export const OG_IMAGE = '/og-image.png'

export const DEFAULT_KEYWORDS = [
  'Ekin Traktör',
  'Ekin Traktör Motorlu Araçlar',
  '2. el traktör Tekirdağ',
  'krediye uygun traktör',
  'düşük saatli traktör',
  'yüksek model traktör',
  'tarım ekipmanları Tekirdağ',
]

type PageMetadataInput = {
  title: string
  description: string
  path: string
  keywords?: string[]
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageMetadataInput): Metadata {
  const allKeywords = [...new Set([...DEFAULT_KEYWORDS, ...keywords])]

  return {
    title,
    description,
    keywords: allKeywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: 'tr_TR',
      type: 'website',
      images: [
        {
          url: OG_IMAGE,
          alt: 'Ekin Traktör Motorlu Araçlar galeri görseli',
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#localbusiness`,
  name: SITE_NAME,
  alternateName: 'Ekin Traktör',
  url: SITE_URL,
  image: `${SITE_URL}${OG_IMAGE}`,
  logo: `${SITE_URL}/logo.jpg`,
  description:
    'Tekirdağ Süleymanpaşa’da krediye uygun, düşük saatli ve yüksek model 2. el traktörler ile tarım ekipmanları sunan yerel galeri.',
  telephone: CONTACTS.hasan.tel,
  priceRange: '₺₺₺',
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${ADDRESS.line1}, ${ADDRESS.line2}`,
    addressLocality: 'Süleymanpaşa',
    addressRegion: 'Tekirdağ',
    postalCode: '59200',
    addressCountry: 'TR',
  },
  areaServed: {
    '@type': 'Place',
    name: 'Tekirdağ',
  },
  hasMap: MAPS_LINK,
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: '09:00',
      closes: '19:00',
    },
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      telephone: CONTACTS.hasan.tel,
      areaServed: 'TR',
      availableLanguage: ['tr'],
    },
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      telephone: CONTACTS.burhan.tel,
      areaServed: 'TR',
      availableLanguage: ['tr'],
    },
  ],
  knowsAbout: [
    '2. el traktör',
    'krediye uygun traktör',
    'düşük saatli traktör',
    'yüksek model traktör',
    'tarım ekipmanları',
  ],
  sameAs: [MAPS_LINK],
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': SITE_URL,
  },
  location: {
    '@type': 'Place',
    name: SITE_NAME,
    address: MAPS_DESTINATION,
  },
}

export const CONTACTS = {
  hasan: {
    name: 'Hasan Özlü',
    phoneDisplay: '0 (546) 820 49 89',
    tel: '+905468204989',
    whatsapp: 'https://wa.me/905468204989',
  },
  burhan: {
    name: 'Burhan Göçmen',
    phoneDisplay: '0 (541) 450 70 71',
    tel: '+905414507071',
    whatsapp: 'https://wa.me/905414507071',
  },
} as const

export const CONTACT_ORDER = ['burhan', 'hasan'] as const
export const CONTACT_LIST = CONTACT_ORDER.map((key) => ({
  key,
  ...CONTACTS[key],
}))

export const ADDRESS = {
  line1: 'Beşikçi Sokak, Karadeniz Mahallesi',
  line2: 'Trabzon Caddesi, Traktörcüler Sitesi No:35/5',
  line3: '59200 Süleymanpaşa / Tekirdağ',
  full: 'Beşikçi Sokak, Karadeniz Mahallesi, Trabzon Caddesi, Traktörcüler Sitesi No:35/5, 59200 Süleymanpaşa / Tekirdağ',
}

export const MAPS_DESTINATION =
  'Ekin Traktör Motorlu Araçlar, Beşikçi Sokak, Karadeniz Mahallesi, Trabzon Caddesi, Traktörcüler Sitesi No:35/5, 59200 Süleymanpaşa / Tekirdağ'

export const WORKING_HOURS = {
  weekdays: 'Pzt - Cmt',
  weekdayHours: '09:00 - 19:00',
  sunday: 'Pazar Kapalı',
}

export const MAPS_EMBED_URL =
  'https://www.google.com/maps?q=' +
  encodeURIComponent(ADDRESS.full) +
  '&output=embed'

export const MAPS_LINK =
  'https://www.google.com/maps/dir/?api=1&destination=' +
  encodeURIComponent(MAPS_DESTINATION)

export const EMPTY_STATE_MESSAGE =
  'Stoklarımız yakında güncellenecektir. Güncel traktör ve ekipman seçenekleri için bizimle WhatsApp üzerinden iletişime geçebilirsiniz.'

export function buildWhatsappMessage(base: string, message: string) {
  const text = encodeURIComponent(message)
  return `${base}?text=${text}`
}

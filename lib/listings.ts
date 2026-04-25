export type TractorListing = {
  id: string
  title: string
  brand: string
  model: string
  year: string
  hours: string
  price: string
  location: string
  condition: string
  transmission?: string
  image: string
  gallery: string[]
  href: string
  source: string
}

export type EquipmentListing = {
  id: string
  title: string
  brand: string
  model: string
  category: string
  price: string
  location: string
  condition: string
  feature?: string
  image: string
  gallery: string[]
  href: string
  source: string
}

export const TRACTOR_LISTINGS: TractorListing[] = [
  {
    id: 'deutz-fahr-5095e-gs-plus2-2025',
    title: '0 Saatte 2025 Model Deutz-Fahr 5095E GS Plus2',
    brand: 'Deutz-Fahr',
    model: '5095E GS Plus2',
    year: '2025',
    hours: '0 saat',
    price: '2.950.000 TL',
    location: 'Tekirdağ / Süleymanpaşa',
    condition: 'Sıfır ayarında',
    transmission: 'GS Plus2',
    image: '/listings/deutz-fahr-5095e-gs-plus2/2.png',
    gallery: [
      '/listings/deutz-fahr-5095e-gs-plus2/1.png',
      '/listings/deutz-fahr-5095e-gs-plus2/2.png',
      '/listings/deutz-fahr-5095e-gs-plus2/3.png',
      '/listings/deutz-fahr-5095e-gs-plus2/4.png',
      '/listings/deutz-fahr-5095e-gs-plus2/5.png',
    ],
    href: 'https://www.sahibinden.com/ilan/is-makineleri-sanayi-tarim-makineleri-traktor-0-sifir-saatte-2025-model-deutz-fahr-5095e-gs-plus2-1289622802/detay',
    source: 'sahibinden.com',
  },
  {
    id: 'new-holland-t6-145-autocommand-cvt-2014',
    title: '2014 New Holland T6.145 Klimalı Kabinli Autocommand CVT',
    brand: 'New Holland',
    model: 'T6.145 Autocommand CVT',
    year: '2014',
    hours: '3.600 saat',
    price: '2.650.000 TL',
    location: 'Tekirdağ / Süleymanpaşa',
    condition: 'Temiz kullanılmış',
    transmission: 'Autocommand CVT',
    image: '/listings/new-holland-t6-140-cvt/1.png',
    gallery: [
      '/listings/new-holland-t6-140-cvt/1.png',
      '/listings/new-holland-t6-140-cvt/2.png',
      '/listings/new-holland-t6-140-cvt/3.png',
      '/listings/new-holland-t6-140-cvt/4.png',
    ],
    href: 'https://www.sahibinden.com/ilan/is-makineleri-sanayi-tarim-makineleri-traktor-2014-new-holland-t6.140-klimali-kabinli-autocommand-cvt-sanziman-1302299907/detay',
    source: 'sahibinden.com',
  },
  {
    id: 'massey-ferguson-5713-sl-2017',
    title: '2017 Massey Ferguson 5713 SL Dyna-4 On TLS\'li',
    brand: 'Massey Ferguson',
    model: '5713 SL',
    year: '2017',
    hours: 'Saat bilgisi için arayın',
    price: '2.650.000 TL',
    location: 'Tekirdağ / Süleymanpaşa',
    condition: 'Temiz kullanılmış',
    transmission: 'Dyna-4',
    image: '/listings/massey-ferguson-5713-sl/1.png',
    gallery: [
      '/listings/massey-ferguson-5713-sl/1.png',
      '/listings/massey-ferguson-5713-sl/2.png',
      '/listings/massey-ferguson-5713-sl/3.png',
      '/listings/massey-ferguson-5713-sl/4.png',
      '/listings/massey-ferguson-5713-sl/5.png',
    ],
    href: 'https://www.sahibinden.com/ilan/is-makineleri-sanayi-tarim-makineleri-traktor-2017-model-massey-ferguson-5713-sl-dyna4-on-tls-li-1293979793/detay',
    source: 'sahibinden.com',
  },
  {
    id: 'new-holland-t5-120-blue-master-2024',
    title: '0 Saatte 2024 Model New Holland T5.120 Blue Master',
    brand: 'New Holland',
    model: 'T5.120',
    year: '2024',
    hours: '0 saat',
    price: '2.950.000 TL',
    location: 'Tekirdağ / Süleymanpaşa',
    condition: 'Sıfır ayarında',
    transmission: 'Blue Master',
    image: '/listings/new-holland-t5-120-blue-master/1.png',
    gallery: [
      '/listings/new-holland-t5-120-blue-master/1.png',
      '/listings/new-holland-t5-120-blue-master/2.png',
      '/listings/new-holland-t5-120-blue-master/3.png',
      '/listings/new-holland-t5-120-blue-master/4.png',
      '/listings/new-holland-t5-120-blue-master/5.png',
    ],
    href: 'https://www.sahibinden.com/ilan/is-makineleri-sanayi-tarim-makineleri-traktor-0-saatte-2024-model-new-holland-t5.120-blue-master-1289621933/detay',
    source: 'sahibinden.com',
  },
  {
    id: 'deutz-fahr-5080e-plus2-2025',
    title: '0 Saatte 2025 Model Deutz-Fahr 5080E Plus2',
    brand: 'Deutz-Fahr',
    model: '5080E',
    year: '2025',
    hours: '0 saat',
    price: '2.500.000 TL',
    location: 'Tekirdağ / Süleymanpaşa',
    condition: 'Sıfır ayarında',
    transmission: 'Plus2',
    image: '/listings/deutz-fahr-5080e-plus2/1.png',
    gallery: [
      '/listings/deutz-fahr-5080e-plus2/1.png',
      '/listings/deutz-fahr-5080e-plus2/2.png',
      '/listings/deutz-fahr-5080e-plus2/3.png',
      '/listings/deutz-fahr-5080e-plus2/4.png',
      '/listings/deutz-fahr-5080e-plus2/5.png',
    ],
    href: 'https://www.sahibinden.com/ilan/is-makineleri-sanayi-tarim-makineleri-traktor-0-sifir-saatte-2025-model-deutz-fahr-5080e-plus2-1289625975/detay',
    source: 'sahibinden.com',
  },
]

export const EQUIPMENT_LISTINGS: EquipmentListing[] = [
  {
    id: 'agrimix-speed-control-gubre-serpme-makinasi',
    title: 'Agrimix Speed Control Gübre Serpme Makinası',
    brand: 'Agrimix',
    model: 'DR2X',
    category: 'Gübre Dağıtma & Serpme',
    price: '420.000 TL',
    location: 'Tekirdağ / Süleymanpaşa',
    condition: 'Temiz durumda',
    feature: 'Speed Control',
    image: '/equipment/agrimix-speed-control-gubre-serpme-makinasi/1.png',
    gallery: [
      '/equipment/agrimix-speed-control-gubre-serpme-makinasi/1.png',
      '/equipment/agrimix-speed-control-gubre-serpme-makinasi/2.png',
      '/equipment/agrimix-speed-control-gubre-serpme-makinasi/3.png',
    ],
    href: 'https://www.sahibinden.com/ilan/is-makineleri-sanayi-tarim-makineleri-gubreleme-agrimix-speed-control-gubre-serpme-makinasi-1307548451/detay',
    source: 'sahibinden.com',
  },
  {
    id: 'brevi-3mt-dik-rotavator',
    title: 'Sıfır Brevi 3mt Dik Rotavatör',
    brand: 'Brevi',
    model: '3MT Dik Rotavatör',
    category: 'Toprak İşleme',
    price: '420.000 TL',
    location: 'Tekirdağ / Süleymanpaşa',
    condition: 'Sıfır durumda',
    feature: '3 metre',
    image: '/equipment/brevi-3mt-dik-rotavator/1.png',
    gallery: [
      '/equipment/brevi-3mt-dik-rotavator/1.png',
      '/equipment/brevi-3mt-dik-rotavator/2.png',
      '/equipment/brevi-3mt-dik-rotavator/3.png',
      '/equipment/brevi-3mt-dik-rotavator/4.png',
    ],
    href: 'https://www.sahibinden.com/ilan/is-makineleri-sanayi-tarim-makineleri-toprak-isleme-sifir-brevi-3mt-dik-rotavator-1306764485/detay',
    source: 'sahibinden.com',
  },
  {
    id: 'agrimix-tronik',
    title: 'İtalyan Devi Agrimix Tronik',
    brand: 'Agrimix',
    model: 'Tronik',
    category: 'Gübre Dağıtma & Serpme',
    price: '320.000 TL',
    location: 'Tekirdağ / Süleymanpaşa',
    condition: 'Temiz durumda',
    feature: 'Elektronik kontrollü',
    image: '/equipment/agrimix-tronik/1.png',
    gallery: [
      '/equipment/agrimix-tronik/1.png',
      '/equipment/agrimix-tronik/2.png',
      '/equipment/agrimix-tronik/3.png',
      '/equipment/agrimix-tronik/4.png',
    ],
    href: 'https://www.sahibinden.com/ilan/is-makineleri-sanayi-tarim-makineleri-gubreleme-italyan-devi-agrimix-tronik-1261893988/detay',
    source: 'sahibinden.com',
  },
  {
    id: 'agrimix-gubre-serpme-makinesi',
    title: 'İtalyan Devi Agrimix Gübre Serpme Makinesi',
    brand: 'Agrimix',
    model: 'Gübre Serpme Makinesi',
    category: 'Gübre Dağıtma & Serpme',
    price: '200.000 TL',
    location: 'Tekirdağ / Süleymanpaşa',
    condition: 'Temiz durumda',
    feature: 'Çift disk',
    image: '/equipment/agrimix-gubre-serpme-makinesi/1.png',
    gallery: [
      '/equipment/agrimix-gubre-serpme-makinesi/1.png',
      '/equipment/agrimix-gubre-serpme-makinesi/2.png',
      '/equipment/agrimix-gubre-serpme-makinesi/3.png',
      '/equipment/agrimix-gubre-serpme-makinesi/4.png',
    ],
    href: 'https://www.sahibinden.com/ilan/is-makineleri-sanayi-tarim-makineleri-gubreleme-italyan-devi-agrimix-gubre-serpme-makinesi-1261879075/detay',
    source: 'sahibinden.com',
  },
]

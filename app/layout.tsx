import type { Metadata } from 'next'
import { DM_Sans, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { ChunkLoadErrorHandler } from '@/components/chunk-load-error-handler'
import { SiteHeader } from '@/components/site/site-header'
import { SiteFooter } from '@/components/site/site-footer'
import { FloatingWhatsApp } from '@/components/site/floating-whatsapp'
import { SpeedInsights } from '@vercel/speed-insights/next'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' })
const jakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-display' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'Ekin Traktör Motorlu Araçlar | 2. El Traktör ve Tarım Ekipmanları — Tekirdağ',
  description: "Tekirdağ Süleymanpaşa'da krediye uygun, düşük saatli ve yüksek model 2. el traktör ve tarım ekipmanları. Güvenilir, şeffaf ve uygun fiyat garantisiyle Ekin Traktör Motorlu Araçlar.",
  keywords: ['2. el traktör', 'traktör Tekirdağ', 'tarım ekipmanları', 'krediye uygun traktör', 'Süleymanpaşa traktör', 'Ekin Traktör'],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Ekin Traktör Motorlu Araçlar',
    description: 'Krediye uygun, düşük saatli ve yüksek model 2. el traktörler — Tekirdağ/Süleymanpaşa',
    images: ['/og-image.png'],
    type: 'website',
    locale: 'tr_TR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js"></script>
      </head>
      <body className={`${dmSans.variable} ${jakartaSans.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col bg-background">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
          <FloatingWhatsApp />
          <Toaster position="top-center" richColors />
          <ChunkLoadErrorHandler />
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}

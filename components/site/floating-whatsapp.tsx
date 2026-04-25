'use client'

import { useEffect, useState } from 'react'
import { CONTACTS } from '@/lib/contact'
import { WhatsappIcon } from './whatsapp-icon'
import { X } from 'lucide-react'

export function FloatingWhatsApp() {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-3 sm:bottom-5 sm:right-5">
      {open && (
        <div className="w-[260px] animate-in fade-in slide-in-from-bottom-2 duration-200 overflow-hidden rounded-xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.18)] ring-1 ring-black/5">
          <div className="flex items-center justify-between bg-gray-900 px-4 py-3 text-white">
            <div className="flex items-center gap-2">
              <WhatsappIcon className="h-5 w-5 text-emerald-400" />
              <span className="text-sm font-semibold">WhatsApp ile İletişim</span>
            </div>
            <button
              aria-label="Kapat"
              onClick={() => setOpen(false)}
              className="rounded p-1 text-gray-400 hover:bg-white/10 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="divide-y divide-gray-100">
            <a
              href={CONTACTS.hasan.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-emerald-50"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <WhatsappIcon className="h-4 w-4" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">{CONTACTS.hasan.name}</div>
                <div className="font-mono text-xs text-gray-500">{CONTACTS.hasan.phoneDisplay}</div>
              </div>
            </a>
            <a
              href={CONTACTS.burhan.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-emerald-50"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <WhatsappIcon className="h-4 w-4" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">{CONTACTS.burhan.name}</div>
                <div className="font-mono text-xs text-gray-500">{CONTACTS.burhan.phoneDisplay}</div>
              </div>
            </a>
          </div>
        </div>
      )}

      <button
        aria-label="WhatsApp ile iletişime geç"
        onClick={() => setOpen((v) => !v)}
        className="relative flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full bg-emerald-600 text-white shadow-[0_8px_24px_rgba(16,185,129,0.45)] transition hover:scale-110 hover:bg-emerald-500 sm:h-14 sm:w-14"
      >
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-emerald-500/40" aria-hidden="true" />
        <WhatsappIcon className="h-7 w-7" />
      </button>
    </div>
  )
}

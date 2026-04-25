import { Inbox, Wrench } from 'lucide-react'
import { WhatsappButtons } from './whatsapp-buttons'
import { EMPTY_STATE_MESSAGE } from '@/lib/contact'

interface Props {
  icon?: 'inbox' | 'wrench'
  message?: string
  whatsappMessage?: string
}

export function EmptyListings({ icon = 'inbox', message, whatsappMessage }: Props) {
  const Icon = icon === 'wrench' ? Wrench : Inbox
  const text = message ?? EMPTY_STATE_MESSAGE

  return (
    <div className="mx-auto max-w-3xl">
      <div className="relative overflow-hidden rounded-[28px] border border-[#e6ddca] bg-[#fbf8f1] p-8 shadow-[0_18px_44px_rgba(50,62,44,0.08)] sm:p-12">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#93a279] via-[#4a693b] to-[#93a279]" />
        <div className="flex flex-col items-center text-center">
          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#edf1e5] text-[#4a693b] ring-4 ring-[#f3ede1]">
            <Icon className="h-8 w-8" />
          </div>
          <h3 className="font-display text-2xl font-bold tracking-tight text-[#203024]">
            Stok Güncellemesi Yakında
          </h3>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-[#5b6554]">
            {text}
          </p>
          <div className="mt-8 w-full">
            <WhatsappButtons message={whatsappMessage} variant="solid" className="justify-center" />
          </div>
          <p className="mt-4 text-xs text-[#7a7d6a]">
            Stokta güncel traktör veya ekipman durumunu hemen öğrenmek için WhatsApp üzerinden bize ulaşabilirsiniz.
          </p>
        </div>
      </div>
    </div>
  )
}

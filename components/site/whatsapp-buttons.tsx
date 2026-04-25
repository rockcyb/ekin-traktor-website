import { CONTACTS } from '@/lib/contact'
import { WhatsappIcon } from './whatsapp-icon'

interface Props {
  message?: string
  size?: 'default' | 'lg'
  className?: string
  variant?: 'solid' | 'outline-dark' | 'outline-light'
  showPhone?: boolean
}

function buildHref(base: string, message?: string) {
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}

export function WhatsappButtons({
  message,
  size = 'default',
  className = '',
  variant = 'solid',
  showPhone = true,
}: Props) {
  const sizeCls = size === 'lg' ? 'px-6 py-3.5 text-base' : 'px-5 py-3 text-sm'
  const base = `inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 ${sizeCls}`

  const variantCls = {
    solid:
      'bg-[#3f5d33] text-white shadow-[0_10px_24px_rgba(63,93,51,0.24)] hover:-translate-y-0.5 hover:bg-[#304829] hover:shadow-[0_14px_30px_rgba(63,93,51,0.32)]',
    'outline-dark':
      'bg-white text-[#223126] shadow-[0_8px_20px_rgba(32,48,36,0.12)] hover:bg-[#f3ede1] hover:text-[#3f5d33]',
    'outline-light':
      'border border-[#93a279] bg-[#f8f4ea] text-[#3f5d33] hover:border-[#3f5d33] hover:bg-[#3f5d33] hover:text-white',
  }[variant]

  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <a
        href={buildHref(CONTACTS.hasan.whatsapp, message)}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${variantCls}`}
      >
        <WhatsappIcon className="h-5 w-5" />
        <span className="flex flex-col items-start leading-tight">
          <span>Hasan Özlü</span>
          {showPhone ? (
            <span className="font-mono text-[11px] opacity-80">{CONTACTS.hasan.phoneDisplay}</span>
          ) : null}
        </span>
      </a>
      <a
        href={buildHref(CONTACTS.burhan.whatsapp, message)}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${variantCls}`}
      >
        <WhatsappIcon className="h-5 w-5" />
        <span className="flex flex-col items-start leading-tight">
          <span>Burhan Göçmen</span>
          {showPhone ? (
            <span className="font-mono text-[11px] opacity-80">{CONTACTS.burhan.phoneDisplay}</span>
          ) : null}
        </span>
      </a>
    </div>
  )
}

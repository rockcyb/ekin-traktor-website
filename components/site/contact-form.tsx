'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { User, Mail, Phone as PhoneIcon, MessageSquare, Send } from 'lucide-react'
import { CONTACTS, CONTACT_ORDER } from '@/lib/contact'
import { WhatsappIcon } from './whatsapp-icon'

type FormState = {
  name: string
  phone: string
  email: string
  subject: string
  message: string
  contact: 'hasan' | 'burhan'
}

const INITIAL: FormState = {
  name: '',
  phone: '',
  email: '',
  subject: '',
  message: '',
  contact: 'burhan',
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL)
  const [submitting, setSubmitting] = useState(false)

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name?.trim() || !form.message?.trim()) {
      toast.error('Lütfen ad soyad ve mesaj alanlarını doldurun.')
      return
    }
    setSubmitting(true)

    const target = form.contact === 'burhan' ? CONTACTS.burhan : CONTACTS.hasan
    const lines = [
      'Merhaba, Ekin Traktör web sitesinden ulaşıyorum.',
      '',
      `Ad Soyad: ${form.name}`,
      form.phone ? `Telefon: ${form.phone}` : '',
      form.email ? `E-posta: ${form.email}` : '',
      form.subject ? `Konu: ${form.subject}` : '',
      '',
      'Mesaj:',
      form.message,
    ].filter(Boolean)

    const text = encodeURIComponent(lines.join('\n'))
    const url = `${target?.whatsapp}?text=${text}`

    try {
      if (typeof window !== 'undefined') {
        window.open(url, '_blank', 'noopener,noreferrer')
      }
      toast.success('WhatsApp açılıyor… Mesajınız hazır, gönderebilirsiniz.')
      setForm(INITIAL)
    } catch {
      toast.error('WhatsApp açılamadı. Lütfen doğrudan numaradan iletişime geçin.')
    } finally {
      setSubmitting(false)
    }
  }

  const inputCls =
    'w-full rounded-md border border-gray-200 bg-white pl-10 pr-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 shadow-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20'

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white p-6 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)] ring-1 ring-gray-100"
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-800">
            Ad Soyad <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={(e) => update('name', e.target.value)}
              placeholder="Adınız Soyadınız"
              className={inputCls}
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-gray-800">
            Telefon
          </label>
          <div className="relative">
            <PhoneIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              id="phone"
              type="tel"
              value={form.phone}
              onChange={(e) => update('phone', e.target.value)}
              placeholder="0 5XX XXX XX XX"
              className={inputCls}
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-800">
            E-posta
          </label>
          <div className="relative">
            <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => update('email', e.target.value)}
              placeholder="ornek@eposta.com"
              className={inputCls}
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-gray-800">
            Konu
          </label>
          <div className="relative">
            <MessageSquare className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              id="subject"
              type="text"
              value={form.subject}
              onChange={(e) => update('subject', e.target.value)}
              placeholder="Örn. Traktör stok sorgulama"
              className={inputCls}
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-800">
            Mesajınız <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            value={form.message}
            onChange={(e) => update('message', e.target.value)}
            placeholder="Bize nasıl yardımcı olabiliriz?"
            className="w-full rounded-md border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 shadow-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
            required
          />
        </div>

        <div className="sm:col-span-2">
          <label className="mb-2 block text-sm font-medium text-gray-800">Kime iletilsin?</label>
          <div className="grid gap-3 sm:grid-cols-2">
            {CONTACT_ORDER.map((key) => {
              const c = key === 'burhan' ? CONTACTS.burhan : CONTACTS.hasan
              const active = form.contact === key
              return (
                <label
                  key={key}
                  className={`flex cursor-pointer items-center gap-3 rounded-md border p-3 text-sm transition ${
                    active
                      ? 'border-emerald-500 bg-emerald-50 ring-2 ring-emerald-500/20'
                      : 'border-gray-200 bg-white hover:bg-gray-50'
                  }`}
                >
                  <input
                    type="radio"
                    name="contact"
                    value={key}
                    checked={active}
                    onChange={() => update('contact', key)}
                    className="h-4 w-4 accent-emerald-600"
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{c.name}</div>
                    <div className="font-mono text-xs text-gray-500">{c.phoneDisplay}</div>
                  </div>
                  <WhatsappIcon className="h-5 w-5 text-emerald-600" />
                </label>
              )
            })}
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(16,185,129,0.35)] transition hover:bg-emerald-500 hover:shadow-[0_6px_20px_rgba(16,185,129,0.45)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? (
          <>
            <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
            Gönderiliyor…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" /> WhatsApp ile Gönder
          </>
        )}
      </button>
      <p className="mt-3 text-center text-xs text-gray-500">
        Form göndermek için e-posta veya veri tabanı kullanılmaz. Mesajınız seçtiğiniz satış temsilcimizin WhatsApp&apos;ına iletilir.
      </p>
    </form>
  )
}

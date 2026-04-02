'use client'
import { useState } from 'react'
import { Icon } from './ui/Icon'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventDate: '',
    eventType: '',
    guestCount: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          eventDate: formData.eventDate,
          eventType: formData.eventType,
          guestCount: formData.guestCount ? Number(formData.guestCount) : undefined,
          message: formData.message
            ? `[Lead din contact page] ${formData.message}`
            : '[Lead din contact page]',
        }),
      })

      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex items-center gap-4 py-8 px-6 bg-pp-teal-light rounded-xl">
        <Icon name="check-circle" className="w-8 h-8 text-pp-teal-dark shrink-0" />
        <div>
          <p className="text-lg font-bold text-pp-heading">Mulțumim! Te contactăm în maxim 2 ore.</p>
          <p className="text-sm text-pp-muted mt-1">
            Sau sună direct:{' '}
            <a href="tel:0745800810" className="text-pp-magenta font-semibold">
              0745 800 810
            </a>
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-pp-heading mb-1.5">
            Nume complet *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-pp-heading/10 bg-white text-pp-heading text-sm focus:outline-none focus:ring-2 focus:ring-pp-magenta/30 focus:border-pp-magenta transition-colors"
            placeholder="Numele tău"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-pp-heading mb-1.5">
            Telefon *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-pp-heading/10 bg-white text-pp-heading text-sm focus:outline-none focus:ring-2 focus:ring-pp-magenta/30 focus:border-pp-magenta transition-colors"
            placeholder="07XX XXX XXX"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-pp-heading mb-1.5">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-pp-heading/10 bg-white text-pp-heading text-sm focus:outline-none focus:ring-2 focus:ring-pp-magenta/30 focus:border-pp-magenta transition-colors"
          placeholder="email@exemplu.ro"
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="eventDate" className="block text-sm font-semibold text-pp-heading mb-1.5">
            Data evenimentului *
          </label>
          <input
            type="date"
            id="eventDate"
            name="eventDate"
            required
            value={formData.eventDate}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-pp-heading/10 bg-white text-pp-heading text-sm focus:outline-none focus:ring-2 focus:ring-pp-magenta/30 focus:border-pp-magenta transition-colors"
          />
        </div>
        <div>
          <label htmlFor="eventType" className="block text-sm font-semibold text-pp-heading mb-1.5">
            Tip eveniment
          </label>
          <select
            id="eventType"
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-pp-heading/10 bg-white text-pp-heading text-sm focus:outline-none focus:ring-2 focus:ring-pp-magenta/30 focus:border-pp-magenta transition-colors"
          >
            <option value="">Selectează...</option>
            <option value="nunta">Nuntă</option>
            <option value="botez">Botez</option>
            <option value="majorat">Majorat / Aniversare</option>
            <option value="corporate">Eveniment Corporate</option>
            <option value="altele">Altele</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="guestCount" className="block text-sm font-semibold text-pp-heading mb-1.5">
          Număr aproximativ de invitați
        </label>
        <input
          type="number"
          id="guestCount"
          name="guestCount"
          value={formData.guestCount}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-pp-heading/10 bg-white text-pp-heading text-sm focus:outline-none focus:ring-2 focus:ring-pp-magenta/30 focus:border-pp-magenta transition-colors"
          placeholder="ex: 150"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-pp-heading mb-1.5">
          Mesaj
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-pp-heading/10 bg-white text-pp-heading text-sm focus:outline-none focus:ring-2 focus:ring-pp-magenta/30 focus:border-pp-magenta transition-colors resize-none"
          placeholder="Spune-ne mai multe despre evenimentul tău și ce servicii te interesează..."
        />
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-gold w-full py-4 rounded-full text-sm font-bold text-pp-heading disabled:opacity-60"
      >
        {status === 'loading' ? 'Se trimite...' : 'Trimite Cererea de Ofertă →'}
      </button>
      {status === 'error' && (
        <p className="text-xs text-red-500 text-center">
          Eroare la trimitere. Sună direct: <a href="tel:0745800810" className="text-pp-magenta font-semibold">0745 800 810</a>
        </p>
      )}
      <p className="text-xs text-pp-muted text-center">
        Răspundem în maxim 2 ore. Datele tale sunt confidențiale.
      </p>
    </form>
  )
}

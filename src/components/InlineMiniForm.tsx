'use client'
import { useState } from 'react'
import { Icon } from './ui/Icon'

interface InlineMiniFormProps {
  defaultEventType?: string
  source: string
  serviceName?: string
  compact?: boolean // 1-field phone-only version
}

export function InlineMiniForm({ defaultEventType, source, serviceName, compact }: InlineMiniFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  const [eventType, setEventType] = useState(defaultEventType || '')
  const [eventDate, setEventDate] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: compact ? '' : name,
          phone,
          eventType: compact ? '' : eventType,
          eventDate: compact ? '' : eventDate,
          message: `[Lead din ${source}]${serviceName ? ` Serviciu: ${serviceName}` : ''}`,
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
      <div className="flex items-center gap-3 py-4 px-6 bg-pp-teal-light rounded-xl">
        <Icon name="check-circle" className="w-6 h-6 text-pp-teal-dark shrink-0" />
        <div>
          <p className="text-sm font-bold text-pp-heading">Mulțumim! Te contactăm în maxim 2 ore.</p>
          <p className="text-xs text-pp-muted mt-0.5">Sau sună direct: <a href="tel:0745800810" className="text-pp-magenta font-semibold">0745 800 810</a></p>
        </div>
      </div>
    )
  }

  if (compact) {
    return (
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="tel"
          required
          placeholder="07XX XXX XXX"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="flex-1 px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm text-pp-heading placeholder:text-pp-muted focus:outline-none focus:ring-2 focus:ring-pp-magenta/30 focus:border-pp-magenta transition-shadow"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn-gold px-6 py-3 rounded-xl text-sm font-bold text-pp-heading whitespace-nowrap disabled:opacity-60"
        >
          {status === 'loading' ? 'Se trimite...' : 'Sună-mă'}
        </button>
      </form>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <input
          type="text"
          required
          placeholder="Numele tău"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="px-4 py-3.5 rounded-xl bg-white border border-gray-200 text-sm text-pp-heading placeholder:text-pp-muted focus:outline-none focus:ring-2 focus:ring-pp-magenta/30 focus:border-pp-magenta transition-shadow"
        />
        <input
          type="tel"
          required
          placeholder="07XX XXX XXX"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="px-4 py-3.5 rounded-xl bg-white border border-gray-200 text-sm text-pp-heading placeholder:text-pp-muted focus:outline-none focus:ring-2 focus:ring-pp-magenta/30 focus:border-pp-magenta transition-shadow"
        />
        <select
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
          className="px-4 py-3.5 rounded-xl bg-white border border-gray-200 text-sm text-pp-heading focus:outline-none focus:ring-2 focus:ring-pp-magenta/30 focus:border-pp-magenta transition-shadow appearance-none"
        >
          <option value="">Tip eveniment</option>
          <option value="Nuntă">Nuntă</option>
          <option value="Botez">Botez</option>
          <option value="Majorat">Majorat</option>
          <option value="Corporate">Corporate</option>
          <option value="Altele">Altele</option>
        </select>
        <input
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          className="px-4 py-3.5 rounded-xl bg-white border border-gray-200 text-sm text-pp-heading focus:outline-none focus:ring-2 focus:ring-pp-magenta/30 focus:border-pp-magenta transition-shadow"
        />
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-gold px-6 py-3.5 rounded-full text-sm font-bold text-pp-heading whitespace-nowrap disabled:opacity-60 self-end"
      >
        {status === 'loading' ? 'Se trimite...' : 'Cere Ofertă'}
      </button>
      {status === 'error' && (
        <p className="text-xs text-red-500">Eroare. Sună direct: 0745 800 810</p>
      )}
    </form>
  )
}

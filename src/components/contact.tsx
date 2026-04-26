import { useState } from 'react'
import DatePicker from 'react-datepicker'
import { FaChevronDown, FaRegCalendarAlt } from 'react-icons/fa'
import 'react-datepicker/dist/react-datepicker.css'
import './Contact.css'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

export default function Contact() {
  const [status, setStatus] = useState<FormState>('idle')
  const [eventDate, setEventDate] = useState<Date | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')

    const form = e.currentTarget
    const data = new FormData(form)

    // Append date manually since DatePicker is a controlled component
    if (eventDate) {
      data.append('event_date', eventDate.toLocaleDateString('en-GB'))
    }

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('success')
        setEventDate(null)
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-16 md:py-20 px-6 md:px-8 max-w-[860px] mx-auto">
      <p className="text-[0.7rem] tracking-[0.2em] uppercase text-gold font-medium mb-3">Get in Touch</p>
      <h2 className="font-display text-[2rem] md:text-[2.6rem] font-light leading-snug">
        <em className="italic text-brown">Book</em> Turner & Tweeds
      </h2>
      <div className="w-12 h-[1.5px] bg-gold my-6" />
      <p className="text-[0.93rem] text-body max-w-[520px] mb-8">
        Whether it's a wedding, private party, or corporate event — we'd love to hear
        from you. Fill in the form below and we'll get back to you shortly.
      </p>

      {status === 'success' ? (
        <div className="border border-gold bg-cream-mid p-8 text-center">
          <p className="font-display text-2xl font-light mb-2">Thank you!</p>
          <p className="text-[0.93rem] text-body">We'll be in touch soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field label="Your Name"     name="name"  type="text"  placeholder="Full name" required />
          <Field label="Email Address" name="email" type="email" placeholder="hello@example.com" required />

          {/* Event Type */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[0.7rem] tracking-[0.12em] uppercase text-muted font-medium">
              Event Type
            </label>
            <div className="relative">
              <select
                name="event_type"
                className="w-full appearance-none bg-cream border border-border pl-3.5 pr-10 py-2.5 text-[0.9rem] text-dark outline-none focus:border-gold transition-colors cursor-pointer"
              >
                <option value="">Select an event type</option>
                <option>Wedding</option>
                <option>Private Party</option>
                <option>Corporate Event</option>
                <option>Festival / Public Event</option>
                <option>Other</option>
              </select>
              <FaChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-muted" size={11} />
            </div>
          </div>

          {/* Event Date */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[0.7rem] tracking-[0.12em] uppercase text-muted font-medium">
              Event Date
            </label>
            <div className="relative">
              <DatePicker
                selected={eventDate}
                onChange={(date) => setEventDate(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="DD/MM/YYYY"
                minDate={new Date()}
                className="tt-datepicker"
                calendarClassName="tt-calendar"
                wrapperClassName="w-full"
              />
              <FaRegCalendarAlt className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-muted" size={14} />
            </div>
          </div>

          {/* Message */}
          <div className="col-span-1 md:col-span-2 flex flex-col gap-1.5">
            <label className="text-[0.7rem] tracking-[0.12em] uppercase text-muted font-medium">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us a little about your event..."
              className="bg-cream border border-border px-3.5 py-2.5 text-[0.9rem] text-dark outline-none focus:border-gold transition-colors resize-y"
            />
          </div>

          <div className="col-span-1 md:col-span-2">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="btn btn--dark disabled:opacity-50"
            >
              {status === 'submitting' ? 'Sending…' : 'Send Enquiry'}
            </button>
            {status === 'error' && (
              <p className="mt-3 text-[0.85rem] text-red-600">
                Something went wrong — please try again or email us directly.
              </p>
            )}
          </div>
        </form>
      )}
    </section>
  )
}

function Field({
  label, name, type, placeholder, required,
}: {
  label: string
  name: string
  type: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[0.7rem] tracking-[0.12em] uppercase text-muted font-medium">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="bg-cream border border-border px-3.5 py-2.5 text-[0.9rem] text-dark outline-none focus:border-gold transition-colors"
      />
    </div>
  )
}
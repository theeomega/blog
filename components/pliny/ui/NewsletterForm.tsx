// components/pliny/ui/NewsletterForm.tsx
'use client'

import { useState } from 'react'
import siteMetadata from '@/data/siteMetadata'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          payload: { email_address: email } // ✅ Buttondown expects this format
        }),
      })

      if (response.ok) {
        setMessage('Thank you for subscribing!')
        setEmail('')
      } else {
        const errorData = await response.json()
        setMessage(errorData.error || 'Failed to subscribe')
      }
    } catch (error) {
      setMessage('An unexpected error occurred')
    }
  }

  return (
    <div className="newsletter-form">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-72 rounded-md px-4 focus:ring-2 focus:ring-primary-600 dark:bg-gray-800"
        />
        <button
          type="submit"
          className="ml-3 rounded-md bg-primary-500 px-4 py-2 text-white hover:bg-primary-600 focus:ring-2 focus:ring-primary-600"
        >
          Subscribe
        </button>
      </form>
      {message && <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{message}</p>}
    </div>
  )
}

'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [result, setResult] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setResult('')

    const formData = new FormData(event.currentTarget)
    formData.append('access_key', 'e79fa461-4fa3-400b-be52-72d4d02d8432')
    formData.append('subject', 'Fude Development - General Inquiry')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()
      if (data.success) {
        setResult('success')
        ;(event.target as HTMLFormElement).reset()
      } else {
        setResult('error')
      }
    } catch {
      setResult('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (result === 'success') {
    return (
      <div className='text-center py-8'>
        <div className='w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4'>
          <svg className='w-7 h-7 text-green-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
          </svg>
        </div>
        <h3 className='text-lg font-semibold text-gray-900 mb-2'>Message Sent!</h3>
        <p className='text-gray-500 text-sm mb-4'>We will get back to you shortly.</p>
        <button
          onClick={() => setResult('')}
          className='text-sm text-blue-900 font-medium hover:underline'
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className='space-y-5'>
      <div>
        <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-1.5'>
          Email Address
        </label>
        <input
          id='email'
          type='email'
          name='email'
          required
          placeholder='you@example.com'
          className='w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-colors text-sm'
        />
      </div>

      <div>
        <label htmlFor='mobile' className='block text-sm font-medium text-gray-700 mb-1.5'>
          Mobile Number
        </label>
        <input
          id='mobile'
          type='tel'
          name='mobile'
          placeholder='+91 XXXXX XXXXX'
          className='w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-colors text-sm'
        />
      </div>

      <div>
        <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-1.5'>
          Message
        </label>
        <textarea
          id='message'
          name='message'
          required
          rows={4}
          placeholder='Tell us about your project...'
          className='w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-colors text-sm resize-none'
        />
      </div>

      <button
        type='submit'
        disabled={isSubmitting}
        className='w-full bg-blue-900 text-white py-2.5 px-6 rounded-lg font-medium text-sm hover:bg-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      {result === 'error' && (
        <p className='text-xs text-red-500 mt-2 text-center'>
          Something went wrong. Please try again later.
        </p>
      )}
    </form>
  )
}

'use client'

import { useForm, ValidationError } from '@formspree/react'

export default function ContactForm() {
  const [state, handleSubmit] = useForm('mkgzlead')

  if (state.succeeded) {
    return (
      <div className='text-center py-8'>
        <div className='w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4'>
          <svg className='w-7 h-7 text-green-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
          </svg>
        </div>
        <h3 className='text-lg font-semibold text-gray-900 mb-2'>Message Sent!</h3>
        <p className='text-gray-500 text-sm'>We will get back to you shortly.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-5'>
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
        <ValidationError prefix='Email' field='email' errors={state.errors} className='text-red-500 text-xs mt-1' />
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
        <ValidationError prefix='Mobile' field='mobile' errors={state.errors} className='text-red-500 text-xs mt-1' />
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
        <ValidationError prefix='Message' field='message' errors={state.errors} className='text-red-500 text-xs mt-1' />
      </div>

      <button
        type='submit'
        disabled={state.submitting}
        className='w-full bg-blue-900 text-white py-2.5 px-6 rounded-lg font-medium text-sm hover:bg-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
      >
        {state.submitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}

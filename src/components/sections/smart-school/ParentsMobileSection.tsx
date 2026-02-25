'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'

type Tab = 'bus' | 'chat' | 'notifications'

const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
  {
    id: 'bus',
    label: 'Bus Tracking',
    icon: (
      <svg className='w-3.5 h-3.5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 16H6m12 0h-2M3 7h18M3 11h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
      </svg>
    ),
  },
  {
    id: 'chat',
    label: 'AI Tutor',
    icon: (
      <svg className='w-3.5 h-3.5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' />
      </svg>
    ),
  },
  {
    id: 'notifications',
    label: 'Alerts',
    icon: (
      <svg className='w-3.5 h-3.5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9' />
      </svg>
    ),
  },
]

const chatMessages = [
  { from: 'student', text: 'What is photosynthesis?' },
  {
    from: 'ai',
    text: 'From your Class 7 Science textbook, Chapter 5:\n\nPhotosynthesis is the process by which green plants use sunlight, water and CO₂ to produce glucose and oxygen.\n\n6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂',
    source: 'Science — Ch.5, Pg. 74',
  },
  { from: 'student', text: 'Give me 3 key points to remember' },
  {
    from: 'ai',
    text: '1. Chlorophyll captures sunlight energy\n2. Occurs in chloroplasts of plant cells\n3. Produces oxygen as a byproduct',
    source: 'AI Summary',
  },
]

const notifications = [
  {
    type: 'bus',
    icon: '🚌',
    color: 'bg-green-100 text-green-700',
    dot: 'bg-green-500',
    title: 'Bus Arriving Soon',
    body: 'School Bus #7 is 4 minutes away from your stop.',
    time: '07:42 AM',
  },
  {
    type: 'homework',
    icon: '📚',
    color: 'bg-blue-100 text-blue-700',
    dot: 'bg-blue-500',
    title: 'Homework Due Tomorrow',
    body: 'Mathematics — Exercise 3.4, Q1–Q10 due on 22 Feb.',
    time: '06:00 PM',
  },
  {
    type: 'alert',
    icon: '✅',
    color: 'bg-amber-100 text-amber-700',
    dot: 'bg-amber-500',
    title: 'Student Boarded the Bus',
    body: 'Riya safely boarded Bus #7 at Perunduari Stop.',
    time: '08:05 AM',
  },
  {
    type: 'report',
    icon: '📊',
    color: 'bg-purple-100 text-purple-700',
    dot: 'bg-purple-500',
    title: 'Report Card Available',
    body: 'Q3 exam results are ready. Tap to view.',
    time: 'Yesterday',
  },
]

function BusTrackingScreen() {
  return (
    <div className='flex flex-col h-full gap-2'>
      {/* Header */}
      <div className='flex items-center gap-2 px-1'>
        <div className='w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center shadow'>
          <Image src='/images/icons/bus.png' alt='Bus' width={18} height={18} unoptimized />
        </div>
        <p className='text-[11px] font-bold text-gray-800'>Bus Tracking</p>
        <span className='ml-auto flex items-center gap-1 bg-green-100 text-green-700 text-[8px] font-bold px-1.5 py-0.5 rounded-full'>
          <span className='w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse' />
          LIVE
        </span>
      </div>

      {/* Map */}
      <div className='relative rounded-xl overflow-hidden mx-1' style={{ height: 140, background: 'linear-gradient(135deg, #e8f4f0 0%, #dbeafe 100%)' }}>
        <svg className='absolute inset-0 w-full h-full' viewBox='0 0 300 140' preserveAspectRatio='none'>
          {/* Building blocks */}
          <rect x='30' y='5' width='55' height='45' rx='3' fill='#c7d2dc' opacity='0.5' />
          <rect x='120' y='5' width='50' height='40' rx='3' fill='#c7d2dc' opacity='0.5' />
          <rect x='220' y='5' width='55' height='45' rx='3' fill='#c7d2dc' opacity='0.5' />
          <rect x='30' y='70' width='55' height='55' rx='3' fill='#c7d2dc' opacity='0.5' />
          <rect x='170' y='75' width='50' height='50' rx='3' fill='#c7d2dc' opacity='0.5' />
          {/* Roads */}
          <line x1='0' y1='100' x2='300' y2='100' stroke='#fff' strokeWidth='9' />
          <line x1='0' y1='100' x2='300' y2='100' stroke='#94a3b8' strokeWidth='7' />
          <line x1='100' y1='0' x2='100' y2='140' stroke='#fff' strokeWidth='8' />
          <line x1='100' y1='0' x2='100' y2='140' stroke='#94a3b8' strokeWidth='6' />
          <line x1='200' y1='0' x2='200' y2='140' stroke='#fff' strokeWidth='8' />
          <line x1='200' y1='0' x2='200' y2='140' stroke='#94a3b8' strokeWidth='6' />
          <line x1='0' y1='55' x2='300' y2='55' stroke='#e2e8f0' strokeWidth='6' />
          {/* Center dashes */}
          <line x1='0' y1='100' x2='300' y2='100' stroke='#fbbf24' strokeWidth='1.5' strokeDasharray='10 8' opacity='0.6' />
          {/* Route highlight */}
          <polyline
            points='9,103 57,103 100,59 150,59 200,101 240,101'
            fill='none' stroke='#2563eb' strokeWidth='2.5'
            strokeLinecap='round' strokeLinejoin='round'
            strokeDasharray='5 4' opacity='0.9'
          />
          {/* School pin */}
          <circle cx='240' cy='101' r='6' fill='#1e40af' stroke='white' strokeWidth='1.5' />
          <text x='240' y='120' textAnchor='middle' fontSize='8' fill='#1e40af' fontWeight='bold'>School</text>
          {/* Home pin */}
          <circle cx='9' cy='103' r='6' fill='#16a34a' stroke='white' strokeWidth='1.5' />
          <text x='9' y='122' textAnchor='middle' fontSize='8' fill='#16a34a' fontWeight='bold'>Home</text>
        </svg>

        {/* Framer Motion Animated Bus */}
        <motion.div
          style={{ position: 'absolute', zIndex: 10, translateX: '-50%', translateY: '-50%' }}
          animate={{
            left: ['3%', '19%', '33%', '50%', '65%', '79%', '65%', '50%', '33%', '19%', '3%'],
            top:  ['72%', '72%', '42%', '42%', '72%', '72%', '72%', '42%', '42%', '72%', '72%'],
          }}
          transition={{
            duration: 10,
            ease: 'easeInOut',
            repeat: Infinity,
            times: [0, 0.15, 0.28, 0.42, 0.58, 0.72, 0.75, 0.82, 0.88, 0.94, 1],
          }}
        >
          <div className='relative'>
            <span className='absolute -inset-2 rounded-full bg-blue-400/30 animate-location-ping' />
            <Image src='/images/icons/bus.png' alt='Bus' width={28} height={28} unoptimized />
          </div>
        </motion.div>
      </div>

      {/* Bus Info Card */}
      <div className='bg-blue-600 rounded-xl p-2.5 mx-1'>
        <div className='flex items-center justify-between mb-1.5'>
          <div>
            <p className='text-white font-semibold text-[11px]'>🚌 Bus #7 — On Route</p>
            <p className='text-blue-100 text-[9px]'>Driver: Ramesh Kumar</p>
          </div>
          <div className='bg-green-400 text-green-900 text-[8px] font-bold px-1.5 py-0.5 rounded-md'>LIVE</div>
        </div>
        <div className='flex gap-1.5'>
          <div className='flex-1 bg-blue-500/60 rounded-lg p-1.5 text-center'>
            <p className='text-white text-sm font-bold'>4 min</p>
            <p className='text-blue-100 text-[8px]'>ETA</p>
          </div>
          <div className='flex-1 bg-blue-500/60 rounded-lg p-1.5 text-center'>
            <p className='text-white text-sm font-bold'>2.1 km</p>
            <p className='text-blue-100 text-[8px]'>Distance</p>
          </div>
          <div className='flex-1 bg-blue-500/60 rounded-lg p-1.5 text-center'>
            <p className='text-white text-sm font-bold'>32</p>
            <p className='text-blue-100 text-[8px]'>Students</p>
          </div>
        </div>
      </div>

      {/* Stop list */}
      <div className='space-y-1 mx-1'>
        {[
          { stop: 'Perunduari Bus Stop', eta: 'Arrived', done: true },
          { stop: 'Market Road Stop', eta: '4 min', done: false, active: true },
          { stop: 'School Gate', eta: '14 min', done: false },
        ].map((s) => (
          <div key={s.stop} className='flex items-center gap-2 bg-gray-50 rounded-lg px-2 py-1.5'>
            <div className={`w-2 h-2 rounded-full flex-shrink-0 ${s.done ? 'bg-green-500' : s.active ? 'bg-blue-500 animate-pulse' : 'bg-gray-300'}`} />
            <span className='text-[9px] text-gray-700 flex-1 font-medium'>{s.stop}</span>
            <span className={`text-[9px] font-semibold ${s.done ? 'text-green-600' : s.active ? 'text-blue-600' : 'text-gray-400'}`}>{s.eta}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function AIChatScreen() {
  const [showTyping, setShowTyping] = useState(true)
  const [visibleMessages, setVisibleMessages] = useState(2)

  useEffect(() => {
    const t1 = setTimeout(() => { setShowTyping(false); setVisibleMessages(3) }, 2000)
    const t2 = setTimeout(() => { setShowTyping(true) }, 3500)
    const t3 = setTimeout(() => { setShowTyping(false); setVisibleMessages(4) }, 5500)
    const t4 = setTimeout(() => { setShowTyping(true); setVisibleMessages(2) }, 8000)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4) }
  }, [])

  return (
    <div className='flex flex-col h-full'>
      {/* AI Header */}
      <div className='flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl px-3 py-2 mx-1 mb-3'>
        <div className='w-8 h-8 bg-white/20 rounded-full flex items-center justify-center'>
          <span className='text-sm'>🤖</span>
        </div>
        <div>
          <p className='text-white text-xs font-semibold'>AI Study Assistant</p>
          <p className='text-blue-100 text-[10px]'>Answers from your textbooks</p>
        </div>
        <div className='ml-auto flex items-center gap-1'>
          <span className='w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse' />
          <span className='text-[10px] text-green-300'>Online</span>
        </div>
      </div>

      {/* Messages */}
      <div className='flex-1 space-y-2 overflow-hidden mx-1 mb-2'>
        {chatMessages.slice(0, visibleMessages).map((msg, i) => (
          <div key={i} className={`flex ${msg.from === 'student' ? 'justify-end' : 'justify-start'} animate-slide-in-right`}>
            {msg.from === 'ai' && (
              <div className='w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center mr-1.5 flex-shrink-0 mt-0.5'>
                <span className='text-[9px]'>🤖</span>
              </div>
            )}
            <div className={`max-w-[82%] ${msg.from === 'student'
              ? 'bg-blue-600 text-white rounded-2xl rounded-tr-sm'
              : 'bg-white border border-gray-100 text-gray-800 rounded-2xl rounded-tl-sm shadow-sm'
            } px-2.5 py-2`}>
              <p className='text-[10px] leading-relaxed whitespace-pre-line'>{msg.text}</p>
              {msg.source && (
                <div className='mt-1.5 pt-1.5 border-t border-gray-100 flex items-center gap-1'>
                  <span className='text-[9px] text-blue-500'>📖</span>
                  <span className='text-[9px] text-blue-500 font-medium'>{msg.source}</span>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {showTyping && (
          <div className='flex justify-start'>
            <div className='w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center mr-1.5 flex-shrink-0 mt-0.5'>
              <span className='text-[9px]'>🤖</span>
            </div>
            <div className='bg-white border border-gray-100 rounded-2xl rounded-tl-sm shadow-sm px-3 py-2.5 flex items-center gap-1'>
              <span className='w-1.5 h-1.5 bg-gray-400 rounded-full animate-typing-dot' />
              <span className='w-1.5 h-1.5 bg-gray-400 rounded-full animate-typing-dot-2' />
              <span className='w-1.5 h-1.5 bg-gray-400 rounded-full animate-typing-dot-3' />
            </div>
          </div>
        )}
      </div>

      {/* Input bar */}
      <div className='flex items-center gap-1.5 bg-gray-100 rounded-xl px-2.5 py-1.5 mx-1'>
        <span className='text-[11px] text-gray-400 flex-1'>Ask about any topic...</span>
        <div className='w-6 h-6 bg-blue-600 rounded-lg flex items-center justify-center'>
          <svg className='w-3 h-3 text-white' fill='currentColor' viewBox='0 0 20 20'>
            <path d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' />
          </svg>
        </div>
      </div>
    </div>
  )
}

function NotificationsScreen() {
  return (
    <div className='flex flex-col h-full'>
      <div className='flex items-center justify-between mb-3 mx-1'>
        <p className='text-xs font-bold text-gray-800'>Today&apos;s Alerts</p>
        <span className='bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full'>3 New</span>
      </div>
      <div className='space-y-2 flex-1 mx-1'>
        {notifications.map((n, i) => (
          <div
            key={n.title}
            className='bg-white border border-gray-100 rounded-xl p-2.5 shadow-sm animate-slide-in-right hover-lift flex items-start gap-2.5'
            style={{ animationDelay: `${i * 120}ms` }}
          >
            <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 ${n.color}`}>
              <span className='text-sm'>{n.icon}</span>
            </div>
            <div className='flex-1 min-w-0'>
              <div className='flex items-start justify-between gap-1'>
                <p className='text-[10px] font-bold text-gray-800 leading-tight'>{n.title}</p>
                <div className={`w-2 h-2 rounded-full flex-shrink-0 mt-0.5 ${i < 3 ? n.dot : 'bg-transparent'}`} />
              </div>
              <p className='text-[9px] text-gray-500 leading-relaxed mt-0.5'>{n.body}</p>
              <p className='text-[9px] text-gray-400 mt-1'>{n.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function PhoneMockup({ activeTab }: { activeTab: Tab }) {
  return (
    <div className='relative mx-auto' style={{ width: 220 }}>
      {/* Phone outer shell */}
      <div className='relative bg-gray-900 rounded-[36px] p-2 shadow-2xl animate-screen-glow' style={{ boxShadow: '0 0 0 2px #374151, 0 25px 60px rgba(0,0,0,0.5)' }}>
        {/* Side buttons */}
        <div className='absolute -left-1 top-20 w-1 h-8 bg-gray-700 rounded-l-lg' />
        <div className='absolute -left-1 top-32 w-1 h-12 bg-gray-700 rounded-l-lg' />
        <div className='absolute -left-1 top-48 w-1 h-12 bg-gray-700 rounded-l-lg' />
        <div className='absolute -right-1 top-28 w-1 h-16 bg-gray-700 rounded-r-lg' />

        {/* Screen bezel */}
        <div className='bg-[#0f172a] rounded-[28px] overflow-hidden' style={{ minHeight: 480 }}>
          {/* Status bar */}
          <div className='flex items-center justify-between px-5 py-2 bg-[#0f172a]'>
            <span className='text-white text-[9px] font-semibold'>9:41</span>
            {/* Notch */}
            <div className='absolute left-1/2 -translate-x-1/2 top-3 w-16 h-4 bg-gray-900 rounded-full' />
            <div className='flex items-center gap-1'>
              <svg className='w-2.5 h-2.5 text-white' fill='currentColor' viewBox='0 0 20 20'>
                <path fillRule='evenodd' d='M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415z' clipRule='evenodd' />
              </svg>
              <div className='flex gap-0.5'>
                {[1, 2, 3, 4].map((b) => <div key={b} className='w-0.5 bg-white rounded-sm' style={{ height: `${b * 2 + 2}px` }} />)}
              </div>
              <div className='flex items-center gap-0.5 bg-white/10 rounded-sm px-0.5'>
                <div className='w-4 h-2 border border-white/60 rounded-sm relative'>
                  <div className='absolute inset-0.5 right-1 bg-green-400 rounded-sm' />
                </div>
              </div>
            </div>
          </div>

          {/* App header */}
          <div className='px-3 pb-2 bg-[#0f172a]'>
            <div className='flex items-center gap-2'>
              <div className='w-7 h-7 bg-blue-600 rounded-xl flex items-center justify-center'>
                <span className='text-[11px]'>🎓</span>
              </div>
              <div>
                <p className='text-white text-[10px] font-bold'>SmartSchool</p>
                <p className='text-blue-300 text-[8px]'>Parent Dashboard</p>
              </div>
              <div className='ml-auto w-5 h-5 bg-white/10 rounded-full flex items-center justify-center'>
                <span className='text-[9px]'>🔔</span>
              </div>
            </div>
          </div>

          {/* Screen content */}
          <div className='bg-[#f8fafc] rounded-t-2xl flex-1 px-2 pt-3 pb-2' style={{ minHeight: 390 }}>
            {/* Tab bar inside phone */}
            <div className='flex gap-1 mb-3'>
              {tabs.map((t) => (
                <div
                  key={t.id}
                  className={`flex-1 flex flex-col items-center py-1 rounded-lg transition-all duration-300 ${activeTab === t.id ? 'bg-blue-600' : 'bg-white border border-gray-100'}`}
                >
                  <span className={`${activeTab === t.id ? 'text-white' : 'text-gray-500'}`}>{t.icon}</span>
                  <span className={`text-[7px] font-medium mt-0.5 ${activeTab === t.id ? 'text-white' : 'text-gray-500'}`}>
                    {t.label.split(' ')[0]}
                  </span>
                </div>
              ))}
            </div>

            {/* Content */}
            <div style={{ height: 340 }}>
              {activeTab === 'bus' && <BusTrackingScreen />}
              {activeTab === 'chat' && <AIChatScreen />}
              {activeTab === 'notifications' && <NotificationsScreen />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const featureHighlights: Record<Tab, { title: string; description: string; points: string[] }> = {
  bus: {
    title: 'Real-Time Bus Tracking',
    description: 'Parents know exactly where their child\'s bus is, every second of every school day. Zero anxiety, complete peace of mind.',
    points: [
      'Live GPS updates every 10 seconds',
      'Push notification when bus is 5 minutes away',
      'Safe boarding & drop-off confirmation',
      'Driver name, contact & route details',
    ],
  },
  chat: {
    title: 'AI-Powered Study Assistant',
    description: 'Students ask questions and get instant answers sourced directly from their school textbooks — not random internet results.',
    points: [
      'Answers grounded in school syllabus',
      'References exact chapter & page number',
      'Available 24/7 for homework help',
      'Supports all subjects & classes',
    ],
  },
  notifications: {
    title: 'Smart Parent Notifications',
    description: 'Never miss a critical school update. Get intelligent, prioritized alerts for everything that matters most to your child\'s education.',
    points: [
      'Bus arrival & boarding confirmations',
      'Homework & exam reminders',
      'Attendance & report card alerts',
      'Fee due dates & school announcements',
    ],
  },
}

export default function ParentsMobileSection() {
  const [activeTab, setActiveTab] = useState<Tab>('bus')

  // Auto-cycle tabs
  useEffect(() => {
    const order: Tab[] = ['bus', 'chat', 'notifications']
    let idx = 0
    const interval = setInterval(() => {
      idx = (idx + 1) % order.length
      setActiveTab(order[idx])
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  const info = featureHighlights[activeTab]

  return (
    <section className='py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Background */}
      <div className='absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#12294d] to-[#0a1628]' />
      <div className='absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-pulse-glow' />
      <div className='absolute bottom-1/4 left-1/4 w-80 h-80 bg-amber-500/6 rounded-full blur-3xl animate-pulse-glow delay-500' />
      <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent' />
      <div className='absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent' />

      <div className='relative max-w-7xl mx-auto'>
        {/* Header */}
        <ScrollReveal>
          <div className='text-center mb-16'>
            <span className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-amber-500/15 text-amber-300 border border-amber-500/25 mb-6'>
              <span className='text-base'>📱</span>
              Parent-First Mobile Experience
            </span>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight leading-tight' style={{ background: 'linear-gradient(135deg, #ffffff 0%, #bbf7d0 50%, #4ade80 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Everything Parents Need, In Their Pocket
            </h2>
            <p className='text-lg text-blue-100/80 max-w-2xl mx-auto'>
              Our parent app delivers real-time bus tracking, AI-powered homework help, and instant school alerts — keeping every family connected and informed.
            </p>
          </div>
        </ScrollReveal>

        <div className='grid lg:grid-cols-2 gap-12 xl:gap-20 items-center'>
          {/* Left: Phone Mockup */}
          <ScrollReveal direction='left'>
            <div className='flex justify-center lg:justify-end'>
              <PhoneMockup activeTab={activeTab} />
            </div>
          </ScrollReveal>

          {/* Right: Feature Details */}
          <ScrollReveal direction='right' delay={150}>
            <div>
              {/* Tab Switcher */}
              <div className='flex gap-2 mb-8'>
                {tabs.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setActiveTab(t.id)}
                    className={`flex-1 flex flex-col sm:flex-row items-center gap-1.5 sm:gap-2 py-2.5 px-2 rounded-xl border text-xs font-semibold transition-all duration-300 ${
                      activeTab === t.id
                        ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/25'
                        : 'bg-white/5 border-white/10 text-blue-200/80 hover:bg-white/10 hover:border-white/20'
                    }`}
                  >
                    <span className='text-base'>{t.icon}</span>
                    <span>{t.label}</span>
                  </button>
                ))}
              </div>

              {/* Active Feature Info */}
              <div className='space-y-6'>
                <div>
                  <h3 className='text-2xl sm:text-3xl font-bold mb-3' style={{ background: 'linear-gradient(135deg, #ffffff 0%, #bbf7d0 50%, #4ade80 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{info.title}</h3>
                  <p className='text-blue-100/80 leading-relaxed text-base'>{info.description}</p>
                </div>

                <ul className='space-y-3'>
                  {info.points.map((point) => (
                    <li key={point} className='flex items-start gap-3'>
                      <div className='w-5 h-5 bg-blue-500/20 border border-blue-400/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5'>
                        <svg className='w-3 h-3 text-blue-300' fill='currentColor' viewBox='0 0 20 20'>
                          <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                        </svg>
                      </div>
                      <span className='text-blue-100/80 text-sm leading-relaxed'>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Progress indicator */}
                <div className='flex gap-2 pt-2'>
                  {tabs.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setActiveTab(t.id)}
                      className={`h-1 rounded-full transition-all duration-500 ${activeTab === t.id ? 'bg-blue-400 w-8' : 'bg-white/20 w-4'}`}
                    />
                  ))}
                </div>

                <div className='flex flex-col sm:flex-row gap-3 pt-2'>
                  <a
                    href='/contactus'
                    className='inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-blue-400 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:-translate-y-0.5'
                  >
                    See Full Demo
                    <svg className='ml-2 w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
                    </svg>
                  </a>
                  <a
                    href='mailto:fudedevelopments@gmail.com'
                    className='inline-flex items-center justify-center px-6 py-3 border border-white/20 text-blue-100 font-medium rounded-xl hover:bg-white/5 hover:border-white/30 transition-all duration-300'
                  >
                    Contact Sales
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

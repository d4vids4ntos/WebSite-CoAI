'use client'

import { useState } from 'react'
import Link from 'next/link'
import Icon from '@/components/icons/Icon'

export default function SignInPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    // Auth integration goes here (Supabase Auth, etc.)
    setTimeout(() => setLoading(false), 1000)
  }

  return (
    <section
      className="min-h-[100dvh] grid-watermark flex items-center justify-center px-6 pt-16"
      style={{ backgroundColor: '#fff8f3' }}
    >
      <div className="w-full max-w-md">
        {/* Card */}
        <div
          className="rounded-2xl p-10"
          style={{
            backgroundColor: '#ffffff',
            boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
            border: '1px solid rgba(200,168,130,0.15)',
          }}
        >
          <h1
            className="font-headline font-bold text-2xl mb-2 text-center"
            style={{ color: '#000000' }}
          >
            Create your account
          </h1>
          <p
            className="font-body text-body-sm text-center mb-8"
            style={{ color: '#000000' }}
          >
            Join Clinic of AI and begin your engagement
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label
                htmlFor="signin-name"
                className="font-label text-xs uppercase font-semibold block mb-2"
                style={{ color: 'rgba(0,0,0,0.5)', letterSpacing: '0.08em' }}
              >
                Full Name
              </label>
              <input
                id="signin-name"
                type="text"
                required
                placeholder="Your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input-field"
              />
            </div>

            <div>
              <label
                htmlFor="signin-email"
                className="font-label text-xs uppercase font-semibold block mb-2"
                style={{ color: 'rgba(0,0,0,0.5)', letterSpacing: '0.08em' }}
              >
                Email
              </label>
              <input
                id="signin-email"
                type="email"
                required
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
              />
            </div>

            <div>
              <label
                htmlFor="signin-password"
                className="font-label text-xs uppercase font-semibold block mb-2"
                style={{ color: 'rgba(0,0,0,0.5)', letterSpacing: '0.08em' }}
              >
                Password
              </label>
              <input
                id="signin-password"
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
              />
              <p
                className="font-body text-body-sm mt-2"
                style={{ color: 'rgba(0,0,0,0.4)' }}
              >
                Minimum 8 characters
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-3 font-body font-bold text-base py-3.5 px-8 rounded-xl transition-all duration-200"
              style={{
                backgroundColor: loading ? 'rgba(161,64,0,0.6)' : '#a14000',
                color: '#ffffff',
                boxShadow: loading ? 'none' : '0 8px 24px rgba(161,64,0,0.25)',
                cursor: loading ? 'not-allowed' : 'pointer',
              }}
            >
              {loading ? 'Creating account…' : 'Create Account'}
              {!loading && (
                <Icon name="arrow_forward" style={{ fontSize: '18px' }} />
              )}
            </button>
          </form>
        </div>

        <p className="font-body text-body-sm text-center mt-6" style={{ color: '#000000' }}>
          Already have an account?{' '}
          <Link href="/login" className="font-semibold hover:underline" style={{ color: '#a14000' }}>
            Login
          </Link>
        </p>
      </div>
    </section>
  )
}

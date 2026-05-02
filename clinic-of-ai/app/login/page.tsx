'use client'

import { useState } from 'react'
import Link from 'next/link'
import Icon from '@/components/icons/Icon'

export default function LoginPage() {
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
            boxShadow: '0 20px 60px rgba(61,74,92,0.08)',
            border: '1px solid rgba(200,168,130,0.15)',
          }}
        >
          <h1
            className="font-headline font-bold text-2xl mb-2 text-center"
            style={{ color: '#3d4a5c' }}
          >
            Welcome back
          </h1>
          <p
            className="font-body text-body-sm text-center mb-8"
            style={{ color: '#2d4a4d' }}
          >
            Sign in to your Clinic of AI account
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label
                htmlFor="login-email"
                className="font-label text-xs uppercase font-semibold block mb-2"
                style={{ color: 'rgba(45,74,77,0.5)', letterSpacing: '0.08em' }}
              >
                Email
              </label>
              <input
                id="login-email"
                type="email"
                required
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="login-password"
                  className="font-label text-xs uppercase font-semibold"
                  style={{ color: 'rgba(45,74,77,0.5)', letterSpacing: '0.08em' }}
                >
                  Password
                </label>
                <a
                  href="#"
                  className="font-body text-body-sm transition-colors duration-200 hover:text-secondary"
                  style={{ color: '#a14000' }}
                >
                  Forgot password?
                </a>
              </div>
              <input
                id="login-password"
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
              />
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
              {loading ? 'Signing in…' : 'Sign In'}
              {!loading && (
                <Icon name="arrow_forward" style={{ fontSize: '18px' }} />
              )}
            </button>
          </form>
        </div>

        <p className="font-body text-body-sm text-center mt-6" style={{ color: '#2d4a4d' }}>
          Don&apos;t have an account?{' '}
          <Link href="/contact" className="font-semibold hover:underline" style={{ color: '#a14000' }}>
            Book a 20-minute conversation
          </Link>
        </p>
      </div>
    </section>
  )
}

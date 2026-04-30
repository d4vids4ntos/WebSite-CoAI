'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

type NavLink =
  | { href: string; label: string }
  | { href: string; label: string; megaMenu: MegaMenuItem[] }

type MegaMenuItem = {
  href: string
  title: string
  description: string
}

const industriesMenu: MegaMenuItem[] = [
  {
    href: '/industries/real-estate',
    title: 'Real Estate',
    description: 'Portfolio performance, asset risk, and market intelligence.',
  },
  {
    href: '/industries/hospitality',
    title: 'Hospitality',
    description: 'Guest experience meets operational execution.',
  },
  {
    href: '/industries/gastronomy',
    title: 'Gastronomy and small retail',
    description: 'Service intelligence, inventory, and demand forecasting.',
  },
]

const navLinks: NavLink[] = [
  { href: '/approach', label: 'Solutions' },
  { href: '/industries', label: 'Industries', megaMenu: industriesMenu },
  { href: '/academy', label: 'Executive Cohort' },
  { href: '/about', label: 'Why Clinic of AI' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [megaOpen, setMegaOpen] = useState<string | null>(null)
  const [mobileSubOpen, setMobileSubOpen] = useState<string | null>(null)
  const menuButtonRef = useRef<HTMLButtonElement | null>(null)
  const mobileMenuRef = useRef<HTMLDivElement | null>(null)
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pathname = usePathname()

  const openMega = (label: string) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
    setMegaOpen(label)
  }

  const scheduleCloseMega = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
    }
    closeTimerRef.current = setTimeout(() => setMegaOpen(null), 120)
  }

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setMegaOpen(null)
    setMobileSubOpen(null)
  }, [pathname])

  useEffect(() => {
    if (!megaOpen) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMegaOpen(null)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [megaOpen])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) {
      return
    }

    const menuElement = mobileMenuRef.current
    if (!menuElement) {
      return
    }

    const focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    const focusableElements = Array.from(menuElement.querySelectorAll<HTMLElement>(focusableSelector))
    const firstFocusable = focusableElements[0]
    const lastFocusable = focusableElements[focusableElements.length - 1]

    firstFocusable?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setMenuOpen(false)
        menuButtonRef.current?.focus()
        return
      }

      if (event.key !== 'Tab' || focusableElements.length === 0) {
        return
      }

      const activeElement = document.activeElement as HTMLElement | null
      if (event.shiftKey && activeElement === firstFocusable) {
        event.preventDefault()
        lastFocusable?.focus()
        return
      }

      if (!event.shiftKey && activeElement === lastFocusable) {
        event.preventDefault()
        firstFocusable?.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      >
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 pt-1.5 sm:pt-2">
          <div
            className={`flex items-center h-14 px-4 sm:px-6 rounded-full transition-all duration-300 ${
              scrolled ? 'shadow-ambient-md' : 'shadow-ambient-sm'
            }`}
            style={{
              backgroundColor: '#fff8f3',
              border: '1px solid rgba(0, 18, 21, 0.08)',
              boxShadow: scrolled
                ? '0 12px 40px rgba(0, 18, 21, 0.10)'
                : '0 6px 24px rgba(0, 18, 21, 0.06)',
            }}
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 shrink-0 z-10"
              aria-label="Clinic of AI — home"
            >
              <Image
                src="/logo.png"
                alt="Clinic of AI logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span
                className="font-headline font-bold text-xl tracking-tight"
                style={{ color: '#001215' }}
              >
                Clinic of AI
              </span>
            </Link>

            {/* Centered links — desktop */}
            <div className="hidden lg:flex items-center gap-5 xl:gap-7 ml-8 xl:ml-10 mr-4 xl:mr-6 flex-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                const hasMega = 'megaMenu' in link
                const isOpen = hasMega && megaOpen === link.label

                if (hasMega) {
                  return (
                    <div
                      key={link.href}
                      className="relative"
                      onMouseEnter={() => openMega(link.label)}
                      onMouseLeave={scheduleCloseMega}
                    >
                      <Link
                        href={link.href}
                        aria-haspopup="true"
                        aria-expanded={isOpen}
                        onClick={() => setMegaOpen(isOpen ? null : link.label)}
                        className={`inline-flex items-center gap-1.5 font-body font-medium text-body-sm xl:text-body-md whitespace-nowrap transition-colors duration-200 relative pb-1 ${
                          isActive
                            ? 'text-secondary'
                            : 'text-on-surface-variant hover:text-secondary'
                        }`}
                      >
                        {link.label}
                        <svg
                          aria-hidden="true"
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                        >
                          <path d="M2 4 L5 7 L8 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {isActive && (
                          <span
                            className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                            style={{ backgroundColor: '#a14000' }}
                          />
                        )}
                      </Link>

                      {isOpen && (
                        <div
                          className="absolute left-0 top-full pt-3 z-50"
                          onMouseEnter={() => openMega(link.label)}
                          onMouseLeave={scheduleCloseMega}
                        >
                          <div
                            className="rounded-xl p-2 min-w-[22rem]"
                            role="menu"
                            aria-label={`${link.label} categories`}
                            style={{
                              backgroundColor: '#fff8f3',
                              border: '1px solid rgba(0, 18, 21, 0.08)',
                              boxShadow: '0 20px 60px rgba(0,18,21,0.08)',
                            }}
                          >
                            <p
                              className="font-label text-xs uppercase font-semibold px-3 pt-2 pb-2"
                              style={{ color: '#a14000', letterSpacing: '0.15em' }}
                            >
                              Industry value chains
                            </p>
                            <ul className="flex flex-col">
                              {link.megaMenu.map((item) => (
                                <li key={item.href}>
                                  <Link
                                    href={item.href}
                                    role="menuitem"
                                    className="group flex flex-col gap-1 px-3 py-3 rounded-lg transition-colors duration-150"
                                    style={{ color: '#001215' }}
                                    onClick={() => setMegaOpen(null)}
                                    onMouseOver={(e) => {
                                      e.currentTarget.style.backgroundColor = '#fff5e8'
                                    }}
                                    onMouseOut={(e) => {
                                      e.currentTarget.style.backgroundColor = 'transparent'
                                    }}
                                  >
                                    <span className="font-headline font-bold text-body-md group-hover:text-secondary transition-colors">
                                      {item.title}
                                    </span>
                                    <span
                                      className="font-body text-body-sm"
                                      style={{ color: '#2d4a4d' }}
                                    >
                                      {item.description}
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`font-body font-medium text-body-sm xl:text-body-md whitespace-nowrap transition-colors duration-200 relative pb-1 ${
                      isActive
                        ? 'text-secondary'
                        : 'text-on-surface-variant hover:text-secondary'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                        style={{ backgroundColor: '#a14000' }}
                      />
                    )}
                  </Link>
                )
              })}
            </div>

            {/* Right actions — desktop */}
            <div className="hidden lg:flex items-center gap-3 ml-auto shrink-0 z-10">
              <Link
                href="/signin"
                className="font-body font-medium text-sm whitespace-nowrap text-on-surface-variant hover:text-secondary transition-colors duration-200"
              >
                Sign In
              </Link>
              <Link
                href="/login"
                className="font-body font-medium text-sm whitespace-nowrap text-on-surface-variant hover:text-secondary transition-colors duration-200"
              >
                Login
              </Link>
              <Link
                href="/contact"
                data-cta="navbar_book_call_desktop"
                className="font-body font-semibold text-xs xl:text-body-sm text-white px-4 xl:px-5 py-2 xl:py-2.5 rounded-full whitespace-nowrap transition-all duration-200"
                style={{
                  backgroundColor: '#a14000',
                  boxShadow: '0 4px 14px rgba(161,64,0,0.3)',
                }}
              >
                Book a 20-minute conversation
              </Link>
            </div>

            {/* Hamburger — mobile */}
            <button
              ref={menuButtonRef}
              className="ml-auto lg:hidden flex flex-col gap-1.5 p-2 z-10"
              onClick={() => setMenuOpen(!menuOpen)}
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-main-menu"
            >
              <span
                className={`block h-0.5 w-6 transition-all duration-300 ${
                  menuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
                style={{ backgroundColor: '#001215' }}
              />
              <span
                className={`block h-0.5 w-6 transition-all duration-300 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
                style={{ backgroundColor: '#001215' }}
              />
              <span
                className={`block h-0.5 w-6 transition-all duration-300 ${
                  menuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
                style={{ backgroundColor: '#001215' }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          id="mobile-main-menu"
          ref={mobileMenuRef}
          className="fixed inset-0 z-40 flex flex-col pt-20"
          style={{
            backgroundColor: 'rgba(255, 248, 243, 0.98)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <div className="flex flex-col gap-1 p-6 mt-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              const hasMega = 'megaMenu' in link
              const isExpanded = hasMega && mobileSubOpen === link.label

              if (hasMega) {
                return (
                  <div
                    key={link.href}
                    className="border-b"
                    style={{ borderColor: 'rgba(200,168,130,0.2)' }}
                  >
                    <div className="flex items-center justify-between">
                      <Link
                        href={link.href}
                        className={`font-headline font-bold text-3xl py-4 flex-1 transition-colors duration-200 ${
                          isActive ? 'text-secondary' : 'text-on-surface hover:text-secondary'
                        }`}
                      >
                        {link.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() =>
                          setMobileSubOpen(isExpanded ? null : link.label)
                        }
                        aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${link.label} categories`}
                        aria-expanded={isExpanded}
                        className="p-3"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                          style={{ color: '#001215' }}
                        >
                          <path d="M5 7 L10 12 L15 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>
                    {isExpanded && (
                      <ul className="flex flex-col gap-1 pb-4 pl-2">
                        {link.megaMenu.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className="font-body font-medium text-body-lg block py-3 transition-colors duration-200 hover:text-secondary"
                              style={{ color: '#2d4a4d' }}
                            >
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-headline font-bold text-3xl py-4 border-b transition-colors duration-200 ${
                    isActive ? 'text-secondary' : 'text-on-surface hover:text-secondary'
                  }`}
                  style={{ borderColor: 'rgba(200,168,130,0.2)' }}
                >
                  {link.label}
                </Link>
              )
            })}
            <div className="flex flex-col gap-3 mt-8">
              <Link
                href="/signin"
                className="font-body font-medium text-body-lg text-on-surface-variant text-center py-3"
              >
                Sign In
              </Link>
              <Link
                href="/login"
                className="font-body font-medium text-body-lg text-on-surface-variant text-center py-3"
              >
                Login
              </Link>
              <Link
                href="/contact"
                data-cta="navbar_book_call_mobile"
                className="btn-primary text-center"
              >
                Book a 20-minute conversation
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

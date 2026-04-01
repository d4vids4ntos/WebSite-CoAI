// tailwind.config.ts
// Design System: "The Architectural Intellectual" for Clinic of AI
// Based on DESIGN.md specification

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ============================================
      // COLORS: The Architectural Intellectual Palette
      // ============================================
      colors: {
        // Surfaces (off-white vellum aesthetic)
        surface: {
          DEFAULT: '#fff8f3',
          container: '#fff5e8',
          'container-low': '#fff2e2',
          'container-lowest': '#ffffff',
          'container-highest': '#efe0cd',
        },

        // Primary (deep scholarly navy)
        primary: {
          DEFAULT: '#001215',
          container: '#002a2e',
        },
        'on-primary': '#fff8f3',

        // Secondary (energetic orange — CTAs and highlights)
        secondary: {
          DEFAULT: '#a14000',
          container: '#ff7a32',
        },
        'on-secondary': '#ffffff',

        // Tertiary (deep charcoal — grounding UI elements)
        tertiary: {
          DEFAULT: '#001022',
          container: 'rgba(0, 16, 34, 0.06)',
        },

        // Text colors
        'on-surface': '#001215',         // Never pure black — use primary
        'on-surface-variant': '#2d4a4d', // Muted secondary text

        // Outline (ghost borders only)
        'outline-variant': '#c8a882',
      },

      // ============================================
      // TYPOGRAPHY: Humanity of Serif + Logic of Sans
      // ============================================
      fontFamily: {
        // Headlines — Newsreader (authoritative serif)
        serif: ['Newsreader', 'Georgia', 'Times New Roman', 'serif'],
        // Body & UI — Manrope (clean, technical sans)
        sans: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
        // Labels — Space Grotesk (mono-spaced stylistic)
        mono: ['Space Grotesk', 'JetBrains Mono', 'Consolas', 'monospace'],
      },

      fontSize: {
        // Display sizes (Newsreader)
        'display-lg': ['4.5rem', { lineHeight: '1.1',  letterSpacing: '-0.02em' }],
        'display-md': ['3.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-sm': ['2.75rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],

        // Headline sizes (Newsreader)
        'headline-lg': ['2rem',   { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        'headline-md': ['1.75rem', { lineHeight: '1.3' }],
        'headline-sm': ['1.5rem',  { lineHeight: '1.35' }],

        // Body sizes (Manrope)
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body-md': ['1rem',     { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],

        // Label sizes (Space Grotesk, ALL CAPS, 0.1em spacing per DESIGN.md)
        'label-lg': ['0.875rem', { lineHeight: '1.4', letterSpacing: '0.1em' }],
        'label-md': ['0.75rem',  { lineHeight: '1.4', letterSpacing: '0.1em' }],
        'label-sm': ['0.625rem', { lineHeight: '1.4', letterSpacing: '0.1em' }],
      },

      // ============================================
      // SPACING: The 8px Grid
      // ============================================
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },

      // ============================================
      // BORDER RADIUS: Never 0px
      // Large images: minimum xl per DESIGN.md
      // ============================================
      borderRadius: {
        'sm':  '0.125rem', // 2px  — minimum allowed
        'md':  '0.375rem', // 6px  — preferred for buttons/inputs
        'lg':  '0.5rem',   // 8px
        'xl':  '0.75rem',  // 12px — large images minimum
        '2xl': '1rem',     // 16px
      },

      // ============================================
      // BOX SHADOW: Ambient only, navy-tinted
      // Blur > 24px, 4–8% alpha per DESIGN.md
      // ============================================
      boxShadow: {
        'ambient':    '0 12px 40px rgba(0, 18, 21, 0.06)',
        'ambient-lg': '0 20px 60px rgba(0, 18, 21, 0.08)',
        'ambient-sm': '0 4px 16px rgba(0, 18, 21, 0.04)',
        'none': 'none',
      },

      // ============================================
      // BACKDROP BLUR: 12px per DESIGN.md
      // ============================================
      backdropBlur: {
        'glass': '12px',
      },

      // ============================================
      // BACKGROUND OPACITY: Glass effects
      // ============================================
      backgroundOpacity: {
        'glass': '0.8',
        'ghost': '0.15',
      },

      // ============================================
      // MAX WIDTH: Content containers
      // ============================================
      maxWidth: {
        'content': '72rem', // 1152px
        'narrow':  '48rem', // 768px
        'wide':    '90rem', // 1440px
      },

      // ============================================
      // ANIMATION: Subtle only
      // ============================================
      transitionDuration: {
        'DEFAULT': '200ms',
        'slow': '300ms',
      },

      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}

export default config

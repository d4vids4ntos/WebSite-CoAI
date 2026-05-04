import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#fff8f3',
          container: '#fff5e8',
          'container-low': '#fff2e2',
          'container-lowest': '#ffffff',
          'container-highest': '#efe0cd',
        },
        primary: { DEFAULT: '#000000', container: '#FFF59D' },
        'on-primary': '#fff8f3',
        secondary: { DEFAULT: '#a14000', container: '#ff7a32' },
        'on-secondary': '#ffffff',
        tertiary: { DEFAULT: '#000000', container: '#FFF59D' },
        'on-surface': '#000000',
        'on-surface-variant': '#000000',
        'outline-variant': '#c8a882',
        accent: {
          mint: { surface: '#dde8dc', pill: '#7fa890' },
          peach: { surface: '#fde4d0', pill: '#ff7a32' },
          blush: { surface: '#fcd6cf', pill: '#e8755e' },
          sky: { surface: '#dce8ee', pill: '#5b8caf' },
          lilac: { surface: '#e3dceb', pill: '#8a72b3' },
          cream: { surface: '#fff2e2', pill: '#000000' },
        },
      },
      fontFamily: {
        headline: ['Newsreader', 'Georgia', 'serif'],
        body: ['Manrope', 'system-ui', 'sans-serif'],
        label: ['Space Grotesk', 'monospace'],
      },
      fontSize: {
        'display-lg': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['3.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-sm': ['2.75rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'headline-lg': ['2rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        'headline-md': ['1.75rem', { lineHeight: '1.3' }],
        'headline-sm': ['1.5rem', { lineHeight: '1.35' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body-md': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'label-lg': ['0.875rem', { lineHeight: '1.4', letterSpacing: '0.1em' }],
        'label-md': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.1em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        sm: '0.125rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
      },
      boxShadow: {
        ambient: '0 12px 40px rgba(0,0,0,0.06)',
        'ambient-lg': '0 20px 60px rgba(0,0,0,0.08)',
        'ambient-sm': '0 4px 16px rgba(0,0,0,0.04)',
      },
      backdropBlur: {
        glass: '12px',
      },
      maxWidth: {
        content: '72rem',
        narrow: '48rem',
        wide: '90rem',
      },
    },
  },
  plugins: [],
}

export default config

import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      background: {
        100: 'var(--background-100)',
        200: 'var(--background-200)',
      },
      gray: {
        100: 'var(--gray-alpha-100)',
        200: 'var(--gray-alpha-200)',
        300: 'var(--gray-alpha-300)',
        400: 'var(--gray-alpha-400)',
        500: 'var(--gray-alpha-500)',
        600: 'var(--gray-alpha-600)',
        700: 'var(--gray-alpha-700)',
        800: 'var(--gray-alpha-800)',
        900: 'var(--gray-alpha-900)',
        1000: 'var(--gray-alpha-1000)',
      },
    },
    fontSize: {
      '4xs': ['0.6875rem', { lineHeight: '0.8125rem', letterSpacing: '0.01em' }],
      '3xs': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.01em' }],
      '2xs': ['0.8125rem', { lineHeight: '1.125rem', letterSpacing: '0.01em' }],
      xs: ['0.9375rem', { lineHeight: '1.25rem', letterSpacing: '0.01em' }],
      sm: ['1rem', { lineHeight: '1.3125rem', letterSpacing: '0.01em' }],
      base: ['1.0625rem', { lineHeight: '1.375rem', letterSpacing: '0.01em' }],
      lg: ['1.25rem', { lineHeight: '1.5625rem', letterSpacing: '-0.01em' }],
      xl: ['1.375rem', { lineHeight: '1.75rem', letterSpacing: '-0.01em' }],
      '2xl': ['1.75rem', { lineHeight: '2.125rem', letterSpacing: '-0.01em' }],
      '3xl': ['2.125rem', { lineHeight: '2.5625rem', letterSpacing: '-0.01em' }],
    },
    fontWeight: {
      normal: '400',
      medium: '500',
    },
    letterSpacing: {
      tightest: '-0.04em',
      tighter: '-0.02em',
      tight: '-0.01em',
      normal: '0',
      wide: '0.01em',
      wider: '0.02em',
      widest: '0.04em',
    },
    screens: {
      tablet: '810px',
      desktop: '1280px',
    },
    extend: {
      fontFamily: {
        sans: 'var(--font-inter-display)',
      },
    },
  },
  plugins: [forms],
};

export default config;

import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-inter-display)'],
    },
    fontSize: {
      base: '1.25rem',
    },
    fontWeight: {
      normal: '400',
      semibold: '600',
    },
  },
  plugins: [typography, forms],
};

export default config;

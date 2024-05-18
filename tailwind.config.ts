import { type Config } from 'tailwindcss'
import typographyPlugin from '@tailwindcss/typography'
import typographyStyles from './typography'

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  darkMode: 'class',
  plugins: [typographyPlugin],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1400px',
    },
    typography: typographyStyles,
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        popup: 'popup 0.15s ease',
        fadein: 'fadein 0.15s',
      },
      keyframes: {
        popup: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '1%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1.0' },
        },
        fadein: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      colors: {
        lightBg: '#EEEEEE',
        darkBg: '#1C1B21',
        bannerGradientStart: '#83A3CE',
        bannerGradientEnd: '#292B66',
        blue: {
          DEFAULT: '#3D5399',
          50: '#F0F6F9',
          100: '#DBE8F0',
          200: '#AFC8DF',
          300: '#83A3CE',
          400: '#5779BC',
          500: '#3D5399',
          600: '#333D80',
          700: '#292B66',
          800: '#211F4D',
          900: '#191433',
        },
      },
      fontSize: {
        xs: ['0.8125rem', { lineHeight: '1.5rem' }],
        sm: ['0.875rem', { lineHeight: '1.5rem' }],
        base: ['1rem', { lineHeight: '1.75rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '2rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '3.5rem' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
    },
  },
}

export default config

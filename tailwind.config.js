/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { ink: '#0b0c0f', panel: '#121419', line: '#23262e', mute: '#8b909c', accent: '#a9b8ff' },
      fontFamily: { sans: ['Manrope', 'system-ui', 'sans-serif'] },
      keyframes: {
        rise: { from: { opacity: 0, transform: 'translateY(12px)' }, to: { opacity: 1, transform: 'none' } },
        fade: { from: { opacity: 0 }, to: { opacity: 1 } },
        sheet: { from: { opacity: 0, transform: 'translateY(24px)' }, to: { opacity: 1, transform: 'none' } },
      },
      animation: { rise: 'rise .6s cubic-bezier(.2,.7,.2,1) both', fade: 'fade .25s ease both', sheet: 'sheet .35s cubic-bezier(.2,.7,.2,1) both' },
    },
  },
  plugins: [],
}

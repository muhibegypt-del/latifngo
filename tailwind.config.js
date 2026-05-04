/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      colors: {
        foundation: {
          dark: '#111827',
          light: '#fdfbf7', // slightly warmer light
          primary: '#1c3b2b', // Exact brand green from logo
          secondary: '#A3B18A', // Complementary green/sage
          sand: '#f4f1eb', // Warm sand for alternating sections
          muted: '#57534e', // stone-600 equivalent
        }
      },
      spacing: {
        'section': '6rem', // py-24
        'section-lg': '8rem', // py-32
      }
    },
  },
  plugins: [],
};

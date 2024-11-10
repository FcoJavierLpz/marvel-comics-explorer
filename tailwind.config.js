/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xs': '385px',
      },
      colors: {
        marvel: {
          red: '#ED1D24',
          blue: '#003152',
          light: '#F5F5F5',
        },
      },
      animation: {
        'power-pulse': 'power-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'power-pulse': {
          '0%, 100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '.5',
            transform: 'scale(1.2)',
          },
        },
      },
    },
  },
  plugins: [],
};
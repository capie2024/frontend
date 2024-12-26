/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      xs: '375px',
      sm: '768px',
      md: '1024px',
      lg: '1200px',
      xl: '1440px',
    },
    color: {
      base: '#121212',
    },
  },
  plugins: [],
}

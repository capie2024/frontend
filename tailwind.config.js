/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '768px',
      'md': '1024px',
      'lg': '1200px',
      'xl': '1440px'
    }
  },
  plugins: [],
}


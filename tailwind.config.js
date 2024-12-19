/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': {'min': '768px', 'max': '1023px'},
      'md': {'min': '1024px', 'max': '1199px'},
      'lg': {'min': '1200px', 'max': '1439px'},
      'xl': {'min': '1440px'},
    }
  },
  plugins: [],
}


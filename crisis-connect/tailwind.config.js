/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',

  content: [
    "./index.html",
    'node_modules/preline/dist/*.js',
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      fontFamily:{
        'Sora':['Sora','sans-serif']
      }
    },
  },
  plugins: [
    require('preline/plugin'),

  ],
}
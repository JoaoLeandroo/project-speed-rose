/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-img': "url('/background.svg')"
      },
      colors: {
        'header-color': 'rgba(0, 0, 0, 0.392)',
        'back-color-main': '#0F172A',
      },
      screens: {
        'max_640': {'max': '640px'},
        'max_768': {'max': '768px'},
        'max_1024': {'max': '1024px'},
        'max_1280': {'max': '1280px'},
        'max_1536': {'max': '1536px'},
      },
    },
  },
  plugins: [],
}

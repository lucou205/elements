/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '18': 'repeat(18, minmax(0, 1fr))',
      },
      fontFamily: {
        'Roboto': 'Roboto Condensed, sans-serif',
        'Poppins': 'Poppins, Roboto Condensed, sans-serif',
      },
      gridColumnStart: {
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
        '18': '18',
      },
      fontSize: {
        'xxs': '0.7rem'
      },
      boxShadow: {
        'light': 'inset -10px 10px 10px 0px rgba(0,0,100,0.10), inset 10px -10px 10px 0px rgba(255,255,255,0.15)'
      },
    },
  },
  plugins: [],
}

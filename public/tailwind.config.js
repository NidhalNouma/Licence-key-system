const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.trueGray,
        indigo: colors.indigo,
        orange: colors.orange,
        red: colors.rose,
        yellow: colors.amber,
        pcolor: '#000000',
        scolor: '#150050',
        tcolor: '#3F0071',
        acolor: '#610094',
      },
      minWidth: {
       '0': '0',
       '1/4': '25%',
       '1/2': '50%',
       '3/4': '75%',
       'full': '100%',
       '400': '400px',
       '500': '500px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

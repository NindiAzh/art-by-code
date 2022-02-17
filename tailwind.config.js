module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
      colors: {
        'puerto-rico': {
          '50': '#f4fcfb', 
          '100': '#e8f9f7', 
          '200': '#c7efeb', 
          '300': '#a5e6de', 
          '400': '#61d3c6', 
          '500': '#1dc0ad', 
          '600': '#1aad9c', 
          '700': '#169082', 
          '800': '#117368', 
          '900': '#0e5e55'  
      },
      'white': {
        '50': '#ffffff', 
        '100': '#ffffff', 
        '200': '#ffffff', 
        '300': '#ffffff', 
        '400': '#ffffff', 
        '500': '#ffffff', 
        '600': '#e6e6e6', 
        '700': '#bfbfbf', 
        '800': '#999999', 
        '900': '#7d7d7d'
    },
    'gray': {
      '50': '#f9f9f9', 
      '100': '#f2f2f2', 
      '200': '#dfdfdf', 
      '300': '#cccccc', 
      '400': '#a5a5a5', 
      '500': '#7f7f7f', 
      '600': '#727272', 
      '700': '#5f5f5f', 
      '800': '#4c4c4c', 
      '900': '#3e3e3e'
  },
  'silver': {
    '50': '#fcfcfc', 
    '100': '#f9f9f9', 
    '200': '#f0f0f0', 
    '300': '#e7e7e7', 
    '400': '#d6d6d6', 
    '500': '#c4c4c4', 
    '600': '#b0b0b0', 
    '700': '#939393', 
    '800': '#767676', 
    '900': '#606060'
}
    },
    fontFamily: {
      nuni: ['Nunito', 'sans-serif'],
      mons: ['Montserrat', 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

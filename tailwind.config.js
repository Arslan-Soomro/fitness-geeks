module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      //That shorthand version of adding a small breakpoint produces an error

      'xs': '475px',
      // => @media (min-width: 475px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    container : {
      center: true,
      screens: {
        '2xl' : '1280px',
      },
    },
    extend: {
      fontFamily: {
        'dela' : ['Dela Gothic One', 'cursive'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'poppins' : ['Poppins', 'sans-serif']
      },
      colors: {
        'cu-black' : '#0C1618',
        'cu-green' : '#70F8BA',
        'cu-blue' : '#3772FF',
        'cu-white' : '#FFFCFF',
        'cu-gray' : '#EEEEEE'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

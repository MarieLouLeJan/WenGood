import plugins from '@tailwindcss/forms'

export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      textUnderlineOffset: {
        14: '14px',
      },
      colors: {
        gray: {
          100: '#F1F1F4',
          200: '#F1F1F4',
          300: '#F1F1F4',
          400: '#9BA9B4',
          500: '#707D86',
          600: '#55595F',
          700: '#33363A',
          800: '#25282C',
          900: '#151719',
        },
        purple: {
          100: '#272343',
          200: '#272343',
          300: '#272343',
          400: '#272343',
          500: '#272343',
          600: '#272343',
          700: '#272343',
          800: '#272343',
          900: '#272343',
        },
        blue: {
          300: '#17526D',
          200: '#4897ADff',
          100: '#74D4D8'
        },
        // black: {
        //   100: 
        // }
      },
      spacing: {
        '9/16': '56.25%',
        '3/4': '75%',
        '1/1': '100%',
      },
      // fontFamily: {
      //   inter: ['Inter', 'sans-serif'],
      //   'architects-daughter': ['"Architects Daughter"', 'sans-serif']
      // },
      fontFamily: {
        sans : [ '"Be Vietnam Pro", "sans-serif"' ],        
        titles: [ '"Unbounded", "cursive"' ]
      },
      screens: {
        'sm': '800px',
        'md': '1100px',
        'lg': '1150px'
      },
      // screens: {
      //   '2xl': {'max': '1535px'},
      //   // => @media (max-width: 1535px) { ... }
  
      //   'xl': {'max': '1279px'},
      //   // => @media (max-width: 1279px) { ... }
  
      //   'lg': {'max': '1023px'},
      //   // => @media (max-width: 1023px) { ... }
  
      //   'md': {'max': '900px'},
      //   // => @media (max-width: 767px) { ... }
  
      //   'sm': {'max': '639px'},
      //   // => @media (max-width: 639px) { ... }
      // },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3.25rem',
        '6xl': '4rem',
      },
      inset: {
        'full': '100%',
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
      minWidth: {
        '10': '2.5rem',
      },
      scale: {
        '98': '.98'
      },
    },
  },
  plugins: [
    plugins
  ],
};

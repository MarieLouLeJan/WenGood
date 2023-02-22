import plugins from '@tailwindcss/forms';

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
          100: '#FFFFFF',
          200: '#F1F1F4',
          300: '#F1F1F4',
          400: '#9BA9B4',
          500: '#707D86',
          600: '#55595F',
          700: '#33363A',
          800: '#25282C',
          900: '#151719',
        },
        bg: {
          100: '#2C2855',
          200: '#1E1B2A',
        },
        blue: {
          300: '#64D2E4',
          200: '#64D2E4',
          100: '#64D2E4'
        },
        pet: {
          1: '#E0CAA1',
          2: '#8F6C84',
          3: '#DA72F7',
          4: '#7EC0A9'
        }
      },
      spacing: {
        '9/16': '56.25%',
        '3/4': '75%',
        '1/1': '100%',
      },
      fontSize: {
        xxs: '0.5rem',
      },
      fontFamily: {
        sans : [ '"Be Vietnam Pro", "sans-serif"' ],        
        titles: [ '"Unbounded", "cursive"' ]
      },
      screens: {
        'sm': '800px',
        'md': '1000px',
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

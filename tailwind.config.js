/** @type {import('tailwindcss').Config} */
export default {
   darkMode: 'class',
   content: ['./src/**/*.{html,js,ts,vue}'],
   theme: {
      extend: {
         colors:{
            coff:{
               100: '#fcf7f2',
               200: '#E6B8A2',
               300: '#DEAB90',
               400: '#D69F7E',
               500: '#CD9777',
               600: '#C38E70',
               700: '#B07D62',
               800: '#9D6B53',
               900: '#8A5A44',
               1000: '#583101'
            }
         },
         typography: (theme) => ({
            DEFAULT:{
               css:{
                  'code': {
                     backgroundColor: theme('colors.gray.200'),
                     color: theme('colors.red.500'),
                     padding: '0.2em 0.4em',
                     borderRadius: '0.25rem',
                     fontWeight: '600',
                  },
                  'pre': {
                     backgroundColor: theme('colors.gray.100'),
                     border: `2px solid ${theme('colors.gray.200')}`,
                     borderRadius: theme('borderRadius.xl')
                  },
                  'h2':{
                     fontSize: theme('fontSize.4xl'),
                     fontWeight: '900'
                  },
                  'h3':{
                     fontSize: theme('fontSize.2xl'),
                     textDecoration:'underline'
                  },
                  'a':{
                     textDecoration:'none'
                  },
                  'a:hover':{
                     color: theme('colors.blue.500'),
                  },
                  'ul li::marker':{
                     color:'black'
                  }

               }
            },
            invert: {
               css: {
                  'code': {
                     backgroundColor: `#1E242A`,
                     color: theme('colors.red.500'),
                  },
                  'ul li::marker':{
                     color:'white'
                  }
               },
            },
         })
      },
   },
   plugins: [
      require('@tailwindcss/typography'),
   ]
}


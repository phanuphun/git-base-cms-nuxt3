/** @type {import('tailwindcss').Config} */
export default {
   darkMode: 'class',
   content: ['./src/**/*.{html,js,ts,vue}'],
   theme: {
      extend: {
         typography: (theme) => ({
            DEFAULT:{
               css:{
                  'code': {
                     backgroundColor: theme('colors.gray.200'),
                     color: theme('colors.black'),
                     padding: '0.2em 0.4em',
                     borderRadius: '0.25rem',
                     fontWeight: '600',
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
                  'ul li::marker':{
                     color:'black'
                  }

               }
            },
            invert: {
               css: {
                  'code': {
                  backgroundColor: `#1E242A`,
                  color: theme('colors.white'),
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
      require('@tailwindcss/line-clamp')
   ],
}


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
                  backgroundColor: '#1E242A',
                  color: theme('colors.white'),
                  padding: '0.2em 0.4em',
                  borderRadius: '0.25rem',
                  fontWeight: '600',
                  },
               }
            }
         })
      },
   },
   plugins: [
      require('@tailwindcss/typography'),
   ],
}


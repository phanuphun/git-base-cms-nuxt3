import { useState } from "#app";

export const useTheme = () => {
   const isDarkMode = useState<boolean>('theme',()=> false)

   if (process.client) {
      if (localStorage.getItem('theme') === 'dark') {
         isDarkMode.value = true
      }
   }

   return isDarkMode
}

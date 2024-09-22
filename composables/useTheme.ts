import { useState } from "#app";

/**
 *
 * @returns คืนค่าธีม true หรือ false กลับไป ในกรณีที่อยู่ในธีม dark จะส่งคืนค่า true
 */
export const useTheme = () => {
   const isDarkMode = useState<boolean>('theme',()=> false)

   if (process.client) {
      if (localStorage.getItem('theme') === 'dark') {
         isDarkMode.value = true
      }
   }

   return isDarkMode
}

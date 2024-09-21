import { useRoute } from 'vue-router'
import { useState } from "#app";

type PageState = 'exploring' | 'reading' | 'idle'


// page state
export const usePageState = () => {
  const route = useRoute()
  const readState = useState<PageState>('exploring')

  if (route.path === '/') {
    readState.value = 'exploring'
  } else if (route.path.startsWith('/article')) {
    readState.value = 'reading'
  } else {
    readState.value = 'idle'
  }

  return readState
}

// side bar behavior
export const useSideBarOpen = () => {
   const useSideBarOpen = useState<boolean>('value',()=>{
      return false
   })
   return useSideBarOpen
}

// check screen size
export const useScreenSize = () => {
   const isXL = useState(()=>{
      if (process.client) {
         const mediaQuery = window.matchMedia('(min-width: 1280px)')
         return mediaQuery.matches
   }})

   return isXL
}

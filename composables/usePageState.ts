import { useRoute } from 'vue-router'
import { useState } from "#app";

type PageState = 'exploring' | 'reading' | 'idle'

export const usePageState = () => {
  const route = useRoute()
  const readState = useState<PageState>('exploring')

  // check path and set state
  if (route.path === '/') {
    readState.value = 'exploring'
  } else if (route.path.startsWith('/article')) {
    readState.value = 'reading'
  } else {
    readState.value = 'idle'
  }

  return readState
}

export const useSideBarOpen = () => {
   const useSideBarOpen = useState<boolean>('value',()=>{
      return false
   })
   return useSideBarOpen
}

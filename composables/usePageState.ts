import { useRoute } from 'vue-router'
import { useReadState } from '~/composables/useReadState'

export const usePageState = () => {
  const route = useRoute()
  const readState = useReadState()

  // check path and set state
  if (route.path === '/') {
    readState.value = 'isHome'
  } else if (route.path.startsWith('/article')) {
    readState.value = 'reading'
  } else {
    readState.value = 'other'
  }
}

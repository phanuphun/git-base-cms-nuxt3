<script setup lang="ts">
import { usePageState } from '#imports';
import { useTheme } from '#imports';
import { useTocData } from '#imports';

const isSideBarOpen = useSideBarOpen()
const readState = usePageState()
const isDark = useTheme()
const tocData = useTocData([])
const isXl = useScreenSize()

onMounted(() => {
   if (readState.value === 'reading' && isXl.value === true) {
      isSideBarOpen.value = true
   }
})

watch(readState, () => {
   if (readState.value === 'exploring') {
      isSideBarOpen.value = false
   } else if (readState.value === 'reading' && isXl.value === true ) {
      isSideBarOpen.value = true
   }
})

function scrollToTop() {
   window.scroll({
      top: 0
   })
}
</script>

<template>
   <div id="sideBarBg" class="absolute h-full z-20">
      <div id="sideBar" :class="{ '-ml-[300px]': isSideBarOpen === false, 'dark:dark-t': isDark }"
         class="h-full w-[300px] bg-white opacity-100 transition-all duration-200 border-r-2">
         <div class="sticky top-2">
            <div v-if="readState === 'reading'" :class="{ 'right-2 top-2': isSideBarOpen }"
               class="absolute top-3 z-30 -right-12 transition-all duration-200">
               <div class="w-full flex flex-col gap-4 justify-end">
                  <div id="sidebarBtn" @click="isSideBarOpen = !isSideBarOpen" :class="{ 'dark:bg-none': isDark, }">
                     <IconF name="uil:book-open"></IconF>
                  </div>
               </div>
            </div>

            <div class="flex flex-row w-full z-90" :class="{ 'dark:dark-t': isDark }">
               <Toc :contents="tocData"></Toc>
            </div>
         </div>
      </div>
   </div>
</template>

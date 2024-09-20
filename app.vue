<script setup lang="ts">
import { useTheme } from './composables/useTheme';
import themeBtn from './components/themeBtn.vue';
import SearchModal from './components/searchModal.vue';

const tocData = useTocData([])
const readState = usePageState()

const gitLink = 'https://github.com/phanuphun/phanuphun.na-blog'
const isDark = useTheme()

const isModalOpen = ref<boolean>(false)
function openSearch() {
   isModalOpen.value = true
}

watch(isModalOpen, (newVal) => {
   if (newVal) {
      document.body.classList.add('overflow-hidden') // เมื่อ modal เปิด
   } else {
      document.body.classList.remove('overflow-hidden') // เมื่อ modal ปิด
   }
})

useHead({
   bodyAttrs: {
      class: 'font-body'
   },
   htmlAttrs: {
      class: 'dark font-body'
   }
})


function scrollToTop() {
   window.scroll({
      top: 0
   })
}

const isSideBarOpen = ref<boolean>(true)

watch(isSideBarOpen, () => {
   const sideBar = document.getElementById('sideBar')

   if (!isSideBarOpen.value) {
      sideBar!.classList.add('-ml-[310px]')
   } else {
      sideBar!.classList.remove('-ml-[310px]')
   }
})

watch(readState, () => {
   if (readState.value === 'reading') {
      if (isSideBarOpen.value === false) {
         isSideBarOpen.value = true
      }
   }
   // else if(readState.value === 'exploring'){
   //    isSideBarOpen.value = false
   // }
})
</script>

<template>
   <SearchModal :is-open="isModalOpen" @is-close="(v) => isModalOpen = v"></SearchModal>
   <div :class="{ 'dark:dark-t': isDark }" class="min-h-screen flex flex-col w-auto">
      <!-- header -->
      <div class="w-full flex ">
         <header class="relative w-full px-4 py-3 flex flex-wrap justify-between items-center shadow-md shadow-gray-200"
            :class="{ 'dark:bg-gray-900 shadow-none border-b-2 border-white': isDark }">
            <div class="text-xl font-logo font-semibold ">
               <NuxtLink to="/">Phanuphun.na - Blog</NuxtLink>
            </div>
            <div class="w-auto flex flex-row gap-3">
               <Icon @click="openSearch()" name="uil:search" size="2rem"
                  class="text-black hover:scale-[1.1] duration-200 cursor-pointer"
                  :class="{ 'dark:text-white': isDark }" />
               <div>
                  <themeBtn></themeBtn>
               </div>
               <NuxtLink :to="gitLink" target="_blank">
                  <Icon name="uil:github" size="2rem" class="text-black hover:scale-[1.1] duration-200"
                     :class="{ 'dark:text-white': isDark }" />
               </NuxtLink>
            </div>
         </header>
      </div>

      <!-- body -->
      <div class="w-full mx-auto border-gray-200 flex-1 flex justify-between">
         <!-- side bar -->
         <div id="sideBar" class="flex flex-row transition-all duration-200">
            <div class="w-[310px] border-r-2 border-gray-200">
               <div class="sticky top-3 ">
                  <div class="flex flex-row w-full " :class="{ 'dark:dark-t': isDark }">
                     <Toc v-if="readState === 'reading'" :contents="tocData"></Toc>
                  </div>
               </div>
            </div>

            <div class="w-[60px] h-full ">
               <div class="sticky top-0 pt-7">
                  <div class="w-full h-[55px] flex flex-col gap-3 justify-center cursor-pointer items-center p-1 ">
                     <div @click="isSideBarOpen = !isSideBarOpen" class="bg-gray-100 hover:bg-gray-300 rounded-md"
                        :class="{ 'dark:bg-gray-800 dark:hover:bg-gray-700': isDark }">
                        <Icon :name="isSideBarOpen ? 'uil:angle-left-b' : 'uil:angle-right-b'" size="40px"
                           class="text-black" :class="{ ' dark:text-white': isDark }" />
                     </div>
                     <div @click="scrollToTop()" class="bg-gray-100 hover:bg-gray-300 rounded-md"
                        :class="{ 'dark:bg-gray-800 dark:hover:bg-gray-700': isDark }">
                        <Icon name="uil:arrow-up" size="40px" class="text-black"
                           :class="{ ' dark:text-white': isDark }" />
                     </div>

                  </div>

               </div>
            </div>
         </div>
         <!-- main -->
         <div id="mainContain" class="flex-1 py-8 max-w-full pl-4 px-8 relative  ">
            <NuxtPage />
         </div>
      </div>
   </div>
</template>

<style></style>

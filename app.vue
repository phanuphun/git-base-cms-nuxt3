<script setup lang="ts">
import { useTheme } from './composables/useTheme';
import themeBtn from './components/themeBtn.vue';
import SearchModal from './components/searchModal.vue';

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
      class: 'font-body text-black border-white'
   },
   htmlAttrs: {
      class: 'dark font-body'
   }
})


const isSideBarOpen = useSideBarOpen()

</script>

<template>
   <SearchModal :is-open="isModalOpen" @is-close="(v) => isModalOpen = v"></SearchModal>
   <div :class="{ 'dark:dark-t': isDark }" class="min-h-screen flex flex-col w-auto">
      <!-- header -->
      <div class="w-full flex z-90" :class="{ 'dark:dark': isDark }">
         <header class="relative w-full px-4 py-3 flex flex-wrap justify-between items-center shadow-md shadow-gray-200"
            :class="{ 'dark:bg-gray-900 shadow-none border-b-2': isDark }">
            <div class="text-xl font-logo font-semibold ">
               <NuxtLink to="/">Phanuphun.na - Blog </NuxtLink>
            </div>
            <div class="w-auto flex flex-row gap-3">
                  <IconF @click="openSearch()"  name="uil:search"/>
               <div>
                  <themeBtn></themeBtn>
               </div>
               <NuxtLink :to="gitLink" target="_blank">
                  <IconF name="uil:github"/>
               </NuxtLink>
            </div>
         </header>
      </div>

      <!-- body -->
      <div class="relative w-full h-full mx-auto border-gray-200 flex-1 flex">
         <!-- side bar bg -->
         <SideBar></SideBar>

         <!-- main -->
         <div id="mainContain" class="flex-1 py-8 max-w-full pl-14 pr-8 xl:px-16 flex justify-end">
            <div class="w-full transition-all duration-200"
            :class="{ 'xl:w-[calc(100%-300px)]': isSideBarOpen && readState ==='reading' }">
               <NuxtPage />
            </div>
         </div>
      </div>
   </div>
</template>

<style></style>

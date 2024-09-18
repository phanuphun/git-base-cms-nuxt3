<script setup lang="ts">
import { useTheme } from './composables/useTheme';
import themeBtn from './components/themeBtn.vue';
import SearchModal from './components/searchModal.vue';



const tocData = useTocData([])
const readState = usePageState()

const gitLink = 'https://github.com/phanuphun/phanuphun.na-blog'
const isDark = useTheme()

const isModalOpen = ref<boolean>(false)
function openSearch(){
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


</script>

<template>
   <SearchModal :is-open="isModalOpen" @is-close="(v)=>isModalOpen = v"></SearchModal>
   <div :class="{ 'dark:dark-t': isDark  }" class="min-h-screen flex flex-col">
      <!-- header -->
      <div class="w-full flex">
         <header class="relative w-full px-4 py-3 flex flex-wrap justify-between items-center shadow-md shadow-gray-200"
            :class="{ 'dark:bg-gray-900 shadow-none border-b-2 border-white': isDark }">
            <div class="text-xl font-logo font-semibold ">
               <NuxtLink to="/">Phanuphun.na - Blog</NuxtLink>
            </div>
            <div class="w-auto flex flex-row gap-3">
               <Icon @click="openSearch()"
                  name="uil:search" size="2rem" class="text-black hover:scale-[1.1] duration-200 cursor-pointer"
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
         <div class="relative w-[330px] border-r-2 border-gray-200 pt-8">
            <div class="mb-4 sticky top-4 z-10">
               <Toc v-if="readState === 'reading'" :contents="tocData"></Toc>
            </div>
         </div>
         <!-- main -->
         <div class="w-full p-8">
            <NuxtPage />
         </div>
      </div>
   </div>
</template>

<style></style>


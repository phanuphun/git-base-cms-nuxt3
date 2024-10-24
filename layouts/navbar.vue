<script setup lang="ts">
import themeBtn from '../components/themeBtn.vue';
import SearchModal from '../components/searchModal.vue';
import { usePageState } from '#imports';

const status = usePageState()
const gitLink = 'https://github.com/phanuphun/phanuphun.na-blog'

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
</script>

<template>
   <SearchModal :is-open="isModalOpen" @is-close="(v) => isModalOpen = v" />

   <div class="w-full light-t flex z-90 dark:dark h-[60px]">
      <header class="relative w-full px-8 xl:px-24 flex flex-wrap justify-end sm:justify-between items-center border-b-2 dark:dark-t">
         <NuxtLink to="/" class="hidden sm:flex">
            <div class="my-2 text-3xl font-medium underline text-gray-700">
               F I R S T
            </div>
         </NuxtLink>
         <div class="text-xl font-text font-semibold flex gap-4 ">
            <NuxtLink to="/blogs">
               <span class="hover:text-blue-700 cursor-pointer dark:hover:text-blue-400">
                  BLOG
               </span>
            </NuxtLink>
            <NuxtLink to="/notes">
               <span class="hover:text-blue-700 cursor-pointer dark:hover:text-blue-400">
                  NOTE
               </span>
            </NuxtLink>
            <!-- <NuxtLink to="/notes">
               <span class="hover:text-blue-700 cursor-pointer dark:hover:text-blue-400">
                  ARCHIVE
               </span>
            </NuxtLink> -->
         </div>
      </header>
   </div>
</template>

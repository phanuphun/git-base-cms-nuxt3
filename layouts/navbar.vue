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

   <div class="w-full light-t flex z-90 dark:dark">
      <header class="relative w-full px-4 py-4 flex flex-wrap justify-between items-center border-b-2 dark:dark-t">
         <div class="text-xl font-text font-semibold flex gap-4 ">
            <!-- <NuxtLink to="/">
               <span class="hover:text-blue-700 cursor-pointer dark:hover:text-blue-400">
                  🏠 หน้าแรก
               </span>
            </NuxtLink> -->
            <NuxtLink to="/blogs">
               <span class="hover:text-blue-700 cursor-pointer dark:hover:text-blue-400">
                  📰 บทความ
               </span>
            </NuxtLink>
            <NuxtLink to="/notes">
               <span class="hover:text-blue-700 cursor-pointer dark:hover:text-blue-400">
                  ✍️ โน๊ต
               </span>
            </NuxtLink>
         </div>
         <div class="w-auto flex flex-row gap-3">
            <!-- <IconF @click="openSearch()" name="uil:search" class="cursor-pointer"/>
            <div>
               <themeBtn></themeBtn>
            </div> -->
         </div>
      </header>
   </div>
</template>

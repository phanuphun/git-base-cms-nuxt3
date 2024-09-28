<script setup lang="ts">
import themeBtn from './themeBtn.vue';
import SearchModal from './searchModal.vue';
import { useScreenSize } from '#imports';

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
      <header class="relative w-full px-4 py-3 flex flex-wrap justify-between items-center border-b-2 dark:dark-t">
         <div class="text-xl font-text font-semibold ">
            <NuxtLink to="/">Phanuphun.na - Blog </NuxtLink>
         </div>
         <div class="w-auto flex flex-row gap-3">
            <IconF @click="openSearch()" name="uil:search" />
            <div>
               <themeBtn></themeBtn>
            </div>
            <!-- <NuxtLink :to="gitLink" target="_blank">
               <IconF name="uil:github" />
            </NuxtLink> -->
         </div>
      </header>
   </div>
</template>

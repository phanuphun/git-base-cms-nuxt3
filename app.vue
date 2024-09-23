<script setup lang="ts">
import { useTheme } from './composables/useTheme';
import navbar from './components/navbar.vue';

const readState = usePageState()

const isDark = useTheme()

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
   <NuxtLoadingIndicator />

   <div :class="{ 'dark:dark-t': isDark }" class="min-h-screen h-full flex flex-col w-auto">
      <navbar></navbar>
      <!-- content body -->
      <div class="relative w-full h-full mx-auto border-gray-200 flex-1 flex">
         <SideBar></SideBar>
         <!-- main -->
         <div id="mainContain" class="flex-1 pb-8 max-w-full pl-16 pr-8 xl:px-16 flex justify-end">
            <div class="w-full transition-all duration-200"
            :class="{ 'xl:w-[calc(100%-300px)]': isSideBarOpen && readState ==='reading' }">
               <NuxtPage />
            </div>
         </div>
      </div>
   </div>
</template>

<style></style>

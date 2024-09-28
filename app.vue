<script setup lang="ts">
import navbar from "./components/navbar.vue";
import { useTheme,usePageState } from "#imports";
const readState = usePageState();
const isDark = useTheme();


onMounted(()=>{
   if(isDark.value === true) {
      document.body.classList.add('dark')
   }else{
      document.body.classList.remove('dark')
   }
})

useHead({
   bodyAttrs: {
      class: "font-body text-black border-white",
   },
   htmlAttrs: {
      class: "",
   },
});

const isSideBarOpen = useSideBarOpen();
</script>

<template>
   <NuxtLoadingIndicator />

   <div class="flex h-full min-h-screen w-auto flex-col dark:dark-t">
      <navbar></navbar>
      <!-- content body -->
      <div class="relative mx-auto flex h-full w-full flex-1 border-gray-200">
         <SideBar></SideBar>
         <!-- main -->
         <div id="mainContain" class="flex max-w-full flex-1 justify-end px-8 pb-8 xl:px-16">
            <div class="w-full transition-all duration-200" :class="{
               'xl:w-[calc(100%-300px)]':
               isSideBarOpen && readState === 'reading',
            }">
               <NuxtPage />
            </div>
         </div>
      </div>
   </div>
</template>

<style></style>

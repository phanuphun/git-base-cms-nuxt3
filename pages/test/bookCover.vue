<script setup lang="ts">
import navbar from "~/components/navbar.vue";
import { useTheme, usePageState } from "#imports";
const readState = usePageState();
const isDark = useTheme();

useHead({
   title: "Phanuphun.na",
   meta: [
      { name: "description", content: "Phanuphun.na" }
   ]
})

onMounted(() => {
   if (isDark.value === true) {
      document.body.classList.add('dark')
   } else {
      document.body.classList.remove('dark')
   }
})

useHead({
   bodyAttrs: {
      class: "font-body text-black border-white",
   }
});

const isSideBarOpen = useSideBarOpen();
</script>

<template>
   <NuxtLoadingIndicator />
   <div class="flex w-full h-screen justify-center items-center bg-gray-900">
      <div class="p-4 w-[400px] h-[500px] min-w-[400px] min-h-[500px] rounded-md bg-white">
         <div class="border-[7px] h-full border-black striped flex flex-col">
            <div class="w-full h-[200px] min-h-[200px] flex flex-col">
               <div class="w-full h-full p-2 flex flex-col justify-start font-logo">
                  <div class="w-full text-2xl font-Bold pt-4">
                     Phanuphun Namwong
                  </div>
                  <div class="w-full h-full text-lg mt-2 font-logo text-gray-800">
                     Backend Developer
                  </div>
                  <div class="flex justify-end text-black pr-4 pb-3">
                     <NuxtLink to="portfolio">
                        <p class="link">about</p>
                     </NuxtLink>
                  </div>
               </div>
            </div>
            <div class="w-full h-full flex flex-col justify-center item-center border-t-[7px] border-black ">
               <div class="w-full h-full bg-rose-200 flex flex-row">
                  <div class="w-full h-full text-lg flex justify-center items-center font-light font-logo text-center px-8">
                     I hope you think this is a book...
                  </div>
                  <div class="w-[130px] border-l-[7px] border-black h-full flex flex-col">
                     <div class="w-full h-1/2 bg-pink-100 flex justify-center items-center">
                        <iconF name="line-md:coffee-filled-loop" size="4rem" class="text-[#38220F]">
                        </iconF>
                     </div>
                     <div class="w-full h-1/2 border-t-[7px] border-black">
                        <div class="w-full h-full Boxes">

                        </div>
                     </div>
                  </div>
               </div>
               <div class="w-full h-[150px] bg-orange border-t-[7px] border-black flex flex-row justify-between">
                  <div class="w-[110px] flex justify-center items-center bg-black cursor-pointer duration-200 group">
                     <iconF name="uil:github" size="4rem" class="text-white">
                     </iconF>
                  </div>
                     <div class="w-full border-l-[7px] dot-orange border-black flex justify-center items-center
                     text-5xl font-extrabold hover:text-orange-600 cursor-pointer duration-200">
                        <NuxtLink to="/blogs">
                           <div class="w-full h-full">
                              BLOG
                           </div>
                        </NuxtLink>
                     </div>
               </div>
            </div>
         </div>
      </div>
   </div>

   <!-- <div class="flex h-full min-h-screen w-auto flex-col dark:dark-t">
      <navbar></navbar>
      <div class="relative mx-auto flex h-full w-full flex-1 border-gray-200">
         <SideBar></SideBar>
         <div id="mainContain" class="flex max-w-full flex-1 justify-end px-8 pb-8 xl:px-28">
            <div class="w-full transition-all duration-200" :class="{
               'xl:w-[calc(100%-300px)]':
               isSideBarOpen && readState === 'reading',
            }">
               <NuxtPage />
            </div>
         </div>
      </div>
   </div> -->
</template>

<style></style>

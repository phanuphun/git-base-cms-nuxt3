<script setup lang="ts">
import { useTheme } from './composables/useTheme';
import themeBtn from './components/themeBtn.vue';

const tocData = useTocData([])
const readState = usePageState()

const gitLink = 'https://github.com/phanuphun/phanuphun.na-blog'
const search = ref('')

const isDark = useTheme()

const searchParams = computed(() => ({
   where: [{ title: { $contains: search.value } }]
}))

useHead({
   bodyAttrs: {
      class: 'dark font-body'
   }
})

</script>

<template>
   <div :class="{ 'dark:dark-t': isDark }" class="">
      <div class="w-full h-full flex">
         <header class="relative w-full px-4 py-3 flex flex-wrap justify-between items-center shadow-md shadow-gray-200"
            :class="{ 'dark:bg-gray-900 shadow-none border-b-2 border-white': isDark }">
            <div class="text-xl font-logo font-semibold ">
               <NuxtLink to="/">Phanuphun.na - Blog</NuxtLink>
            </div>
            <div class="w-auto flex flex-row gap-3">
               <Icon name="uil:search" size="2rem" class="text-black hover:scale-[1.1] duration-200 cursor-pointer"
                  :class="{ 'dark:text-white': isDark }" />
               <div>
                  <themeBtn></themeBtn>
               </div>
               <NuxtLink :to="gitLink" target="_blank">
                  <Icon name="uil:github" size="2rem" class="text-black hover:scale-[1.1] duration-200"
                     :class="{ 'dark:text-white': isDark }" />
               </NuxtLink>
            </div>
            <!-- <div class="absolute w-auto py-3 right-4 top-20">
               <input
                  type="text"
                  v-model="search"
                  placeholder="Search..."
                  :class="{'dark:text-black':isDark}"
                  class="w-full p-2 border border-gray-300 rounded-md"/>

               <div class="">
                  <ContentList v-if="search !== ''" :path="`/articles`" fields="title,path" :query="searchParams">
                     <template #default="{ list }">
                        <li class="w-full px-2 cursor-pointer hover:text-blue-500 mt-2 list-decimal" v-for="a in list"
                           :key="a._path">
                           <NuxtLink :to="a.path"> <u> {{ a.title }} </u></NuxtLink>
                        </li>
                     </template>
                     <template #not-found>
                        <p class="text-gray-500 px-2 mt-2 text-center">Not Found</p>
                     </template>
                  </ContentList>
               </div>
            </div> -->
         </header>
      </div>

      <div class="w-full h-full min-h-screen pl-4 mx-auto border-gray-200 flex justify-between">
         <!-- side bar -->
         <div class="relative w-[330px] h-auto border-r-2 border-gray-200 pt-8">
            <div class="mb-4 sticky top-4  z-10">
               <Toc v-if="readState === 'reading'" :contents="tocData"></Toc>
            </div>
         </div>
         <!-- main -->
         <div class="w-full p-8 h-auto">
            <NuxtPage />
         </div>

      </div>
   </div>
</template>

<style></style>

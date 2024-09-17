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
   bodyAttrs:{
      class:'dark font-body'
   }
})

</script>

<template>
   <div :class="{'dark:dark-t': isDark}">
      <div class="w-full flex" >
         <header class="w-full px-4 py-2 flex flex-wrap justify-between items-center shadow-md shadow-gray-200"
         :class="{'dark:bg-gray-900 shadow-gray-700': isDark}">
            <div class="text-xl font-logo">
               <NuxtLink to="/">Phanuphun.na - Blog</NuxtLink>
            </div>
            <div class="w-auto flex flex-row gap-3">
               <div>
                  <themeBtn></themeBtn>
               </div>
               <NuxtLink :to="gitLink" target="_blank">
                  <Icon
                     name="uil:github"
                     size="2rem"
                     class="text-black hover:scale-[1.1] duration-200"
                     :class="{'dark:text-white':isDark}"
                  />
               </NuxtLink>
            </div>
         </header>
      </div>

      <div class="max-w-5xl pl-4 mx-auto h-auto min-h-screen border-x-2 border-gray-200 flex justify-between">
         <!-- main -->
         <div class="w-3/4 p-8 h-auto">
            <NuxtPage />
         </div>

         <!-- search side -->
         <div class="relative w-1/4 h-auto border-l-2 border-gray-200 pt-8 px-2">
            <input type="text" v-model="search" placeholder="Search..." class="w-full p-2 border border-gray-300" />

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

            <div class="mt-4 sticky top-4  z-10">
               <Toc v-if="readState === 'reading'" :contents="tocData"></Toc>
            </div>
         </div>
      </div>
   </div>

</template>

<style></style>

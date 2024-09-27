<script setup lang="ts">
import Mermaid from '~/components/content/mermaid.vue';
import { useDateConverter } from '~/composables/useDateConverter'
const formatDate = (dateString: string): string => {
   return useDateConverter(dateString);
}

usePageState() // update state
const isDark = useTheme()

const { path } = useRoute().params

// get toc data from docs
const { data } = await useAsyncData('home', () => queryContent(`/articles/${path}`).findOne())
useTocData(data.value?.body?.toc?.links!) // update toc
</script>

<template>
   <div class="" :class="{ 'dark:dark-t': isDark }">
      <ContentDoc :path="`/articles/${path}`">
         <template #default="{ doc }">
            <div class="w-full h-full relative">
               <!-- <Toolbar class=" sticky top-0"></Toolbar> -->
               <div class="mt-8">
                  <div class="texet-center p-0">
                     <h1 class="text-5xl font-semibold">{{ doc.title }}</h1>
                     <div class="text-gray-500 text-sm mt-2">
                        วันที่: {{ formatDate(doc.date) }}
                     </div>
                  </div>
               </div>
               <div class="mt-4 flex flex-col">
                  <ContentRenderer class="max-w-full prose prose-xl xl:prose-lg break-words"
                     :class="{ 'dark:prose-invert text-white': isDark }" :value="doc">
                  </ContentRenderer>
               </div>
            </div>
         </template>
         <template #not-found>
            <div class="w-full flex justify-center items-center">
               <p class="text-gray-500 px-2 mt-2">No articles </p>
            </div>
         </template>
      </ContentDoc>
   </div>
</template>

<script setup lang="ts">
import { useDateConverter } from '~/composables/useDateConverter'
const formatDate = (dateString: string): string => {
   return useDateConverter(dateString);
}

// update state
usePageState()
const { path } = useRoute().params

// get toc data from docs
const { data } = await useAsyncData('home', () => queryContent(`/blogs/${path}`).findOne())
// update toc to sidebar
useTocData(data.value?.body?.toc?.links!)
</script>

<template>
   <div class="dark:dark-t h-full">
      <ContentDoc :path="`/blogs/${path}`">
         <template #default="{ doc }">
            <div class="w-full h-full relative">
               <div class="mt-8">
                  <div class="texet-center p-0">
                     <h1 class="text-5xl font-semibold">{{ doc.title }}</h1>
                     <div class="text-gray-500 text-md mt-8">
                        Date: {{ formatDate(doc.date) }}
                     </div>
                     <div class="text-gray-500 text-md">
                        By Phanuphun Namwong
                     </div>
                  </div>
               </div>
               <div class="mt-4 flex flex-col">
                  <ContentRenderer
                  class="max-w-full prose prose-xl xl:prose-lg break-words dark:prose-invert dark:text-white"
                     :value="doc">
                  </ContentRenderer>
               </div>
            </div>
         </template>
         <template #not-found>
            <div class="w-full h-full flex justify-center items-center">
               <p class="text-gray-500 text-3xl text-center px-2 mt-2">This article was not found in the system. </p>
            </div>
         </template>
         <template #empty>
            <div class="w-full h-full flex justify-center items-center">
               <p class="text-gray-500 text-3xl text-center px-2 mt-2">There is no content in this article. </p>
            </div>
         </template>
      </ContentDoc>
   </div>
</template>

<script setup lang="ts">
import { useDateConverter } from '~/composables/useDateConverter'
const formatDate = (dateString: string): string => {
   return useDateConverter(dateString);
}

usePageState() // update state
const isDark = useTheme()

const { slug: path } = useRoute().params // get path doc
// get toc data from docs
const { data } = await useAsyncData('home', () => queryContent(`/articles/${path}`).findOne())
useTocData(data.value?.body?.toc?.links!) // update toc


</script>

<template>
   <article class="bg-white rounded-2xl" :class="{'dark:dark-t':isDark}">
      <ContentDoc :path="`/articles/${path}`" >
         <template #default="{ doc }">
            <header>
               <div class="texet-center p-0">
                  <h1 class="text-4xl font-semibold">{{ doc.title }}</h1>
                  <div class="text-gray-500 text-sm mt-2">
                     Date: {{ formatDate(doc.date) }}
                  </div>

                  <!-- <img :src="doc.thumbnail" :alt="doc.title" class="h-60 w-full object-cover mt-2"> -->
               </div>
            </header>
            <div class="mt-4">
               <ContentRenderer :value="doc" class="prose max-w-full "
               :class="{'dark:prose-invert text-white':isDark}">
               </ContentRenderer>
            </div>
         </template>
         <template #not-found>
            <center>
               <p class="text-gray-500 px-2 mt-2">ไม่มีบทความนี้ในระบบหรือคุณไม่มีสิทธิ์เข้าถึง</p>
            </center>
         </template>
      </ContentDoc>
   </article>

</template>

<style scoped></style>

<script setup lang="ts" >
import { useDateConverter } from '~/composables/useDateConverter'
import { usePageState } from '#imports';

useHead({
   title: "Phanuphun.na - Blog",
   meta: [
      { name: "description", content: "Phanuphun.na - Blog" }
   ]
})

const formatDate = (dateString: string): string => {
   return useDateConverter(dateString);
}

usePageState()

// pagination section
const limit = ref(10)
const skip = ref(0)
const length = getDataLength()

function nextPage() {
   skip.value = skip.value + limit.value
   getData()
}

function previosePage() {
   skip.value = skip.value - limit.value
   getData()
}

const { data } = getData()

function getDataLength(){
   const {data} = useAsyncData('list', () => queryContent('/blogs').find())
   return data.value?.length
}
function getData() {
   return useAsyncData('list', () => queryContent('/blogs')
      .where({ draft: false })
      .sort({ date: -1})
      .limit(limit.value)
      .skip(skip.value)
      .find())
}
</script>

<template>
   <div class="w-auto flex flex-col">
      <div class="flex flex-col justify-center items-center gap-2 mt-4">
         <div v-for="a in data" :key="a._id" class="w-full h-full rounded-none border-2
          card-light-t dark:dark-t dark:card-dark-t">
            <NuxtLink :to="a._path">
               <div class="p-3 flex flex-col sm:flex-row  ">
                  <div class="w-auto">
                     <!-- <div class="w-full sm:w-[300px]">
                        <img
                        :src="a.img ? a.img :'/img/default/no-cover.png'"
                        alt="article cover"
                        class="w-full sm:w-[300px] object-fill duration-200 dark:grayscale-0">
                     </div> -->
                  </div>
                  <div class="w-full sm:px-4 flex justify-start items-start pb-2 mt-4 am:mt-0">
                     <div>
                        <p class="text-2xl font-semibold">
                           {{ a.title }}
                        </p>
                        <p class="text-md text-gray-400">
                           {{ useDateConverter(a.date) }}
                        </p>
                        <p class="text-xl mt-2">
                           {{a.description}}
                        </p>
                        <div class="mt-2 flex flex-wrap gap-2" >
                           <Tag v-for="tag in a.tags">{{ tag }}</Tag>
                        </div>
                     </div>
                  </div>
               </div>
            </NuxtLink>
         </div>

      </div>

      <div class="w-full flex flex-row justify-end gap-2 mt-4">
         <Btn name="ก่อนหน้า" @click="previosePage" :disable="skip === 0" />
         <Btn name="ถัดไป" @click="nextPage" :disable="skip+limit >= length!" />
      </div>
   </div>
</template>

<style scoped></style>

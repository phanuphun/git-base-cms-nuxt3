<script setup lang="ts">
import { useDateConverter } from '~/composables/useDateConverter'
import { useTheme } from '#imports';

const isDark = useTheme()

useHead({
   title: "Phanuphun-Blog",
   meta: [
      { name: "description", content: "Phanuphun.na-Blog" }
   ]
})



const formatDate = (dateString: string): string => {
   return useDateConverter(dateString);
}

usePageState()

const limit = ref(2)
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

function getData() {
   return useAsyncData('list', () => queryContent('/article')
      .sort({ date: -1 })
      .limit(limit.value)
      .skip(skip.value)
      .find())
}

function getDataLength(){
   const {data} = useAsyncData('list', () => queryContent('/article').find())
   return data.value?.length
}

</script>

<template>
   <div class="w-auto">
      <div class="flex flex-col justify-center items-center gap-2">

         <div v-for="a in data" :key="a._id" class="w-full rounded-md card-light-t"
            :class="{ 'dark:dark-t dark:card-dark-t': isDark }">
            <NuxtLink :to="a._path">
               <div class="p-5 ">
                  <p class="text-2xl">
                     {{ a.title }}
                  </p>
                  <p class="text-md text-gray-400">
                     {{ useDateConverter(a.date) }}
                  </p>
                  <div class="mt-2 flex flex-row gap-2" >
                     <Tag v-for="tag in a.tags">{{ tag }}</Tag>
                  </div>
               </div>
            </NuxtLink>
         </div>

      </div>

      <div class="w-full flex flex-row justify-center gap-2 mt-4">
         <Btn name="Previose" @click="previosePage" :disable="skip === 0" />
         <Btn name="Next" @click="nextPage" :disable="skip+limit >= length!" />
      </div>
   </div>
</template>

<style scoped></style>

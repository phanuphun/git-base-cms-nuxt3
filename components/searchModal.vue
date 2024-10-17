<script lang="ts" setup>
import { useDateConverter } from '~/composables/useDateConverter'

const props = defineProps<{
   isOpen: boolean
}>()

const emit = defineEmits<{
   isClose: [value: boolean]
}>()

const search = ref<string>('')
const searchParams = computed(() => ({
   $or: [
      { title: { $regex: new RegExp(search.value, 'i') } },
      { description: { $regex: new RegExp(search.value, 'i') } }
   ]
}))

const {data , refresh} = getData()

function getData() {
   return useAsyncData('searchData', () => queryContent('/blogs')
      .where(searchParams.value)
      .find()
   )
}

watch(search ,()=>{
   refresh()
})


watch(() => props.isOpen, (newVal) => {
   const modal = document.getElementById("modal")
   if (newVal === true && modal) {
      modal.classList.remove("hidden")
      modal.classList.add("flex")
   } else {
      modal?.classList.add("hidden")
      modal?.classList.remove("flex")
   }
})

function closeModal() {
   search.value = ''
   emit('isClose', false)
}

const highlightText = (text: string) => {
   if (!search.value) return text;
   const regex = new RegExp(`(${search.value})`, 'gi');
   return text.replace(regex, '<span class="bg-yellow-300 text-black">$1</span>');
};
</script>

<template>
   <div id="modal" @click.self="closeModal()"
      class="fixed hidden inset-0 justify-center items-center bg-black bg-opacity-90 z-50">
      <div @click.self="closeModal()" class="w-full max-w-3xl h-screen p-6 ">
         <!-- Modal Container -->
         <div class="w-full h-auto max-h-full rounded-md bg-white p-6 shadow-lg border-2 border-white flex flex-col dark:dark-t"
         >
            <!-- Header -->
            <div class="w-full flex flex-row justify-end items-center gap-3">
               <div class="w-full mt-3">
                  <input v-model="search" type="text" placeholder="Search..."
                     class="w-full text-xl rounded-md dark:text-black border-2 px-4 py-2">
               </div>
            </div>

            <!-- body -->
            <div class="w-full h-auto max-h-full overflow-auto mt-4">
               <div class="h-auto overflow-auto">
                  <div class="flex flex-col" v-for="a in data" :key="a._id">
                     <NuxtLink :to="a._path" @click="closeModal()">
                        <div class="w-full py-4 px-4 mt-2 text-xl card-light-t rounded-md dark:card-dark-t">
                           <div v-html="highlightText(a.title!)"></div>
                           <div class="text-sm mt-2 font-extralight text-gray-600 dark:text-gray-400"
                           v-html="highlightText(a.description!)"></div>
                        </div>
                     </NuxtLink>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

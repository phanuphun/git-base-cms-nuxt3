<script lang="ts" setup>
import { useDateConverter } from '~/composables/useDateConverter'
const props = defineProps<{
   isOpen: boolean
}>()

const emit = defineEmits<{
   isClose: [value: boolean]
}>()

const isDark = useTheme()
const search = ref<string>('')

const searchParams = computed(() => ({
   where: [
      {
         $or: [
            { title: { $regex: new RegExp(search.value, 'i') } },
            { description: { $regex: new RegExp(search.value, 'i') } }
         ]
      }
   ]
}))

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
   emit('isClose', false)
}

const formatDate = (dateString: string): string => {
   return useDateConverter(dateString);
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
      <div @click.self="closeModal()" class="w-full max-w-3xl h-screen py-6 ">
         <!-- Modal Container -->
         <div class="w-full h-auto max-h-full rounded-md bg-white p-6 shadow-lg border-2 border-white flex flex-col"
            :class="{ 'dark:dark-t': isDark }">
            <!-- Header -->
            <div class="w-full flex flex-row justify-end items-center gap-3">
               <div class="w-full mt-3">
                  <input v-model="search" type="text" placeholder="Search..." :class="{ 'text-black': isDark }"
                     class="w-full text-xl rounded-md border-2 px-4 py-2">
               </div>
            </div>

            <!-- body -->
            <div class="w-full h-auto max-h-full  overflow-auto mt-4">
               <div class="h-auto overflow-auto">

                  <ContentList :path="`/articles/`" fields="title,date,thumbnail,tags" :query="searchParams">
                     <template #default="{ list }">
                        <div v-for="(a, index) in list" :key="index" id="container-list"
                           class="w-full my-2 first:mt-0 last:mb-0">
                           <NuxtLink :to="'/articles/' + a.path" @click="closeModal()">
                              <div
                                 class="relative p-2 rounded-md cursor-pointer flex flex-row bg-gray-100 hover:bg-gray-300"
                                 :class="{ 'dark:bg-gray-800 dark:hover:bg-gray-700 group': isDark }">
                                 <div class="pr-2 flex justify-center items-start pt-2">
                                    <Icon name="uil:file-blank" size="2rem" />
                                 </div>
                                 <div class="w-full">
                                    <div v-html="highlightText(a.title!)"></div>
                                    <div class="w-full line-clamp-4 text-gray-500"
                                       v-html="highlightText(a.description!)">
                                    </div>
                                    <span class="text-gray-500 mr-2">
                                       {{ formatDate(a.date) }}
                                    </span>
                                 </div>
                                 <div
                                    class="absolute bottom-0 right-0 pr-2 justify-center items-center hidden group-hover:flex">
                                    <Icon name="uil:enter" size="2rem" />
                                 </div>
                              </div>
                           </NuxtLink>
                        </div>
                     </template>
                     <template #not-found>
                        <div class="flex h-full justify-center items-center mt-4">
                           <p class="text-gray-300">
                              No articles
                           </p>
                        </div>
                     </template>
                  </ContentList>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

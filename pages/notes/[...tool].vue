<script setup lang="ts">
import { toolIcons, type IconValue } from '~/model/iConInterface';
const { tool } = useRoute().params
const { data } = await useAsyncData('note', () =>
   queryContent('/notes')
      .where({ tool: { $regex: new RegExp(String(tool), 'i') } })
      .sort({ date: -1 })
      .find()
)

let toolIconsList:Record<string,IconValue>
onMounted(() => {
   toolIconsList = toolIcons;
})

</script>

<template>
   <div class="w-full h-full min-h-[calc(100vh-200px)]">
      <div class="gap-5 lg:gap-8 columns-1 sm:columns-2 lg:columns-3
            [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
         <div v-for="note in data" :key="note._id" class="break-inside-avoid mb-5 whitespace-normal">
            <div class="w-full border-2 rounded-2xl"
            :class="[toolIconsList[note.tool].colors?.border]">
               <div class="w-full flex flex-row border-b-2 p-3 rounded-t-2xl"
               :class="[toolIconsList[note.tool].colors?.bg2,toolIconsList[note.tool].colors?.border]">
                  <p class="px-2 text-xl font-semibold"> {{ note.title }}</p>
               </div>
               <div class="mt-4">
                  <div v-if="note.tag" class="w-full flex justify-start px-2 my-2 text-sm">
                     <div class="px-3 py-1 rounded-full border" :class="[toolIconsList[note.tool].colors?.border]">
                        #{{ note.tag }}
                     </div>
                  </div>
                  <ContentRenderer :value="note" class="prose px-4">
                  </ContentRenderer>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

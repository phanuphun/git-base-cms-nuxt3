<script setup lang="ts">
const { tool } = useRoute().params

const { data } = await useAsyncData('note', () =>
   queryContent('/notes')
      .where({ tool: { $regex: new RegExp(String(tool), 'i') } })
      .sort({ date: -1 })
      .find()
)
onMounted(()=>{
   console.log(tool);
})

</script>

<template>
   <div class="w-full h-full min-h-[calc(100vh-200px)]">
      <div class="gap-5 lg:gap-8 columns-1 sm:columns-2 lg:columns-3
            [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
         <div v-for="note in data" :key="note._id" class="break-inside-avoid mb-5 whitespace-normal">
            <div class="w-full border-2 border-gray-200">
               <div class="w-full flex flex-row border-b-2 p-3 bg-gray-100 ">
                  <!-- <div class="">
                     <iconF :name="checkToolsIcon(note.tool)"></iconF>
                  </div> -->
                  <p class="px-2 text-xl font-semibold"> {{ note.title }}</p>
               </div>
               <div class="mt-4">
                  <ContentRenderer :value="note" class="prose px-5">
                  </ContentRenderer>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

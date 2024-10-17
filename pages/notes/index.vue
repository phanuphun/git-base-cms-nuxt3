<script setup lang="ts">
const { data } = await useAsyncData('note', () => queryContent('/notes').find())

type ToolsType = 'Typescipt'| 'Javascript' | 'Git' | 'Docker' | 'Vue'

function checkToolsIcon(tool:ToolsType) {
   if(tool === 'Git') return 'devicon:git'
   if(tool === 'Typescipt') return 'devicon:typescript'
   if(tool === 'Javascript') return 'devicon:javascript'
   if(tool === 'Docker') return 'devicon:docker'
   if(tool === 'Vue') return 'devicon:vuejs'
   return 'devicon:vscode'
}
</script>

<template>
   <div class="w-full h-full min-h-screen">
      <div class="gap-5 lg:gap-8 columns-1 sm:columns-2 lg:columns-3
            [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
            <div v-for="note in data" :key="note._id" class="break-inside-avoid mb-5 whitespace-normal">

               <div class="w-full border-2 border-gray-200">
                  <div class="w-full flex flex-row border-b-2 p-3 bg-gray-100 ">
                     <div class="">
                        <iconF :name="String(checkToolsIcon(note.tool))"></iconF>
                     </div>
                     <p class="px-2 text-xl font-semibold"> {{ note.title }}</p>
                  </div>
                  <div>
                     <ContentRenderer :value="note" class="prose px-5">
                     </ContentRenderer>
                  </div>
               </div>

         </div>
      </div>

      <!-- <div class="masonry-container columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5">
         <div v-for="note in data" :key="note._id" class="break-inside-avoid mb-5 whitespace-normal">
            <ContentRenderer :value="note" class="prose">

            </ContentRenderer>
            <p class="mt-2">คำอธิบายของรูปหรือเนื้อหาที่เกี่ยวข้อง</p>
         </div>
      </div> -->
   </div>
</template>

<script setup lang="ts">
const { data } = await useAsyncData('note', () => queryContent('/notes').find())

type ToolsType = 'Typescipt'
   | 'Javascript'
   | 'Git'
   | 'Docker'
   | 'Vue'
   | 'NPM'
   | 'Linux'

function checkToolsIcon(tool: ToolsType) {
   if (tool === 'Git') return 'devicon:git'
   else if (tool === 'Typescipt') return 'devicon:typescript'
   else if (tool === 'Javascript') return 'devicon:javascript'
   else if (tool === 'Docker') return 'devicon:docker'
   else if (tool === 'Vue') return 'devicon:vuejs'
   else if (tool === 'NPM') return 'devicon:npm'
   else if (tool === 'Linux') return 'devicon:linux'
   else if (tool === 'EditorConfig') return 'vscode-icons:file-type-editorconfig'
   else if (tool === 'Gulb') return 'vscode-icons:file-type-gulp'
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
               <div class="mt-4">
                  <ContentRenderer :value="note" class="prose px-5">
                  </ContentRenderer>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
import { toolIcons } from '~/model/iConInterface';
useHead({
   title: "Phanuphun.na - Note",
   meta: [
      { name: "description", content: "Phanuphun.na - Note" }
   ]
})


const toolIconslist = toolIcons

</script>

<template>
   <div class="w-full min-h-[calc(100vh-200px)] ">
      <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
         <div v-for="(tool, key) in toolIconslist" :key="key" class="w-full border-2 rounded-xl flex  items-center
         duration-200 hover:-translate-y-0.5 cursor-pointer "
         :class="[tool.colors?.border , tool.colors?.bg , tool.colors?.hover]">
            <NuxtLink :to="`notes/${key}`" class="w-full">
               <div class="w-full h-full flex items-center gap-4 py-3 px-4">
                  <iconF :name="tool.icon"></iconF>
                  <span v-if="key === 'Csharp'">C# </span>
                  <span v-else-if="key === 'ASPDotNetCore'">ASP.NET</span>
                  <span v-else="key === 'Csharp'">{{ key }}</span>
               </div>
            </NuxtLink>
         </div>
      </div>
   </div>
</template>

<style scoped></style>

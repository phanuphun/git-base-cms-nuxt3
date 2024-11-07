<script setup lang="ts">

useHead({
   title: "Phanuphun.na - Note",
   meta: [
      { name: "description", content: "Phanuphun.na - Note" }
   ]
})

interface Colors {
   border:string
   bg:string
   bg2:string
   hover:string
}

interface IconValue {
   icon:string
   colors?:Colors
}

const iconColors:Record<string,Colors> = {
   green:{
      border:"border-green-500",
      hover:"hover:bg-green-100",
      bg:"bg-green-50",
      bg2:"bg-green-100"
   },
   purple:{
      border:"border-purple-500",
      hover:"hover:bg-purple-100",
      bg:"bg-purple-50",
      bg2:"bg-purple-100"
   },
   sky:{
      border:"border-sky-500",
      hover:"hover:bg-sky-100",
      bg:"bg-sky-50",
      bg2:"bg-sky-100"
   },
   orange:{
      border:"border-orange-500",
      hover:"hover:bg-orange-100",
      bg:"bg-orange-50",
      bg2:"bg-orange-100"
   },
   yellow:{
      border:"border-yellow-500",
      hover:"hover:bg-yellow-100",
      bg:"bg-yellow-50",
      bg2:"bg-yellow-100"
   },
   red:{
      border:"border-red-500",
      hover:"hover:bg-red-100",
      bg:"bg-red-50",
      bg2:"bg-red-100"
   },
   pink:{
      border:"border-pink-500",
      hover:"hover:bg-pink-100",
      bg:"bg-pink-50",
      bg2:"bg-pink-100"
   },
}

const toolIcons: Record<string, IconValue> = {
   ASPDotNetCore:{icon:'devicon:dotnetcore',colors:iconColors["purple"]},
   Csharp: {icon:'devicon:csharp',colors:iconColors["purple"]},
   Docker: {icon:'devicon:docker',colors:iconColors["sky"]},
   Git: {icon:'devicon:git',colors:iconColors["orange"]},
   Javascript: {icon:'devicon:javascript',colors:iconColors["yellow"]},
   Linux: {icon:'devicon:linux',colors:iconColors["yellow"]},
   NPM: {icon:'devicon:npm',colors:iconColors["red"]},
   Nuxt: {icon:'devicon:nuxtjs',colors:iconColors["green"]},
   Prisma: {icon:'devicon:prisma',colors:iconColors["purple"]},
   Tailwind: {icon:'devicon:tailwindcss',colors:iconColors["sky"]},
   Typescript: {icon:'devicon:typescript',colors:iconColors["sky"]},
   VsCode: {icon:'devicon:vscode',colors:iconColors["sky"]},
   Vue: {icon:'devicon:vuejs',colors:iconColors["green"]},
}

</script>

<template>
   <div class="w-full min-h-[calc(100vh-200px)] ">
      <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
         <div v-for="(tool, key) in toolIcons" :key="key" class="w-full border-2 rounded-xl flex  items-center
         duration-200 hover:-translate-y-0.5 cursor-pointer "
         :class="[tool.colors!.border , tool.colors!.bg , tool.colors!.hover]">
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



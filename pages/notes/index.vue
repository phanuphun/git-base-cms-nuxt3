<script setup lang="ts">
useHead({
   title: "Phanuphun.na - Note",
   meta: [
      { name: "description", content: "Phanuphun.na - Note" }
   ]
})

const toolIcons: Record<string, string> = {
   // Angular: 'devicon:angularjs',
   ASPDotNetCore:'devicon:dotnetcore',
   // Bootstrap: 'devicon:bootstrap',
   // CSS: 'devicon:css3',
   Csharp: 'devicon:csharp',
   Docker: 'devicon:docker',
   // EditorConfig: 'vscode-icons:file-type-editorconfig',
   // EJS: 'vscode-icons:file-type-ejs',
   // Express: 'devicon:express',
   Git: 'devicon:git',
   // Gulb: 'vscode-icons:file-type-gulp',
   // HTML: 'devicon:html5',
   // HTTP: 'carbon:http',
   Javascript: 'devicon:javascript',
   // JWT: 'logos:jwt-icon',
   Linux: 'devicon:linux',
   // Mermaid: 'vscode-icons:file-type-mermaid',
   // MongoDb: 'devicon:mongodb',
   // MySQL: 'devicon:mysql',
   // NodeJs: 'devicon:nodejs',
   NPM: 'devicon:npm',
   Nuxt: 'devicon:nuxtjs',
   // PHP: 'devicon:php',
   // Postgresql: 'devicon:postgresql',
   // Postman: 'devicon:postman',
   Prisma: 'devicon:prisma',
   // Puppeteer: 'devicon:puppeteer',
   // Python: 'devicon:python',
   // Socketio: 'devicon:socketio',
   Tailwind: 'devicon:tailwindcss',
   Typescript: 'devicon:typescript',
   // Ubuntu: 'logos:ubuntu',
   VsCode: 'devicon:vscode',
   Vue: 'devicon:vuejs',
   // Vuetify: 'devicon:vuetify',
}

const lengthContents = ref<Record<string, { text: string, count: number }>>({});
onMounted(async () => {
   // for (const key in toolIcons) {
   //    let toolCount = await getLengthContent(key)
   //    if (toolCount > 0) {
   //       lengthContents.value[key] = {
   //          text: toolIcons[key],
   //          count: toolCount
   //       }
   //    }
   // }
})

function checkToolsIcon(tool: string): string {
   return toolIcons[tool] || 'devicon:vscode';
}

async function getLengthContent(tool: string): Promise<number> {
   const { data } = await useAsyncData('note', () =>
      queryContent('/notes/')
         .where({ tool: { $regex: new RegExp(tool, 'i') } })
         .count()
   )
   return data.value! || 0
}
</script>

<template>
   <div class="w-full min-h-[calc(100vh-200px)] ">
      <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
         <div v-for="(tool, key) in toolIcons" :key="key" class="w-full border-2 flex  items-center
            hover:bg-gray-100 hover:text-blue-500 cursor-pointer">
            <NuxtLink :to="`notes/${key}`" class="w-full">
               <div class="w-full h-full flex items-center gap-4 py-3 px-4">
                  <iconF :name="checkToolsIcon(key)"></iconF>
                  <span v-if="key === 'Csharp'">C#</span>
                  <span v-else-if="key === 'ASPDotNetCore'">ASP.NET</span>
                  <span v-else="key === 'Csharp'">{{ key }}</span>
               </div>
            </NuxtLink>
         </div>
      </div>
   </div>
</template>

<style scoped></style>

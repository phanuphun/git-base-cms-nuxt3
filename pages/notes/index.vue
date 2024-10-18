<script setup lang="ts">
const { data } = await useAsyncData('note', () =>
   queryContent('/notes')
      .sort({ date: -1 })
      .find()
)

const toolIcons: Record<string, string> = {
   Angular: 'devicon:angularjs',
   Bootstrap: 'devicon:bootstrap',
   CSS: 'devicon:css3',
   Docker: 'devicon:docker',
   EditorConfig: 'vscode-icons:file-type-editorconfig',
   EJS: 'vscode-icons:file-type-ejs',
   Express: 'devicon:express',
   Git: 'devicon:git',
   Gulb: 'vscode-icons:file-type-gulp',
   HTML: 'devicon:html5',
   HTTP: 'carbon:http',
   Javascript: 'devicon:javascript',
   JWT: 'logos:jwt-icon',
   Linux: 'devicon:linux',
   Mermaid: 'vscode-icons:file-type-mermaid',
   MongoDb: 'devicon:mongodb',
   MySQL: 'devicon:mysql',
   NodeJs: 'devicon:nodejs',
   NPM: 'devicon:npm',
   Nuxt: 'devicon:nuxtjs',
   PHP: 'devicon:php',
   Postgresql: 'devicon:postgresql',
   Postman: 'devicon:postman',
   Prisma: 'devicon:prisma',
   Puppeteer: 'devicon:puppeteer',
   Python: 'devicon:python',
   Socketio: 'devicon:socketio',
   Steam : 'cib:steam',
   Tailwind: 'devicon:tailwindcss',
   Typescript: 'devicon:typescript',
   Ubuntu: 'logos:ubuntu',
   Vue: 'devicon:vuejs',
   Vuetify: 'devicon:vuetify',
}

onMounted(() => {
   console.log(toolIcons['Git']);
})

function checkToolsIcon(tool: string): string {
   return toolIcons[tool] || 'devicon:vscode';
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
                     <iconF :name="checkToolsIcon(note.tool)"></iconF>
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

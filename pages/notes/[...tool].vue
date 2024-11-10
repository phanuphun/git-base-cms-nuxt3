<script setup lang="ts">
const { tool } = useRoute().params
const { data } = await useAsyncData('note', () =>
   queryContent('/notes')
      .where({ tool: { $regex: new RegExp(String(tool), 'i') }, draft: false })
      .sort({ date: -1, path: -1 })
      .find()
)

interface Colors {
   border: string
   bg: string
   bg2: string
   hover: string
}

interface IconValue {
   icon: string
   colors?: Colors
}

const iconColors: Record<string, Colors> = {
   green: {
      border: "border-green-500",
      hover: "hover:bg-green-100",
      bg: "bg-green-50",
      bg2: "bg-green-100"
   },
   purple: {
      border: "border-purple-500",
      hover: "hover:bg-purple-100",
      bg: "bg-purple-50",
      bg2: "bg-purple-100"
   },
   sky: {
      border: "border-sky-500",
      hover: "hover:bg-sky-100",
      bg: "bg-sky-50",
      bg2: "bg-sky-100"
   },
   orange: {
      border: "border-orange-500",
      hover: "hover:bg-orange-100",
      bg: "bg-orange-50",
      bg2: "bg-orange-100"
   },
   yellow: {
      border: "border-yellow-500",
      hover: "hover:bg-yellow-100",
      bg: "bg-yellow-50",
      bg2: "bg-yellow-100"
   },
   red: {
      border: "border-red-500",
      hover: "hover:bg-red-100",
      bg: "bg-red-50",
      bg2: "bg-red-100"
   },
   pink: {
      border: "border-pink-500",
      hover: "hover:bg-pink-100",
      bg: "bg-pink-50",
      bg2: "bg-pink-100"
   },
   gray: {
      border: "border-gray-500",
      hover: "hover:bg-gray-100",
      bg: "bg-gray-50",
      bg2: "bg-gray-100"
   }
}

const toolIcons: Record<string, IconValue> = {
   ASPDotNetCore: { icon: 'devicon:dotnetcore', colors: iconColors["purple"] },
   Csharp: { icon: 'devicon:csharp', colors: iconColors["purple"] },
   Docker: { icon: 'devicon:docker', colors: iconColors["sky"] },
   Eslint: { icon: 'devicon:eslint', colors: iconColors["purple"] },
   Express: { icon: 'devicon:express', colors: iconColors["gray"] },
   Git: { icon: 'devicon:git', colors: iconColors["orange"] },
   Javascript: { icon: 'devicon:javascript', colors: iconColors["yellow"] },
   Linux: { icon: 'devicon:linux', colors: iconColors["yellow"] },
   NodeJs : {icon:'logos:nodejs-icon',colors:iconColors["green"]},
   // NPM: { icon: 'devicon:npm', colors: iconColors["red"] },
   Nuxt: { icon: 'devicon:nuxtjs', colors: iconColors["green"] },
   Prisma: { icon: 'devicon:prisma', colors: iconColors["gray"] },
   Tailwind: { icon: 'devicon:tailwindcss', colors: iconColors["sky"] },
   Typescript: { icon: 'devicon:typescript', colors: iconColors["sky"] },
   VsCode: { icon: 'devicon:vscode', colors: iconColors["sky"] },
   Vue: { icon: 'devicon:vuejs', colors: iconColors["green"] },
   Windows: { icon: 'devicon:windows8', colors: iconColors["sky"] },
}

</script>

<template>
   <div class="w-full h-full min-h-[calc(100vh-200px)]">
      <div class="gap-5 lg:gap-8 columns-1 md:columns-2
            [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
         <div v-for="note in data" :key="note._id" class="break-inside-avoid mb-5 whitespace-normal">
            <div class="w-full border-2 rounded-2xl" :class="[toolIcons[note.tool].colors!.border]">
               <div class="w-full flex flex-row border-b-2 p-3 rounded-t-2xl"
                  :class="[toolIcons[note.tool].colors!.bg2, toolIcons[note.tool].colors!.border]">
                  <p class="px-2 text-xl font-semibold"> {{ note.title }}</p>
               </div>
               <div class="mt-4">
                  <div v-if="note.tag" class="w-full flex justify-start px-2 my-2 text-sm">
                     <div class="px-3 py-1 rounded-full border" :class="[toolIcons[note.tool].colors!.border]">
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

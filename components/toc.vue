<script setup lang="ts">

const isDark = useTheme()

interface TocLink {
   id: string;
   text: string;
   depth: number;
   children?: TocLink[];
}

interface Toc {
   title: string;
   depth: number;
   searchDepth: number;
   links: TocLink[];
}

const props = defineProps<{
   contents?: Array<TocLink>
}>()

</script>

<template>
   <div class="w-full flex flex-col">
      <div class="text-xl font-text font-bold">
         <!-- <Icon name="uil:bookmark-full" size="25px" class="text-black -mb-2"
         :class="{ 'dark:text-white': isDark }" /> -->
         Table of Contents
      </div>
      <div class="px-4 py-1">
         <div v-for="(content,index) in props.contents"
         class="w-full"
         :key="content.id">
            <NuxtLink :to="`#${encodeURIComponent(content.id)}`">
               <div
               class="mt-1 px-3 py-1 rounded-md hover:bg-gray-200 cursor-pointer"
               :class="{'dark:hover:bg-gray-700' : isDark}">
                  <li>{{ content.text }}</li>
               </div>
            </NuxtLink>
         </div>

         <!-- <li v-for="content in props.contents">
            <NuxtLink :to="`#${encodeURIComponent(content.id)}`" class="hover:text-blue-500 cursor-pointer">
               {{ content.text }}
            </NuxtLink>
         </li> -->
      </div>
   </div>
</template>

<style scoped></style>

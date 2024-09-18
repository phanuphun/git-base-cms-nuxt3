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
   <div class="w-full flex flex-col ">
      <div class="text-2xl font-semibold font-text border-b-2 border-dashed pb-2 text-center">
         <!-- <Icon name="uil:bookmark-full" size="25px" class="text-black -mb-2"
         :class="{ 'dark:text-white': isDark }" /> -->
            Table of Contents
      </div>
      <div class="py-2 max-h-screen overflow-y-scroll px-2">
         <div v-for="(content,index) in props.contents"
         class="w-full"
         :key="content.id">
            <NuxtLink :to="`#${encodeURIComponent(content.id)}`">
               <div
               class="mt-1 px-8 py-2 rounded-md hover:bg-gray-200 cursor-pointer"
               :class="{'dark:hover:bg-gray-700' : isDark}">
               {{index+1}} - {{ content.text }}
               </div>
            </NuxtLink>
         </div>
      </div>
   </div>
</template>

<style scoped></style>

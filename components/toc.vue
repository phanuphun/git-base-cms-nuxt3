<script setup lang="ts">

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
   <div class="w-full  flex flex-col border-2 border-gray-200">
      <div class="text-md bg-gray-100 p-2 text-center border-b-2 border-gray-200">
         Table of Contents
      </div>
      <div class="px-4 py-2">
         <li v-for="content in props.contents">
            <a :href="`#${encodeURIComponent(content.id)}`" class="hover:text-blue-500 cursor-pointer">
               {{ content.text }}
            </a>
         </li>
      </div>
   </div>
</template>

<style scoped></style>

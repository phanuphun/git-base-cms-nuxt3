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

const scrolledToTop = ref<boolean>(false)
const handleScroll = () => {
   //เก็บตำแหน่งปัจจุบันที่เลื่อนอยู่
   // 1. window.scrollY สำหรับเบราวน์เซอร์ใหม่
   // 2. document.documentElement.scrollTop สำหรับเบราวน์เซอร์เก่า
   const scrollPosition = window.scrollY || document.documentElement.scrollTop;

   // ตำแหน่งที่ต้องการตรวจจับ `top-4` (4rem = 64px)
   const targetPosition = 64;

   // ถ้าตำแหน่งปัจจุบันมากกว่าตำแหน่งที่ตั้งไว้ให้ set ค่าใหม่
   scrolledToTop.value = scrollPosition >= targetPosition;
};

onMounted(() => {
   window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
   window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
   <div class="w-full flex flex-col"
      :class="{ 'max-h-[calc(100vh-3rem)] pb-5': !scrolledToTop, 'max-h-screen pb-5': scrolledToTop }">
      <div class="text-2xl font-semibold font-text pb-2 text-center">
         เนื้อหา
      </div>
      <hr class="text-xl">
      <div class="pt-2 max-h-screen overflow-y-scroll px-2">
         <div class="w-full">
            <div class="mt-1 py-1 pl-4 rounded-md">
               <ul class="list-outside">
                  <li v-for="(content, index) in props.contents" :key="content.id"
                     class="mt-2 list-none text-md w-full  ">
                     <NuxtLink :to="`#${encodeURIComponent(content.id)}`">
                        <span class="text-lg font-semibold hover:text-blue-500">
                           {{ content.text }}
                        </span>
                     </NuxtLink>
                     <ul class="pl-8 list-outside" v-if="content.children">
                        <li v-for="(subContent, index) in content.children" :key="subContent.id"
                           class=" list-disc hover:text-blue-500 text-md w-full">
                           <NuxtLink :to="`#${encodeURIComponent(subContent.id)}`">
                              <span class="">
                                 {{ subContent.text }}
                              </span>
                           </NuxtLink>
                        </li>
                     </ul>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</template>

<style scoped></style>

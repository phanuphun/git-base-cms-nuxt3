<script setup lang="ts">
import { useTheme } from '#imports';
import data from '../content/personal/personalData.json'

const isDark = useTheme()
const navbarH = '64px'


</script>

<template>
   <div class=" text-md rounded-lg w-full break-words flex flex-wrap justify-center items-center py-16">
      <div class="w-1/5 flex justify-center items-center">
         <div class="w-fit rounded-full border-2 drop-shadow-2xl
         transition-all duration-500 grayscale hover:grayscale-0"
         :class="{ 'bg-gray-800 hover:bg-gray-700 grayscale-0': isDark }">
            <img :src="data.image" alt="" class="rounded-full object-cover ">
         </div>
      </div>
      <div class="w-1/2 flex flex-col justify-center items-start pl-8 ">
         <p class="text-4xl">
            <span class="animate-bounce"> 👋 </span>
             สวัสดี! ผม
            <span class="font-bold">
               {{ data.name }}
            </span>
         </p>
         <p class="text-2xl mt-4">
            ยินดีตอนรับเข้าสู่เว็บบล็อคของผมเอง ที่ผมจะเขียนบันทึกต่างๆหรืออะไรก็ตามเพื่อที่จะได้กลับย้อนอ่านอีกครั้ง
         </p>
         <div class="flex flex-wrap mt-6 gap-3">
            <Btn name="การศึกษา" :disable="false"></Btn>
            <Btn name="ประสบการณ์" :disable="false"></Btn>
            <Btn name="ผลงาน" :disable="false"></Btn>
         </div>
         <div class="flex flex-wrap mt-6 gap-3">
            <Tag v-for="a in data.skills">
               {{  a }}
            </Tag>
         </div>
      </div>

   </div>
</template>

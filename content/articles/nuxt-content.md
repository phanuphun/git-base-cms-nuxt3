---
title: บันทึกการใช้ Nuxt Content
date: '2024/09/12'
description: บันทึกการใช้งาน nuxt Content ในการทำเว็บบล็อคเวอร์ชัน 2.13.2
tags: ['nuxt' , 'nuxt content' ,'vue']
thumbnail: 'https://miro.medium.com/v2/resize:fit:864/1*H-hII9inrBamchRCz8EWaw.png'
path: "nuxt-content"
draft: true
---
## Files and folders
- `content` : โฟลเดอร์สำหรับจัดเก็บไฟล์ `.md` `.json` หรือ `.yaml` ในการเขียนและจัดการข้อมูลในไฟล์เอกสารนั้นๆ
- `page` : โฟลเดอร์ที่ใช้ในการจัดการ rounting ต่างๆใน Nuxt
- `[...slug.vue]` : ไฟล์สำหรับการทำ dynamic routing ในการแสดงเนื้อหาจากโฟลเดอร์ content โดย slug จำทำหน้าที่เป็นตัวแปรในการดึงเนื้อหานั้นๆ

## Markdown
ไฟล์เอกสารที่อยู่ในรูปแบบนามสกุล `.md` ที่ใช้ในการเขียนบทความ โดยทาง nuxt content จะมีสิ่งที่เรียกว่า `Front matter` ในการกำหนดค่าต่างๆได้ ทั้งนี้ค่า parameter อย่าง `title` หรือ `description` เรายังสามารถปรับแต่งเองได้ตามใจชอบอีกด้วยเช่น parameter `tags`
```md
---
// native parameter
title: 'Title of the page'
description: 'meta description of the page'

// custom parameter
tags: ['tag1' , 'tag2' ]
---
```
::Card
#note-header
Native parameter
#note-text
 เป็นค่าที่ Nuxt Content รองรับและสามารถนำไปใช้ใน SEO หรือแสดงผลในส่วนต่างๆ ของหน้าเว็บ
::

## Add Markdown style
การแสดงผลเอกสารรูปแบบ Markdown ในตอนนี้จะเป็นเพียง plain text ธรรมดาๆ เราจำเป็นต้องเขียน style ขึ้นมาเองหรือลง style แยกเองในที่นี้ผมใช้ tailwind css ซึ่งจำเป็นต้องลง `@tailwindcss/typography` เพิ่มอีกที เนื่องจากตัว tailwind ไม่ได้ให style พื้นฐานของแท็ก html มา

**วิธิการติดตั้ง**
1. ติดตั้งปลั๊กอิน typography ของ Tailwind `npm install @tailwindcss/typography`
2. เพิ่มปลั๊กอินลงในไฟล์ `tailwind.config.js`
```ts
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
```
3. เรียกใช้ Class `prose` ที่ส่วนแสดงผลไฟล์ markdown
```vue
<template>
   <ContentRenderer :value="doc" class="prose max-w-full"></ContentRenderer>
</template>
```

## queryContent
`queryContent()` เป็น composable ที่ช่วยในการดึงข้อมูลเอกสารหนึ่งเอกสาร
```vue
<script setup>
   const { data } = await useAsyncData('home', () => queryContent('/').findOne())
</script>

```
## ContentDoc
`ContentDoc` เป็น component ที่ใช้ในการดึงเนื้อหาไฟล์เอกสารมาเพียงหนึ่งไฟล์เท่านั้น
- `path` : กำหนด path directory ในการดึงไฟล์
- `v-slot` : ใช้เพื่อดึงข้อมูลเนื้อหารายการออกมา โดย `doc` เป็น slot prop ที่ใช้ในการแสดงเนื้อหาใน template
```vue
<template>
   <ContentDoc :path="`/articles/${fileName}`" v-slot="{ doc }">
      <pre> {{doc}} </pre>
   </ContentDoc>
</template>
```

## ContentList
`<contentList>` เป็น component ที่ใช้ในการดึงและแสดงไฟล์เอกสารออกมา สามารถระบุ attribute ที่เฉพาะเจาะจงได้ในการดึงไฟล์เอกสารที่เฉพาะเจาะจง เช่น
- `path` : กำหนด path directory ในการดึงไฟล์ในโฟลเดอร์นั้นๆ
- `field` : กำหนด field ที่เรากำหนด front matter ในไฟล์ `.md` มา เช่น title , description หรือ tags(ที่เรากำหนดเอง)
- `query` : ใช้เงื่อนไขในการกำหนด
- `v-slot` : ใช้เพื่อดึงข้อมูลเนื้อหารายการออกมา โดย `list` เป็น slot prop ที่ใช้ในการแสดงเนื้อหาใน template

```vue
<script setup lang="ts">
   const queryParams = {
      sort: [{date: -1}] //เรียงลำดับวันที่จากมากไปน้อย (หรือจากล่าสุดไปเก่า)
   }
</script>

<template>
   <ContentList
      :path="`/articles`"
      fields="title,path"
      :query="queryParams"
      v-slot="{ list }"
   >
      <pre> {{list}} </pre>
   </ContentList>
</template>
```

## ContentRenderer
`ContentDoc` เป็น component ที่ใช้ในการแสดงผลไฟล์ `.md` โดยสามารถใช้ร่วมกับ `ContentDoc` หรือ `queryContent()` ก็ได้

1. การใช้งานร่วมกับ `queryContent()`
```vue
<script setup lang="ts">
   const { data } = await useAsyncData('home', () => queryContent('/').findOne())
</script>

<template>
   <ContentRenderer :value="data">
      <h1> {{data.title}} </h1>
   </ContentRenderer>
</template>
```

2. การใช้งานร่วมกับ `ContentDoc`
```vue
<template>
   <ContentDoc :path="`/articles/${path}`" v-slot="{ doc }">
      <ContentRenderer>
         <h1> {{doc.title}} </h1>
      </ContentRenderer>
   </ContentDoc>
</template>
```

## การทำ TOC
TOC หรือ Table of content เป็นการทำสารบัญจากแท็ก `h1` , `h2` และ `h3` เพื่อง่ายต่อการเลื่อนดูเนื้อหาโดยแยกตามหัวข้อที่แปลง markdown มาเป็น html
1. ดึงเนื้อหาไฟล์เอกสารออกมาด้วย `queryContent()` หรือ `ContentDoc` ในที่นี้จะเลือกใช้ `queryContent()`
```vue
<script setup lang="ts">
   // โครงสร้างข้อมูล TOC
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

   const { data } = await useAsyncData('home', () => queryContent(`/articles/${path}`).findOne())
   const tocData = data.value?.body?.toc?.links
</script>
```


2. การนำไปใช้งาน โดยจะนำ `link.id` ไปใช่งานในแท็ก `<a>` เพื่อใช้เลื่อนไปตามหัวข้อของบทความ โดยจะใช้ฟังก์ชัน `encodeURIComponent` เข้ารหัสข้อมูลเพื่อป้องกันความผิดพลาดจากช่องว่าง space bar ที่จะถูกแทนที่ด้วยอักขระพิเศษ เช่น # % หรือ ?
```vue
<template>
   <div class="px-4 py-2">
      <li v-for="link in tocData">
         <a :href="`#${encodeURIComponent(link.id)}`"
         class="hover:text-blue-500 cursor-pointer">
            {{ link.text }}
         </a>
      </li>
   </div>
</template>
```

## อ้างอิง
- https://content.nuxt.com/get-started/installation
- https://github.com/nuxt/content/discussions/1343

---
title: บันทึกการใช้ Nuxt Content
date: '2024/09/12'
description: บันทึกการใช้งาน nuxt Content ในการทำเว็บบล็อคเวอร์ชัน 2.13.2
tags: ['nuxt' , 'nuxt content' ,'vue']
thumbnail: 'https://miro.medium.com/v2/resize:fit:864/1*H-hII9inrBamchRCz8EWaw.png'
path: "nuxt-content"
draft: true
---
### Folders and Files
- content โฟลเดอร์สำหรับจัดเก็บไฟล์ .md .json .yaml ในการเขียน content
- page โฟลเดอร์ที่ใช้ในการจัดการ Rounting ต่างๆใน Nuxt
    - ในโฟลเดอร์นี้จะต้องมีไฟล์ `[...slug.vue]`เพื่อใช้ในการดึงเนื้อหาต่างๆในโฟลเดอร์ Content มาแสดง

### Markdown

### Markdown style
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
    <ContentRenderer :value="doc" class="prose max-w-full"></ContentRenderer>
```
::Card
#note-text
ปัญหานี้เกิดจากตัว Tailwind ไม่ได้ให้ style พื้นฐานสำหรับแท็ก Html มาพอนำ Markdown มา Render เป็น Html จึงทำให้ไม่มีสไตล์แล้วกลายเป็น Plain text ธรรมดาๆ
::

### ContentList
`<contentList>` เป็น component ที่ใช้ดึงไฟล์เอกสารในโฟลเดอร์ออกมา สามารถระบุ `path` หรือ `field` ที่เฉพาะเจาะจงได้ รวมไปถึงการ filter โดยใช้ `query` ได้ด้วยในการทำ search
```vue
<ContentList
   :path="`/articles`"
   fields="title,path"
   :query="queryParams">
</ContentList>
```

### ContentDoc

### ContentRenderer

### Search
```ts
const search = ref('')
const searchParams = computed(() => ({
  where: [{ title: { $contains: search.value } }]
}))
```

```vue
<ContentList
   :path="`/articles`"
   :query="searchParams">
</ContentList>
```




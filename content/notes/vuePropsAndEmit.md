---
title: การรับและการส่งออกค่าใน Component
date: '2024/09/12'
tool: Vue
img: ''
path: vuePropsAndEmit
draft: false
---

1. การรับค่าเข้ามาใน Component <br>

```vue
<!-- Component -->
<script setup lang="ts">
    const props = defineProps<{
        email:string
    }>()
</script>

<!-- Parent -->
<script setip lang="ts">
</script>
<template>
   <ComponentName email="ใส่ค่าลงไป" >
</template>
```

2. การปล่อยค่าออกจาก Component
```vue
<!-- Component -->
<script setup lang="ts">
   const emit = defineEmits<{
      (event:'EventName',size: Type):void
   }>()
</script>

<!-- Parent -->
<script setip lang="ts">
</script>
<template>
   <!--
   vue จะเปลี่ยน camel case  เป็น kebab case
   เช่น EventName => event-name
   *** ต้องรรับค่าเป็น CallBack Funtion เท่านั้น
   -->
   <ComponentName @event-name="(valueReturn:T)
   => { someFunction() }" >
</template>
```

---
title: การรับและการส่งออกค่าใน Component
date: '2024/10/17'
tool: Vue
tag: Basic
img: ''
path: vuePropsAndEmit
draft: false
---

1. **การรับค่าเข้ามาใน Component** <br>

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

2. **การปล่อยค่าออกจาก Component** <br>
vue จะเปลี่ยน event name จาก camel case  เป็น kebab caseเช่น EventName => event-name
***โดยจะรับค่าด้วย CallBack Funtion***
```vue
<!-- Component -->
<script setup lang="ts">
   const emit = defineEmits<{
      (event:'EventName',size: T):void
   }>()
</script>

<!-- Parent -->
<script setip lang="ts">
</script>
<template>
   <ComponentName @event-name="(valueReturn:T) => { someFunction() }" />
</template>
```

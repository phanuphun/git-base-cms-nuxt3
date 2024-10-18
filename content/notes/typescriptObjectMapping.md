---
title: การทำ Object Mapping
date: '2024/10/18'
tool: Typescript
img: ''
path: typescriptObjectMapping
draft: false
---

เป็นเทคนิคที่ใช้ **Object** ในการจับคู่กับ **Key**
```ts
const toolColors: Record<string, string> = {
  Docker: 'blue',
  Git: 'orange',
};

function getColor(tool: string): string {
  return toolColors[tool] || 'black';
}
```

---
title: การใช้งาน Split
date: '2024/10/23'
tool: Javascript
tag: Array Method
img: ''
path: split
draft: false
---

split เป็น Array Method ที่เหมาะใช้งานกับตัวแปรที่เป็น String แล้ว Return ค่าออกมาเป็น Array

`.split(condition,limit)`
- condition : เงื่อนไขในการแยกออก
- limit : จำนวน Array ที่จะ Return ออกมา

```js
let text = 'Lorem ipsum dolor sit amet'
text.split(' ')
//output : [ 'Lorem', 'ipsum', 'dolor', 'sit', 'amet' ]
text.split(' ',3)
//output : [ 'Lorem', 'ipsum', 'dolor' ]
```

---
title: การใช้งาน Splice
date: '2024/10/22'
tool: Javascript
tag: Array Method
img: ''
path: splice
draft: false
---
splice เป็น Array Method ที่ใช้ในการเปลี่ยนแปลง Array โดยมีความคล้ายกัย slice Method แต่จะแตกต่างตรงที่ splice ไม่ใช่การสร้าง Array ขึ้นมาใหม่แต่เป็นการเพิ่มลบหรือแก้ไขใน Array นั้นๆ

`arr.splice(start , deleteCount , 'item_1' , 'item_n' , ...)`
- **start** : ตำแหน่ง Index ที่เริ่มต้น
- **deleteCount** : จำนวนที่ต้องการลบออกนับจากจุดเริ่มต้น
- **item_1 - item_n** : ตำแหน่งนี้จะใช้ในการเพิ่ม item เข้าไปใน Array และไม่ได้จำกัดเพียงทีละหนึ่ง

**ตัวอย่าง Array ที่จะใช้งาน** <br>
```js
let arr  = ['Apple','Banana','Carrot','Potato','Wasabi','Fennel']
```

**ตัวอย่างการใช้งานในการนำ item ออก**
```js
arr.splice(0,3)
//outupt ['Apple','Banana','Carrot']
arr.splice(3,5)
//outupt ['Potato','Wasabi','Fennel']
```
> ในที่นี้เนื่องจาก arr มี 5 ชิ้นเมื่อเริ่มที่ index ที่ 3 ซึ่งก็คือ Potato , Wasabi , Fennel ที่จะถูกตัดออกและส่งคืนค่ากลับมามาเพียงแค่สามชิ้นเท่านั้นเนื่องจากตัว arr มีจำนวนจำกัดแล้ว


**ตัวอย่างการใช้งานในการนำ item ออก**
```js
arr.splice(0,0,'Peach')
//output ['Peach','Apple','Banana','Carrot','Potato','Wasabi','Fennel']
```
> การใช้ splice จะคืนค่าที่ delete ออกมาเราสามารถนำตัวแปรมาเก็บค่าๆนั้นได้ซึ่งจะส่งคืนมาเป็น array

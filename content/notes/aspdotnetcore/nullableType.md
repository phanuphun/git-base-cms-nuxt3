---
title: เครื่องหมาย Nullable Type
date: 2024/10/31
tool: ASPDotNetCore
tag: Basic
img: ""
path: nullableType
---

|Operator|Description|
|:---:|:---:|
|`?`|ใช้ระบุว่า Value Type นั้นสามารถเป็น null ได้|
|`!`|ใช้ยืนยันว่า ตัวแปรจะไม่เป็น null|
|`?.`|ใช้เพื่อตรวจสอบว่า ตัวแปรเป็น null ไหมก่อนเข้าถึงสมาชิกใน Property หรือ Method|
|`??`|ใช้เพื่อตรวจสอบว่าตัวแปรเป็น null หรือไม่ หากเป็น null จะใช้ค่าที่กำหนดแทน|
|`??=`|ใช้กำหนดค่าให้ตัวแปร เฉพาะเมื่อ ตัวแปรนั้นเป็น null|
|`[Required]`|ระบุว่า Property นี้ต้องมีค่าเสมอและไม่เป็น null เพื่อให้ EF Core ตรวจสอบ|

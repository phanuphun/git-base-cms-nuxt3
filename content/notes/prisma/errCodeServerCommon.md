---
title: Error Codes ที่เกิดจากฝั่ง Server
date: '2024/11/07'
tool: Prisma
tag: Error
img: ''
path: errCodeServerCommon
draft: false
---

|Code|Description|
|:---:|:---:|
|`P1000`|**Authentication failed** - เกิดจากการตรวจสอบสิทธิ์ในการเชื่อมต่อฐานข้อมูลเช่น username หรือ password ให้ตรวจสอบที่ไฟล์ .env|
|`P1001`|**Database server not found** - ไม่สามารถเชื่อมต่อไปยังเซิรืฟเวอร์ได้ port อาจผิดพลาดหรือเซิร์ฟเวอร์ยังไม่ได้รัน|
|`P1002`|**The database connection was closed** - การเชื่อมต่อกับฐานข้อมูลถูกปิดระหว่างที่ Prisma กำลังดำเนินการอยู่|
|`P1003`|**Database does not exist** - ไม่พบฐานข้อมูลที่ระบุในไฟล์ .env|
|`P1008`|**Operation timed out** - การดำเนินการเชื่อมต่อกับฐานข้อมูลเกินเวลาที่กำหนด|
|`P1009`|**Database already exists** - เกิดจากการที่พยายามสร้างฐานข้อมูลที่มีอยู่แล้ว|
|`P1010`|**User is not allowed to connect to the database** - ผู้ใช้ไม่มีสิทธิ์ในการเชื่อมต่อกับฐานข้อมูล|
|`P1011`|**Error opening a TLS connection** - ไม่สามารถเปิดการเชื่อมต่อแบบ TLS กับฐานข้อมูลได้ อาจเกิดจากการตั้งค่า SSL ที่ไม่ถูกต้อง|
|`P1012`|**Schema Validation Error** - เกิดข้อผิดพลาดเกี่ยวกับ schema เมื่ออัปเกรด Prisma เป็นเวอร์ชัน 4.0.0 ขึ้นไป|
|`P1013`|**Invalid Database String** - เกิดจากการใช้ database string ที่ไม่ถูกต้อง ให้ตรวจสอบรูปแบบ connection string ที่ใช้สำหรับเชื่อมต่อกับฐานข้อมูล|
|`P1014 `|**Missing Underlying Resource** - เกิดขึ้นเมื่อ resource ที่ใช้งานโดย Prisma (เช่น ตารางในฐานข้อมูล) ไม่สามารถใช้งานได้หรือไม่มีอยู่จริง ตัวอย่างเช่น การเชื่อมต่อกับฐานข้อมูลที่ขาดตารางที่จำเป็น|
|`P1015`|**Unsupported Database Features** - เกิดจากการใช้ Prisma schema ที่ใช้ฟีเจอร์ที่ฐานข้อมูลเวอร์ชันปัจจุบันไม่รองรับ|
|`P1016`|**Incorrect Number of Query Parameters** - เกิดจากการใช้ raw query ที่มีจำนวนพารามิเตอร์ไม่ถูกต้องตามที่คาดไว้|
|`P1017`|**Server Closed Connection** - เกิดขึ้นเมื่อเซิร์ฟเวอร์ปิดการเชื่อมต่อระหว่างการประมวลผล|

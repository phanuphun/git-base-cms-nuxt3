---
title: แก้ปัญหาเปิด https://localhost ไม่ได้
date: 2024/10/24
tool: ASPDotNetCore
tag: Config
img: ""
path: mvcDirectorryStructure
draft: false
---
ปัญหานี้เกิดจากเบราว์เซอร์ไม่เชื่อถือใบรับรอง(SSL/TLS Certificate) ที่สร้างมาจาก localhost ในการพัฒนาบนเครื่อง

**วิธีแก้** <br>
1. เปิด terminal
2. รันคำสั่ง `dotnet dev-certs https --trust`
3. จากนั้นให้ลองเข้าใหม่ดู หากไม่ได้ให้ปิดหน้าเว็บทั้งหมดที่เปิดอยู่ หรือล้างแคชบนเบราว์เซอร์

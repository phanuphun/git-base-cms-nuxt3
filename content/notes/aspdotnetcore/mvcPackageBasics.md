---
title: แพ็คเกจ Entity Framework Core ในการเชื่อมต่อและจัดการฐานข้อมูล
date: 2024/10/24
tool: ASPDotNetCore
tag: Package
img: ""
path: mvcPackageBasics
---

ในการพัฒนาเว็บด้วย ASP.NET Core MVC ที่ต้องการเชื่อมต่อและจัดการฐานข้อมูลโดยใช้ **Entity Framework Core** (EF Core) และ **SQL Server** เป็นฐานข้อมูลหลัก จำเป็นต้องติดตั้ง Package เหล่านี้

1. **Microsoft.EntityFrameworkCore** : เป็น ORM หลักๆของ EF Core โดยจัดการด้วยการเขียน C# Object (Model Class) แทนการเขียน SQL ตรงๆ ในส่วนนี้เราสามารถใช้คำส่ง CRUD ได้ง่ายๆ
2. **Microsoft.EntityFrameworkCore.SqlServer** : ทำให้ EF Core ติดต่อกับ Microsoft SQL Server ได้
3. **Microsoft.EntityFrameworkCore.Tools** : เครื่องมือสำหรับการ migration และการตั้งค่าฐานข้อมูลผ่าน CLI คำสั่งหลักๆดังนี้ <br>
   `add-migration <migration-name>` : สร้างไฟล์ migration สำหรับฐานข้อมูลโดยอิงจาก Models ของเรา <br>
   `update database` : นำไฟล์ migration ไปใช้งาน <br>

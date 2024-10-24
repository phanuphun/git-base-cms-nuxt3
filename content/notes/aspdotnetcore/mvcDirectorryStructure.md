---
title: โครงสร้างไฟล์การพัฒนาเว็บด้วย MVC
date: 2024/10/24
tool: ASPDotNetCore
tag: MVC
img: ""
path: mvcDirectorryStructure
draft: false
---

| location | Purpose |
| -------- | ------- |
|/Controllers| เก็บโค้ดส่วนต่างๆที่เกรายวกับการรับ Request , Response และส่งข้อมูลไปยังส่วนของ Model และ View|
|/Models|เก็บโครงสร้างต่างๆของข้อมูล|
|/Views|เก็บส่วนของการแสดงผล html เอาไว้โดยมีนามสกุลเป็น .cshtml|
|/Views/Shared|เก็บ Layout ส่วนต่างๆที่ Views ใช้ร่วมกันเช่น Navbar , Footer|
|/wwwroot|เก็บ Static File เช่น CSS, JavaScript, รูปภาพ|
|Program.cs|จุดเริ่มต้นของโปรแกรม|
|appsettings.json|เก็บ Config ต่างๆเอาไว้เช่น การเชื่อมต่อข้อมูล|
|projectName.csproj|ไฟล์โปรเจกต์ที่เก็บข้อมูลการตั้งค่า เช่น แพ็คเกจ NuGet ที่ใช้ในโปรเจกต์|

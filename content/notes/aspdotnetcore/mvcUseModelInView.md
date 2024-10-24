---
title: การนำ Model เข้ามาใช้งานใน View
date: 2024/10/24
tool: ASPDotNetCore
tag: MVC
img: ""
path: mvcNewModels
---

1. **การแสดงผลแบบรายการเดียว** : ในส่วนของ Contollers จะ Return View ออกไปพร้อมกับข้อมูล(Data) โดยที่ View ที่จะรับค่านั้นมาก็ต้องเป็นไฟล์ที่มีชื่อเดียวกันกับ Controller ที่ส่งมา การที่จะเรียกใช้ข้อมูลได้จำเป็นต้อง Import Model เข้ามาก่อน ดังนี้ `@model ProjectName.Models.ModelName;` และเมื่อ Import มาแล้วเราสามารถใช้ `@Student.Field` ได้เลย
```csharp
// Controller
return View(Student)
```
```csharp
// View
@model DotNet.Models.Student;
<p> รหัสนักเรีน : @student.Id </p>
```

2. **การแสดงผลแบบหลายรายการ** : ในกรณีที่มีข้อมูลจำนวนหนึ่งไม่ได้มีชิ้นเดียวเราจะเป็นวนลูปเพื่อเรียกข้อมูล โดยที่เราจำเป็นต้องใช้ `IEnumerable<T>`
```csharp
// Controller
List<Student> students = new List<Student>();
return View(students )
```

```csharp
// View
@model IEnumerable<Student>;
@foreach(var student in Model)
{
   <p> รหัสนักเรีน : @student.Id </p>
}

```

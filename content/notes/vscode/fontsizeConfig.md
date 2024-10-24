---
title: การปรับ Font Size เฉพาะไฟล์
date: '2024/10/24'
tool: VsCode
subTool: EditorConfig
img: ''
tag: Config
path: fontsizeConfig
draft: false
---
การปรับ Font Size เฉพาะไฟล์ในที่นี้จะปรับเฉพาะไฟล์ `.md` โดยไปที่ `setting.json`

1. ไปที่ Settings บน Vs code หรือกดคีย์ลัด (`Ctrl + ,`)
2. จากนั้นพิมพ์ setting บนช่องค้นหาจะเจอ **Workbench › Settings: Apply To All Profiles** จะเจอปุ่ม `Edit in setting.json`
3. เพิ่ม Setting ตามโค้ดด้านล่างนี้ จากนั้นก็บันทึก
```js
"[markdown]": {
   "editor.fontFamily": "Comic Sans MS",
   "editor.fontSize": 18,
   "editor.lineHeight": 24
}
```

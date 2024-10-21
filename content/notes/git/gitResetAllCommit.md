---
title: วิธีลบ Commit ทั้งหมดใน Repository
date: '2024/10/21'
tool: Git
img: ''
path: gitResetAllCommit
draft: false
---

1. สร้าง Branch ใหม่โดยที่ไม่ให้ Branch มีความเชื่อมโยงใดๆกับ Branch อื่นๆ <br>
`git checkout --orphan latest_branch`
2. เพิ่มไฟล์ทั้งหมดลงใน Staging Area <br>
`git add -A`
3. Commit ทุกไฟล์ที่อยู่ใน Staging Area <br>
`git commit -am "commit message"`
4. ลบ Branch main ออกจาก Local Repository <br>
`git branch -D main`
5. เปลี่ยนชื่อ Branch ปัจจุบัน (ที่สร้างจาก --orphan) <br>
`git branch -m main`
6. Push ไปยัง Github (-f บังคับทับ Branch อื่ร)<br>
`git push -f origin main`

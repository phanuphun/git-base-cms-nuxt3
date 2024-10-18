---
title: คำสั่งเผยแพร่ Package ขึ้น NPM
date: '2024/10/17'
tool: NPM
img: ''
path: npmPublishPackage
draft: false
---

- **สำหรับทดสอบ** <br>
`npm link` : ทำให้ Package ที่กำลังพัฒนาอยู่เชื่อมไปยัง NPM ที่อยู่บน Global ในเครื่องของเรา <br>
`npm link <your-package>` : ชี้ไปยัง Package ของเราโดยไม่ต้องติดตั้ง <br>

- **เผยแพร่** <br>
`npm login` : เข้าสู่ระบบ NPM <br>
`npm publish` : เผยแพร่ Package ของเราขึ้นไปยัง NPM Registry <br>

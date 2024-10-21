---
title: คำสั่ง Docker CLI สำหรับ Container
date: 2024/10/21
tool: Docker
img: ""
path: dockerImageCli
draft: false
---

**Container** <br>
-  `docker ps` : ดูรายการ Container ที่กำลัง Run อยู่<br>
   **-a** : ดูรายการ Container ทั้งหมด
-  `docker rm <name>` : ลบ Container
-  `docker start <name>` : เริ่ม Container
-  `docker stop <name>` : ลบ Container
-  `docker exec <name>` : สำหรับ Run Command ใน Container ที่กำลังรันอยู่ <br>
   **-it** : ทำให้เราสามารถเข้าไปใน Container และใช้งานได้เหมือนอยู่ใน Terminal <br>
   **ตัวอย่างการใช้งาน** : `docker exec -it <name> bash`

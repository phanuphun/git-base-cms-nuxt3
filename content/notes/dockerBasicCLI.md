---
title: คำสั่งพื้นฐาน Docker CLI
date: 2024/10/19
tool: Docker
img: ""
path: DockerBasicCLI
draft: false
---

**Image** <br>
-  `docker pull <image>:<tag>` : ดาวน์โหลด Image มาจาก Docker Registry
-  `docker rmi <image>` : ลบ Image
-  `docker images` : เรียกดู Images ทั้งหมดของเรา
-  `docker run <image>` : สร้าง Container และ Run Container <br>
   **--name** : ตั้งชื่อ Container <br>
   **-p** : Map Port ภายนอกเข้าไปที่ Port ของ Container (-p 8080:80) <br>
   **-d** : Detached Mode ทำให้ขณะ Run Container อยู่สามารถพิมพ์คำสั่งใน Terminal ได้เลย โดยไม่ต้องรอให้ Container ทำงานเสร็จก่อน <br>
   **ตัวอย่างการใช้งาน** : `docker run --name new_name -p 80:80 -d <image>:<tag>`<br>
-  `docker build -t <image_name>:<tag> <path> ` : ใช้สำหรับ Build Image จาก Dockerfile <br>
   **-t** : กำหนด tag เข้าไปด้วยถ้าไม่ใช่ตัว Docker จะกำหนดเป็น Latest อัตโนมัติ <br>
   **path** : กำหนด path ทีอยู่ของ Dockerfile ที่เราจะทำการ Build
   **ตัวอย่างการใช้งาน** : `docker build -t myweb:2.0.0 .`<br>

**Container** <br>
-  `docker ps` : ดูรายการ Container ที่กำลัง Run อยู่<br>
   **-a** : ดูรายการ Container ทั้งหมด
-  `docker rm <name>` : ลบ Container
-  `docker start <name>` : เริ่ม Container
-  `docker stop <name>` : ลบ Container
-  `docker exec <name>` : สำหรับ Run Command ใน Container ที่กำลังรันอยู่ <br>
   **-it** : ทำให้เราสามารถเข้าไปใน Container และใช้งานได้เหมือนอยู่ใน Terminal <br>
   **ตัวอย่างการใช้งาน** : `docker exec -it <name> bash`



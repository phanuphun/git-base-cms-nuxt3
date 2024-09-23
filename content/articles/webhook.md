---
title: webhook
date: '2024-09-16'
description: ''
tag: Note
tags:
   - Webhook
   - Basic Concept
   - Github
thumbnail: ''
path: 'webhook'
draft: false
---

### Webhook

### ทดลองใช้ webhook
ตัวอย่างการใช้งาน webhook ในบทความนี้จะใช้ webhook ของ Github ในการตรวจจับ Event ต่างๆที่เกิดขึ้นใน repository ของเรา เช่น การpush หรือการ pull
1. สร้าง server ของเราขึ้นมาแล้วเขียน api ขึ้นมาหนึ่งเส้นชื่อว่า `/github-listener` เพื่อกำหนดจุด End point ของ webhook ดังนี้
```js
app.post('/github-listener',(req,res)=>{
    const githubEvent = req.header('X-GitHub-Event');
    const payload = req.body;

    console.log(`Received GitHub Event: ${githubEvent}`);
    console.log(payload)
    res.status(200).send('Received!');
})
```
2. ลง ngrok เพื่อใช้สำหรับการทำสอบ เนื่องจาก webhook ต้องใช้ public url ในการทำ
- `npm i ngrok -g` เพื่อทำการติดตั้ง ngrok แบบ global
- `ngrok http 3000` เพื่อเปิดใช้งานเว็บเซิฟเวอร์ของเราให้เป็น public ชั่วคราว จากนั้นเราจะได้ public url มาดังรูป
::ImageBox{src="/img/how-webhook-work/01.png"}

3. ไปที่ github repository บนเว็บของเรา เลือก `setting` -> `Webhooks` -> `Add webhook` จากนั้นกรอก Payload Url พร้อมกัย /api ของเรา ในที่นี้ก็คือ `/github-listener`
- SSL verification : ปิดเอาไว้เนื่องจาก public url ของเราไม่ใช่ https
- ส่วน event ที่เราต้องการจะให้มัน trigger ส่งข้อมูลมาที่เรา ให้เลือกทุกอย่างเพื่อง่ายต่อการทดสอบ
::ImageBox{src="/img/how-webhook-work/02.png"}




4. เมื่อเตรียมทุกอย่างเสร็จแล้วก็เริ่มทดสอบด้วยการ push บางอย่างขึ้นไปบน repository ของเรา จะเห็นว่าทาง Github Server ได้ส่งข้อมูลมาให้กับเรามี Event ชื่อว่า `push` พร้อมกับรายละเอียดต่างๆที่ผมนำมาเก็บเอาไว้ที่ตัวแปร Payload ในกรณีที่เราเปลี่ยนชื่อ repo ของเราตัว webhook ก็จะทำงานเช่นกันเนื่องจากเราเลือก Event ทั้งหมด
::ImageBox{src="/img/how-webhook-work/03.png"}

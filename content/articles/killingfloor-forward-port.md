---
title: Killing Floor วิธีการสร้างห้องเล่นกับเพื่อน
date: '2017-11-09'
description: Killing floor วิธีสร้างห้องเล่นกับเพื่อนจะใช้วิธีการ Forward Port เอานะครับ มีหลายคนไม่รู้วิธีในการสร้างห้องเล่นกับเพื่อน เนื่องจากได้เกมมาฟรีเเล้วอยากเล่นกับเพื่อนโดยที่ไม่ต้องเข้าเซิฟเวอร์ต่างชาติที่ปิงสูงก็เลยไปหาวิธีมาได้ตามคู่มือต่อไปนี้เลยครับบ
tags: ['Killing Floor' , 'Forword Port' , 'Game' ]
thumbnail: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1250/header.jpg?t=1697726402' 
slug: "killingfloor-forward-port"
draft: false 
---

### การ Forward port
เราต้องเข้าไปที่ router โดยใช้ ip 192.168.1.1 เมื่อเข้าไปเขาจะให้เราใส่รหัส ของผมใช้เน็ตของ 3bb
รหัสผมก็จะเป็น User: admin Password: 3bb หรือคนอื่นอาจจะเป็น User: admin Password: admin ,
User: admin Password: password , User: admin Password: 1234 ก็เเล้วแต่เน็ตของเเต่ละคนว่าใช้ของอะไร ดูรหัสอื่นๆได้ตามลิงค์เลยครับ http://www.peoplefu.co.th/webboard/index.php?topic=114.0

![01](https://steamuserimages-a.akamaihd.net/ugc/852731601637261977/02E005EB62ADF3455B9D170B457785878645BB34/)
เมื่อเข้าหน้าเว็บได้เเล้วให้หาที่ forward port เอานะครับเพราะของเเต่ละคนจะไม่เหมือนกันตามรุ่น router
ซึ่งรุ่น router ผมเป็น huawei hg521c ซึ่งของผมมันเป็นรุ่นเก่าหลายปีเเล้ว จะมีหน้าตาตามภาพเลยครับ interface รุ่นนี้ก็จะงงๆหน่อยไม่เหมือนรุ่นปัจจุบัน

![02](https://steamuserimages-a.akamaihd.net/ugc/852731601637264058/E4958A6A1C5DB3F3CA58E17B2CA15342E61349C2/)
1. คลิกที่ Basic เพื่อเปิดเมนูที่ซ่อนอยู่
2. คลิกที่ Nat ก็จะได้ตามภาพด้านล่า

![03](https://steamuserimages-a.akamaihd.net/ugc/852731601637265729/519F9B052BB76DEF823DC1F6BCB3B7C4A6D891AC/)
3. คลิกที่ Virtual server จะได้ตามภาพด้านล่าง

![04](https://steamuserimages-a.akamaihd.net/ugc/852731601637267923/A6A3F3BACB63F0261B209013F6A8AAAE2E7A8B73/)
1. เลือกเเถวที่เราจะเพิ่มเข้าไป
2. ใส่ชื่อจะใส่หรือไม่ก็ได้ส่วงช่องที่อยู่ติดกันให้ว่างไว้
3. เลือกชนิดของ protocol จะมี UDP กับ TCP
4. ช่องใส่ port ให้ใส่ทั้ง 4 ช่องให้ใส่เหมือนกันทั้ง 4 ช่อง (อันนี้ไม่เเน่ใจเหมือนกันว่าต้อง 4 ช่องหรือป่าว)
บางคนอาจมี 2 ช่อง
5. ใส่ ip Address เครื่องเข้าไป

วิธีดู ip
กด Windows + R พิมพ์ cmd แล้วกด ok จะได้หน้าต่างดำๆเเล้วพิมคำสั่ง ipconfig ไป
ip ที่เราต้องใช้จะอยู่ที่ IPv4 address ในสี่เหลี่ยมสีแดง
![05](https://steamuserimages-a.akamaihd.net/ugc/852731601637269312/B93A0A662AA52A0A404FFE581D90D1C8C95E994F/)
การจะสร้างห้องเล่นกับเพื่อนเราต้อง Forward port ทั้งหมด 6 port โดย 6 port นี้เวลาจะ Hostgame จะมีบอกด้วยว่าต้อง forward port 6 port นี้

![06](https://steamuserimages-a.akamaihd.net/ugc/852731601637270387/12006C0AEC511E054987569A8117CC7F46F5DB43/)
-7707 UDP/IP (Game Port)
-7708 UDP/IP (Query Port)
-7717 UDP/IP (GameSpy Query Port)
-28852 TCP/IP and UDP (Allows your Server to Connect to the Master Server Browser)
-8075 TCP/IP (Port set via ListenPort that your WebAdmin will run on)
-20560 UDP/IP (Steam Port)

![07](https://steamuserimages-a.akamaihd.net/ugc/852731601637272333/2945CC9C17F7C7014E78858CEE724135A6B86213/)
1. ใส่ ip เครื่องที่เราได้มา
2. เลือกชนิด protocol ให้เลือกตามที่ให้ไปนะหรือดูในภาพที่ผมใส่ก็ได้บางอันให้เลือกทั้ง2ประเภทเลยก็
ให้เลือก all หรือเลือก Both
3. ใส่ port ให้ครบ 6 port (บางคน2 บางคนมี 4 อย่างเช่นผมเลยไม่เเน่ใจว่าใส่ทั้งหมดไหมเเต่ก็น่าจะใส่ทั้งหมดนะ :3 แนะนำให้หาวิธี forward port ของ router ของเเต่ละคนเองครับ )เมื่อเสร็จเเล้วให้กด Submit จากนั้น
ให้รี router ครับเมื่อเสร็จให้เราลองสร้างห้องดูเเล้วให้เพื่อนกดตามมา

ก่อน forward port ให้ปิด Firewall ก่อน
-ไปที่ advanced
-เลือกFirewall
-แล้วให้เลือก Disable ทั้ง 2 ละกด submit
(ไม่เเน่ใจว่าต้องปิดตลอดหรือป่าวเพราะผมไปดูวิธี forward port ของ routerผมเขาจะปิดก่อน )
![08](https://steamuserimages-a.akamaihd.net/ugc/852731601637275717/2B33B355DF0A6894B076D25E599F0C5190ECB7C5/)

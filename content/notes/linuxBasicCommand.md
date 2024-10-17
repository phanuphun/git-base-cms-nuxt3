---
title: คำสั่งพื้นฐาน Linux
date: '2024/09/12'
tool: Linux
img: ''
path: linuxBasicCommand
draft: false
---

- `sudo apt update` :  อัปเดตข้อมูล Package ในระบบ
- `sudo apt list --upgradable` : แสดงรายการ Package ที่สามารถอัพเดตได้
- `sudo shutdown -h now` : ปิดเครื่อง (-h หยุดและปิดอย่างปลอดภัย)
- `sudo reboot now` : รีบูตระบบ
- `ip a` หรือ `ip a s dev enp1s0` : ตรวจสอบ interface สำหรับ network
- `sudo ip link set enp1s0 down` และ `sudo ip link set enp1s0 up` : รีสตาร์ท network
- `ls` : แสดงรายการไฟล์และโฟลเดอร์ (Option `i` แสดงรายละเอียดของไฟล์ , `a` แสดงทั้งหมดรวมถึงที่ซ่อนอยู่)
- `ps -a | grep service_name` : ตรวจสอบสถานะ servie ที่ทำงานอยู่
- `serivce --status-all` : ตรวจสอบสถานะ service แสเงผลทั้งหมดโชว์สถานะเป็นเครื่องหมายบวกลบ
- `sudo service service_name status` : ตรวจสอบสถานะเฉพาะ service
- `sudo ufw status` หรือ `sudo ufw status verbose` : ตรวจสอบ Firewall
- `sudo allow port 22` : เปิด Port ของ Service
- `sudo adduser username` : เพิ่ม User เข้าไปในระบบ
- `sudo cat /etc/passwd` : ตรวจสอบข้อมูลของ User
- `sudo cat /etc/group` : ตรวจสอบข้อมูล Group และ User ที่อยู่ใน Group
- `sudo cat /etc/shadow` : ตรวจสอบข้อมูล Password ของ User ที่อยู่ในรูปแบบ Hash
- `chmod 744 filename` , `chmod 700 filename` : เปลี่ยน Permission ของ File

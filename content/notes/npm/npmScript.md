---
title: กำหนดลำดับการทำงานของ Scripts ด้วย Life Cycle Scripts
date: '2024/10/21'
tool: NPM
img: ''
path: npmScript
draft: false
---
ใน Package.json ในส่วนของ Scripts Section เราสามารถกำหนด `pre` และ `post` ในการลำดับการงานของ script event ได้โดยนำคำทั้งสองเติมใส่หน้า pre หรือ post ด้านหน้า event หลัก เช่น

|Script|Description|
|:---:|:---:|
|`install`|เป็น event หลักในการทำงานเพื่อติดตั้ง Package|
|`preinstall`| กำหนด script ในการทำงานก่อนที่ event install จะทำงาน|
|`postinstall`|กำหนด script ให้ทำงานหลังที่ event install ทำงานเสร็จแล้ว|



Tutorial React

สิ่งที่ควรมีก่อนการเขียน  React 
1.  Nodejs  สามารถติดตั้งได้ที่ ลิ้ง https://nodejs.org/en/download/
2.  โปรแกรมเขียนโค้ด ในที่นี้ แนะนำ VSCODE สามารถติดตั้งได้ที่ ลิ้ง https://code.visualstudio.com/Download

 VS CODE เพิ่มเติ่ม Extensions

1. ES7 React/Redux/GraphQL/React-Native snippets
2. HTML Snippets
3. Simple React Snippets

Create React App   https://github.com/facebook/create-react-app 

คำสั่งติดตั้ง
	npx create-react-app my-app
	cd my-app 
	npm start

โครงสร้างไฟล์
- node_modules คือ ไฟล์ที่ใช้ในการจัดการ Libary ( npm ) ต่างๆ ที่เราติดตั้ง 
- public  คือ ไฟล์ที่ใช้ในการ จัดเก็บโครงสร้าง ธีม 
    - Index.html  คือ ส่วนที่ ใช้ในการ กำหนดโครงสร้าง ของหน้าเว็บ
    - Manifest.json  คือ ส่วนที่ ใช้ในการ กำหนดของส่วน หน้า โทรศัพท์ เช่น ชื่อแอพ รายละเอียด ขนาดไอคอน อื่นๆ
- Src คือ ส่วนที่ใช้ในการ เขียนโค้ด component และ container ต่างๆ
- Package.json คือไฟล์ที่ใช้ในการ เก็บข้อมูลพื้นฐาน ของโปรเจ็กต์ เช่น เวอร์ชั่น react และ Libary ที่ติดตั้งมีอะไร บ้าง เวอร์ชั่นอะไร 

วิธีการ สร้าง ธีม  React
- ธีม แนะนำ https://bootswatch.com/ เวอร์ชั่น  4.3.1
- สร้างโฟลเดอร์  ชื่อ ธีม เช่น materia และสร้าง โฟลเดอร์​ css  js ใน public
  -  เลือก ธีม แล้ว กด view page ก็อป ไฟล์ มาใส่ ใน โฟล์เดอร์  ที่เตรียมไว้
  -  ทดสอบ การทำงาน ของ ธีม
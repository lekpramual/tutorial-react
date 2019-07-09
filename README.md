
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
	- 	npx create-react-app my-app
    - 	cd my-app 
    - 	npm start

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

เริ่มเขียนโค้ด react เตรียมโครงสร้างไฟล์ 
- สร้างไฟล์ ในโฟล์เดอร์ src  
    - component ใช้เก็บ component ต่างๆ
    - container ใช้เก็บ หน้าต่างๆ ที่เรียกใช้มาจาก container

ติดตั้ง Library ตัวแรก กัน
คือ react-router-dom  ใช้ในการ สร้าง ลิ้งต่างๆ ใน React
ลิ้งติดตั้ง https://www.npmjs.com/package/react-router-dom
    - คำสั่งในการติดตั้ง  
	npm install --save react-router-dom

Src/App.js

import {BrowserRouter as Router,Route,Link} from 'react-router-dom';


<Router>
        <div>
          <ul>
            	<li><Link exact to="/">Home</Link></li>
            	<li><Link exact to="/about">About</Link></li>
            	<li><Link exact to="/topics">Topics</Link></li>
            	<li><Link exact to="/news">Topics1</Link></li>
          </ul>
          <hr />
               <Route exact path="/" component={Home} />
               <Route exact path="/about" component={About} />
               <Route exact path="/topics" component={Topics} />
               <Route exact path="/news" component={Topics} />
               <Route component={Not} />
        </div>
</Router>

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)


สร้างไฟล์ Router เพื่อเชื่อมต่อ ลิ้งภายในเว็บ
Src/router.js


import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//Container

export const Routers = () => {
    return (
        <Router>
            <div>
                <ul>
                    <li><Link exact to="/">Home</Link></li>
                    <li><Link exact to="/about">About</Link></li>
                    <li><Link exact to="/topics">Topics</Link></li>
                </ul>
                <hr />
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/topics" component={Topics} />
            </div>
        </Router>
    )
}

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)

const About = () => (
    <div>
        <h2>About</h2>
    </div>
)
const Topics = () => (
    <div>
        <h2>Topics</h2>
    </div>
)


Src/App.js
import React from 'react';
import './App.css';
import { Routers } from './routers';
function App() {
  return (
    <div className="App">
      <Routers />
    </div>
  );
}

export default App; 
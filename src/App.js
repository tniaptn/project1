import React, { useState } from 'react';
import './App.css';
import MyComponent from './room.js';
import './font.css';
import Bill from './bill.js';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="app">
      <div className="tab-bar"></div>
      <div className="menu">
        <div className="left-box">
          <div className="menu-item">
            <div
              className={`tab-item ${activeTab === 1 ? 'active' : ''}`}
              onClick={() => setActiveTab(1)}
            >
              ห้องพัก
            </div>
            <div
              className={`tab-item ${activeTab === 2 ? 'active' : ''}`}
              onClick={() => setActiveTab(2)}
            >
             ค่าน้ำ/ค่าไฟ
            </div>
            <div
              className={`tab-item ${activeTab === 3 ? 'active' : ''}`}
              onClick={() => setActiveTab(3)}
            >
              ออกบิล
            </div>
            <div
              className={`tab-item ${activeTab === 4 ? 'active' : ''}`}
              onClick={() => setActiveTab(4)}
            >
             รายการชำระเงิน
            </div>
            <div
              className={`tab-item ${activeTab === 5 ? 'active' : ''}`}
              onClick={() => setActiveTab(5)}
            >
             รายงาน
            </div>
          </div>
        </div>
        <div className="right-box">
        {activeTab === 1 && (

  
    <MyComponent />

)}

          {activeTab === 3 && (
            <div>
  
              <div className="white-box">ข้อมูลค่าน้ำ/ค่าไฟ</div>
              <Bill />
            </div>
          )}
          {/* เพิ่มเงื่อนไขสำหรับแท็บอื่น ๆ ด้วย */}
        </div>
      </div>
    </div>
  );
}

export default App;

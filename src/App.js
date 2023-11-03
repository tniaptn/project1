import React, { useState } from 'react';
import './App.css';
import MyComponent from './room.js';
import './font.css';
import Bill from './billmain.js';
import Water from './waterpage.js';
import 'font-awesome/css/font-awesome.min.css';
import Room from './roomdetail.js';

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
              ข้อมูลห้องพัก
            </div>

          </div>
        </div>
        <div className="right-box">
          {activeTab === 1 && (


            <MyComponent />

          )}
          {activeTab === 2 && (
            <div>

              <Water />
            </div>
          )}
          {activeTab === 3 && (
            <div>

              <Bill />
            </div>
          )}
{activeTab === 4 && (
            <div>

              <Room />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './room.css'; // import CSS ของ MyComponent
import Table from './table.js';
const MyComponent = () => {
    const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="my-component">
    <div className="menu-tabs">
      <div
        className={`menu-tab ${activeTab === 1 ? 'active' : ''}`}
        onClick={() => setActiveTab(1)}
      >
        ทั้งหมด
      </div>
      <div
        className={`menu-tab ${activeTab === 2 ? 'active' : ''}`}
        onClick={() => setActiveTab(2)}
      >
        ห้องว่าง
      </div>
      <div
        className={`menu-tab ${activeTab === 3 ? 'active' : ''}`}
        onClick={() => setActiveTab(3)}
      >
        ค้างชำรพ
      </div>
    </div>
    {activeTab === 1 && (

  
<Table />

)}
 {activeTab === 2 && (

  
<Table />

)}
 {activeTab === 3 && (

  
<Table />

)}
    </div>
    
  );
};

export default MyComponent;

  
import React, { useState } from 'react';
import myIcon from './img/room_icon_144154.svg'; 
import correct from './img/correct_121331.svg'; 
import billIcon from './img/bill_invoice_icon_179550.svg'; 
import './room.css';
import Table from './table.js';
import EditRoom from './editstatus.js';

const MyComponent = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [editRoom, setEditRoom] = useState(null);

  const roomData = [
    {
      roomName: '101',
      status: 'ข้อมูล 1-2',
      outstandingBalance: 'ข้อมูล 1-3',
      roomCost: '4000',
    },
    {
      roomName: 'ข้อมูล 2-1',
      status: 'ข้อมูล 2-2',
      outstandingBalance: 'ข้อมูล 2-3',
      roomCost: 'ข้อมูล 2-4',
    },
    // เพิ่มข้อมูลห้องเพิ่มเติมตามต้องการ
  ]
  const handleEditClick = (room) => {
    setEditRoom(room);
    setActiveTab(4); // กำหนด activeTab เป็น 4 เมื่อกำลังแก้ไข
  };

  return (
    <div className={`my-component ${activeTab === 4 ? 'edit-mode' : ''}`}>
      {activeTab !== 4 && (
       <div className={`menu-tabs-horizontal`}>
       <div
         className={`menu-tab ${activeTab === 1 ? 'active' : ''}`}
         onClick={() => setActiveTab(1)}
       >
         <span className="tab-content">
           <img src={myIcon} alt="Icon" />
           ทั้งหมด
         </span>
       </div>
       <div
         className={`menu-tab ${activeTab === 2 ? 'active' : ''}`}
         onClick={() => setActiveTab(2)}
       >
         <span className="tab-content">
           <img src={correct} alt="Icon" />
           ห้องว่าง
         </span>
       </div>
       <div
         className={`menu-tab ${activeTab === 3 ? 'active' : ''}`}
         onClick={() => setActiveTab(3)}
       >
         <span className="tab-content">
           <img src={billIcon} alt="Icon" />
           ค้างชำระ
         </span>
       </div>
     </div>
      )}

      {activeTab === 1 && (
        <Table roomData={roomData} onEditClick={handleEditClick} />
      )}
      {activeTab === 2 && (
        <Table roomData={roomData} onEditClick={handleEditClick} />
      )}
      {activeTab === 3 && (
        <Table roomData={roomData} onEditClick={handleEditClick} />
      )}
      {activeTab === 4 && editRoom && (
        <EditRoom room={editRoom} setActiveTab={setActiveTab} closeEdit={() => setActiveTab(1)} />
      )}
    </div>
  );
};

export default MyComponent;

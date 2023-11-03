// MyComponent.js
import React, { useState } from 'react';
import './room.css';
import Table from './tablewater.js';
import Edit from './editwater';


const MyComponent = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [editRoom, setEditRoom] = useState(null);

  const roomData = [
    {
      roomName: '101',
      waterCost: 100, // เพิ่มคอลัมน์ "ค่าน้ำ" และ "ค่าไฟ" เข้าไป
      electricityCost: 50,
    },
    {
      roomName: '102',
      waterCost: 120,
      electricityCost: 60,
    },
    // เพิ่มข้อมูลห้องเพิ่มเติมตามต้องการ
  ];

  const handleEditClick = (room) => {
    setEditRoom(room);
    setActiveTab(4); // กำหนด activeTab เป็น 4 เมื่อกำลังแก้ไข
  };

  return (
    <div className={`my-component ${activeTab === 4 ? 'edit-mode' : ''}`}>

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
        <Edit room={editRoom} setActiveTab={setActiveTab} closeEdit={() => setActiveTab(1)} />
      )}
    </div>
  );
};

export default MyComponent;

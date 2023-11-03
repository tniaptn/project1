import React, { useState } from 'react';

import './room.css';
import Table from './tablebill.js';
import Bill from './bill.js';

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
        <Bill room={editRoom} setActiveTab={setActiveTab} closeEdit={() => setActiveTab(1)} />
      )}
    </div>
  );
};

export default MyComponent;

import React, { useState } from 'react';

import './roomdetail.css';


const MyComponent = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleRoomClick = (roomNumber) => {
    // เมื่อคลิกปุ่มห้อง 101 หรือ 102 ให้ทำงานนี่
    console.log(`คุณคลิกปุ่มห้อง ${roomNumber}`);
  };

  return (
    <div className={`my-component`}>
      <div className="room-buttons">
        <button className="room-button" onClick={() => handleRoomClick(101)}>101</button>
        <button className="room-button" onClick={() => handleRoomClick(102)}>102</button>
        <button className="room-button" onClick={() => handleRoomClick(102)}>103</button>
        <button className="room-button" onClick={() => handleRoomClick(102)}>102</button>
        <button className="room-button" onClick={() => handleRoomClick(102)}>102</button>
        <button className="room-button" onClick={() => handleRoomClick(102)}>102</button>
        <button className="room-button" onClick={() => handleRoomClick(102)}>102</button>
        <button className="room-button" onClick={() => handleRoomClick(102)}>102</button>
        {/* เพิ่มปุ่มห้องอื่น ๆ ตามต้องการ */}
      </div>
    </div>
  );
};

export default MyComponent;

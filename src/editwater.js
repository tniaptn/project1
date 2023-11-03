import React, { useState } from 'react';
import './editstatus.css';

const EditRoom = ({ room, setActiveTab, updateRoomData }) => {
  const [waterCost, setWaterCost] = useState(room.waterCost);
  const [electricityCost, setElectricityCost] = useState(room.electricityCost);

  const handleWaterCostChange = (event) => {
    setWaterCost(event.target.value);
  };

  const handleElectricityCostChange = (event) => {
    setElectricityCost(event.target.value);
  };

  const handleSave = () => {
    const updatedRoom = { ...room, waterCost, electricityCost };
    updateRoomData(updatedRoom); // Update the data
    setActiveTab(1); // Return to tab 1 after saving
  };
  

  return (
    <div className="edit-room">
      {room && (
        <div>
          <h2>ห้อง {room.roomName}</h2>
          <p>ค่าน้ำ(หน่วย)</p>
          <input
            type="text"
            value={waterCost}
            onChange={handleWaterCostChange}
          />
          <p>ค่าไฟ(หน่วย)</p>
          <input
            type="text"
            value={electricityCost}
            onChange={handleElectricityCostChange}
          />
          <div className='btn'>
            <button className='btn-save' onClick={handleSave}>บันทึก</button>
            <button className='btn-cancel' onClick={() => setActiveTab(1)}>ยกเลิก</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditRoom;

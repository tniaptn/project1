import React, { useState } from 'react';
import './editstatus.css';

const EditRoom = ({ room, setActiveTab }) => {
    const [selectedStatus, setSelectedStatus] = useState(room.status);
    const [roomCost, setRoomCost] = useState(room.roomCost);
    const [selectedOutstanding, setSelectedOutstanding] = useState(room.outstandingBalance);

    // รายการสถานะที่กำหนดไว้
    const statusOptions = [
        { value: "ว่าง", icon: "🟢" },
        { value: "ไม่ว่าง", icon: "🔴" }
    ];

    // รายการค้างชำระที่กำหนดไว้
    const outstandingOptions = [
        { value: "ชำระแล้ว", icon: "✅" },
        { value: "ยังไม่ชำระ", icon: "❌" }
    ];

    const handleStatusChange = (event) => {
        setSelectedStatus(event.target.value);
    };

    const handleCostChange = (event) => {
        setRoomCost(event.target.value);
    }

    const handleOutstandingChange = (event) => {
        setSelectedOutstanding(event.target.value);
    }

    const handleSave = () => {
        // ทำการบันทึกการเปลี่ยนแปลงที่ทำไว้
        console.log("บันทึกการเปลี่ยนแปลง: สถานะที่เลือก - ", selectedStatus);
        console.log("ค่าห้อง: ", roomCost);
        console.log("ค้างชำระ: ", selectedOutstanding);

        // เมื่อบันทึกเสร็จสิ้น, กลับไปยังแท็บ 1
        setActiveTab(1);
    };

    return (
        <div className="edit-room">
            {room && (
                <div>
                    <h2>ห้อง  {room.roomName}</h2>
                    <p>สถานะ:</p>
                    <select value={selectedStatus} onChange={handleStatusChange} className="dropdown">
                        {statusOptions.map((status, index) => (
                            <option key={index} value={status.value}>
                                {status.icon} {status.value}
                            </option>
                        ))}
                    </select>
                    <p>ค้างชำระ:</p>
                    <select value={selectedOutstanding} onChange={handleOutstandingChange} className="dropdown">
                        {outstandingOptions.map((outstanding, index) => (
                            <option key={index} value={outstanding.value}>
                                {outstanding.icon} {outstanding.value}
                            </option>
                        ))}
                    </select>
                    <p>ค่าห้อง:</p>
                    <input
                        type="text"
                        value={roomCost}
                        onChange={handleCostChange}
                    /><br></br> 
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

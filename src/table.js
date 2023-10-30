import React from 'react';
import './table.css'; // เชื่อมโยงไฟล์ CSS

const Table = ({ roomData, onEditClick }) => {
  return (
    <table className="custom-table">
      <thead>
        <tr>
          <th>ห้อง</th>
          <th>สถานะ</th>
          <th>ค้างชำระ</th>
          <th>ค่าห้อง</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {roomData.map((room, index) => (
          <tr key={index}>
            <td>{room.roomName}</td>
            <td>{room.status}</td>
            <td>{room.outstandingBalance}</td>
            <td>{room.roomCost}</td>
            <td>
              <button className="btn-edit" onClick={() => onEditClick(room)}>แก้ไข</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

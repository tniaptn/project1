import React from 'react';
import './tablebill.css';

const Table = ({ roomData, onEditClick, onUnitEdit }) => {
  return (
    <table className="custom-table">
      <thead>
        <tr>
          <th>ห้อง</th>
          <th>ค่าน้ำ (หน่วย)</th>
          <th>ค่าไฟ (หน่วย)</th>
          <th>ค้างชำระ</th>
          <th>ค่าห้อง</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {roomData.map((room, index) => (
          <tr key={index}>
            <td>{room.roomName}</td>
            <td>{room.waterCost}</td> {/* Display water cost */}
            <td>{room.electricityCost}</td> {/* Display electricity cost */}
            <td>{room.status}</td> {/* Display status */}
            <td>{room.outstandingBalance}</td> {/* Display outstanding balance */}
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

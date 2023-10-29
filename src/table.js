import React from 'react';
import './table.css';
const MyTable = () => {
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
        <tr>
          <td>ข้อมูล 1-1</td>
          <td>ข้อมูล 1-2</td>
          <td>ข้อมูล 1-3</td>
          <td>ข้อมูล 1-3</td>
          <td>ข้อมูล 1-3</td>
        </tr>
        <tr>
          <td>ข้อมูล 2-1</td>
          <td>ข้อมูล 2-2</td>
          <td>ข้อมูล 2-3</td>
        </tr>
        {/* เพิ่มแถวข้อมูลต่อไปตามความต้องการ */}
      </tbody>
    </table>
  );
};

export default MyTable;

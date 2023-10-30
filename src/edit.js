import React, { useState } from 'react';
import './bill.css'; // import CSS ของ MyComponent

const MyComponent = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleGenerateBill = () => {
        // ตรงนี้คุณสามารถเขียนโค้ดเพื่อสร้างบิลหรือกระทำอื่น ๆ ที่คุณต้องการ
        window.print();
    }

    return (
        <div className="my-component">
            <button onClick={handleGenerateBill}>ออกบิล</button>
            <p>เริ่ม: วันที่เริ่มบิล</p>
            <p>สิ้นสุด: วันที่สิ้นสุดบิล</p>
            <p>ค่าห้อง: ราคาค่าห้อง</p>
            <p>ค่าห้อง: ราคาค่าห้อง</p>
            <p>ค่าห้อง: ราคาค่าห้อง</p>
            <p>ค่าห้อง: ราคาค่าห้อง</p>
        </div>
    );
};

export default MyComponent;

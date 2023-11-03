import React from 'react';
import './bill.css'; // import CSS ของ MyComponent

const MyComponent = () => {
    // const [activeTab, setActiveTab] = useState(1);

    const handleGenerateBill = () => {
        // ตรงนี้คุณสามารถเขียนโค้ดเพื่อสร้างบิลหรือกระทำอื่น ๆ ที่คุณต้องการ
        window.print();
    }

    return (
        <div className="my-component">
            <button onClick={handleGenerateBill}>ออกบิล</button>
            <p>ห้อง : วันที่เริ่มบิล</p>
            <p>ชื่อ : วันที่เริ่มบิล</p>
            <p>เริ่มต้น: วันที่เริ่มบิล</p>
            <p>สิ้นสุด: วันที่สิ้นสุดบิล</p>
            <p>ค่าห้อง: ราคาค่าห้อง</p>
            <p>ค่าน้ำ/หน่วย: ราคาค่าห้อง</p>
            <p>ค่าไฟ/หน่วย: ราคาค่าห้อง</p>
            <p>ยอดรวม: ราคาค่าห้อง</p>
        </div>
    );
};

export default MyComponent;

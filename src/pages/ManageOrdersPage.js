import React from 'react';

export default function ManageOrdersPage() {
  const orders = [
    {
      id: '#12348',
      customer: 'นายบี',
      date: '8 ก.ค. 65',
      product: 'กระต่าย x1',
      status: 'แพ็คแล้ว',
      tracking: '123456222TH'
    },
    {
      id: '#12328',
      customer: 'นางเอ',
      date: '28 ก.ค. 65',
      product: 'อาหาร x1',
      status: 'รอแพ็ค',
      tracking: 'รอพัสดุส่ง'
    },
    {
      id: '#12329',
      customer: 'นางสาวเจน',
      date: '29 ก.ค. 65',
      product: 'ลาบราด x1',
      status: 'แพ็คแล้ว',
      tracking: '123456111TH'
    }
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h1>จัดการคำสั่งซื้อ</h1>
      {orders.map((order, index) => (
        <div key={index} style={{ backgroundColor: '#f8f8f8', margin: '1rem 0', padding: '1rem', borderRadius: '10px' }}>
          <p>
            {order.id} | ชื่อ: {order.customer} | {order.date} | สินค้า: {order.product}<br />
            สถานะ: {order.status} | เลขพัสดุ: {order.tracking}
          </p>
          <select style={{ backgroundColor: '#f1c40f', padding: '0.5rem', borderRadius: '5px' }}>
            <option>เปลี่ยนสถานะ</option>
            <option>รอแพ็ค</option>
            <option>แพ็คแล้ว</option>
            <option>ส่งแล้ว</option>
          </select>
        </div>
      ))}
    </div>
  );
}

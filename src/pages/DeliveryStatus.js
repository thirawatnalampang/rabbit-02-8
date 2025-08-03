import React from 'react';

const deliveryData = [
  {
    orderId: '#12348',
    item: 'กระต่าย x1',
    orderDate: '8 ก.ค. 2025',
    trackingNumber: '123456222TH',
    estimatedDelivery: '22 ก.ค. 2025',
    company: 'Kerry Express',
    phone: '02-xxx-xxxx',
  },
  {
    orderId: '#12328',
    item: 'ลามะ x1',
    orderDate: '29 ก.ค. 2025',
    trackingNumber: '123456111TH',
    estimatedDelivery: '3 ส.ค. 2025',
    company: 'Kerry Express',
    phone: '02-xxx-xxxx',
  },
];

export default function DeliveryStatus() {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="text-center">
        <button className="bg-blue-100 text-black px-6 py-2 rounded-lg mb-4">
          📦 การจัดส่ง
        </button>
        <h2 className="bg-pink-300 text-white inline-block px-6 py-2 rounded-lg font-semibold shadow mb-6">
          สถานะการจัดส่ง
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6 justify-center max-w-4xl mx-auto">
        {deliveryData.map((order, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow text-left">
            <p>คำสั่งซื้อ {order.orderId}</p>
            <p>สินค้า: {order.item}</p>
            <p>วันที่สั่งซื้อ: {order.orderDate}</p>
            <p>
              สถานะ: จัดส่งแล้ว | เลขพัสดุ: {order.trackingNumber}
            </p>
            <p>วันประมาณที่จะได้รับ: {order.estimatedDelivery}</p>
            <p>บริษัทขนส่ง: {order.company}</p>
            <p>เบอร์ติดต่อ: {order.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

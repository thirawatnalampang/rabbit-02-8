import React from 'react';
import { Link } from 'react-router-dom';

export default function ManageRabbits() {
  // ข้อมูลกระต่ายตัวอย่าง
  const rabbits = [
    {
      id: 1,
      name: 'อาร์ม',
      breed: 'Holland Lop',
      gender: 'เพศผู้',
      age: '1.8 ปี',
      weight: '2 กก.',
      price: '120 บาท',
      img: 'https://source.unsplash.com/200x200/?rabbit'
    },
    {
      id: 2,
      name: 'บอย',
      breed: 'Rex',
      gender: 'เพศผู้',
      age: '2 ปี',
      weight: '2.7 กก.',
      price: '150 บาท',
      img: 'https://source.unsplash.com/200x201/?rabbit'
    },
    {
      id: 3,
      name: 'เก๋',
      breed: 'Mini Lop',
      gender: 'เพศผู้',
      age: '2 ปี',
      weight: '2.5 กก.',
      price: '250 บาท',
      img: 'https://source.unsplash.com/200x202/?rabbit',
      reserved: true
    }
  ];

  return (
    <div className="p-8 flex flex-col items-center">
      {/* หัวข้อ */}
      <h1 className="text-2xl font-bold mb-6 px-4 py-2 bg-pink-50 rounded shadow">
        🐇 จัดการกระต่าย
      </h1>

      {/* สรุปจำนวน + ปุ่มเพิ่ม */}
      <div className="flex items-center gap-4 mb-8">
        <span className="bg-pink-100 px-4 py-2 rounded-full">
          🐇 จัดการกระต่าย : {rabbits.length} ตัว
        </span>
        <Link
          to="/add-rabbit"
          className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded shadow"
        >
          + เพิ่มกระต่าย
        </Link>
        <Link
          to="/add-product"
          className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded shadow"
        >
          + เพิ่มสินค้า
        </Link>
      </div>

      {/* รายการกระต่าย */}
      <div className="space-y-6 w-full max-w-4xl">
        {rabbits.map((rabbit) => (
          <div
            key={rabbit.id}
            className="flex items-center gap-4"
          >
            <img
              src={rabbit.img}
              alt={rabbit.name}
              className="w-32 h-32 object-cover rounded-lg shadow"
            />
            <div className="flex-1 bg-gray-100 p-4 rounded-lg">
              <p>
                ชื่อ {rabbit.name} สายพันธุ์: {rabbit.breed} {rabbit.gender} อายุ {rabbit.age} น้ำหนัก {rabbit.weight} ราคา {rabbit.price}
              </p>
            </div>
            <button className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600">
              ลบ
            </button>
            {rabbit.reserved && (
              <span className="bg-green-400 text-white px-4 py-2 rounded shadow">
                จองแล้ว
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

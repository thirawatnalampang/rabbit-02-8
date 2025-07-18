import React from 'react';
import { Link } from 'react-router-dom';

export default function Food() {
  const foods = [
    {
      id: 1,
      name: 'ข้าวพุกกุ้งกระต่าย 1.5 กก.',
      price: 'ราคา 290 บาท',
      img: 'https://i.ibb.co/bLkXjLk/8.jpg',
    },
    {
      id: 2,
      name: 'อาหารกระต่าย – ซัน-ลูกชิ้น 7 กก.',
      price: 'ราคา 690 บาท',
      img: 'https://i.ibb.co/hgVzvYZ/6.jpg',
    },
    {
      id: 3,
      name: 'เม็ดโปรตีนกระต่าย',
      price: 'ราคา 57 บาท',
      img: 'https://your-image-link.jpg',
    },
    {
      id: 4,
      name: 'สมาร์ทฮาร์ท โกลด์',
      price: 'ราคา 229 บาท',
      img: 'https://your-image-link.jpg',
    },
    {
      id: 5,
      name: 'อาหารกระต่าย BOK DOK',
      price: 'ราคา 89 บาท',
      img: 'https://i.ibb.co/ZM9C9BN/3.jpg',
    },
    {
      id: 6,
      name: 'ขนมกระต่ายยี่ห้อ ซันแฟลวเวอร์',
      price: 'ราคา 169 บาท',
      img: 'https://your-image-link.jpg',
    },
    {
      id: 7,
      name: 'ขนม milky',
      price: 'ราคา 230 บาท',
      img: 'https://your-image-link.jpg',
    },
    {
      id: 8,
      name: 'ขนม โบว์ทาโร่เลิศรส',
      price: 'ราคา 250 บาท',
      img: 'https://your-image-link.jpg',
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8 text-center">สินค้าอาหารสัตว์</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        {foods.map((food) => (
          <div
            key={food.id}
            className="border rounded-lg p-4 text-center shadow hover:shadow-md transition"
          >
            <img
              src={food.img}
              alt={food.name}
              className="w-full h-40 object-cover rounded-lg"
            />
            <p className="mt-2 font-semibold">{food.name}</p>
            <p className="text-sm text-gray-600">{food.price}</p>
            <Link
  to={`/pet-food/${food.id}`}
  className="inline-block px-4 py-1 mt-2 bg-green-600 text-white rounded-full hover:bg-green-700 text-sm"
>
  ดูรายละเอียด
</Link>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-4 mb-12">
        <button className="px-3 py-1 border rounded-full bg-black text-white">1</button>
        <button className="px-3 py-1 border rounded-full">2</button>
        <button className="px-3 py-1 border rounded-full">3</button>
        <button className="px-3 py-1 border rounded-full">4</button>
        <button className="px-3 py-1 border rounded-full">5</button>
        <span className="px-3 py-1">&gt;&gt;</span>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center text-sm">
        <div className="grid md:grid-cols-3 gap-4 px-4">
          <div>
            <p>Address</p>
            <p>50/23 หมู่ 4 ถนนบางบอน</p>
            <p>หนองแขม กรุงเทพฯ 10220</p>
          </div>
          <div>
            <p>Contact</p>
            <div className="flex justify-center gap-3 mt-1">
              <span>📧</span>
              <span>📞</span>
              <span>📍</span>
            </div>
          </div>
          <div>
            <p>จัดทำโดย</p>
            <p>วินัยฟาร์ม</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

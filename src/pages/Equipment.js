import React from 'react';
import { Link } from 'react-router-dom';

export default function Equipment() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">อุปกรณ์สัตว์เลี้ยง</h1>

      {/* Section: อุปกรณ์สัตว์เลี้ยง */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          {
            id: 1,
            name: 'กรงกระต่าย',
            price: '1,200 บาท',
            img: 'https://i.ibb.co/0FxrK3y/cage.jpg',
          },
          {
            id: 2,
            name: 'ขวดน้ำสัตว์เลี้ยง',
            price: '150 บาท',
            img: 'https://i.ibb.co/p1NjF0c/water-bottle.jpg',
          },
          {
            id: 3,
            name: 'ของเล่นเคี้ยว',
            price: '90 บาท',
            img: 'https://i.ibb.co/SxwY3h5/chew-toy.jpg',
          },
          {
            id: 4,
            name: 'แปรงหวีขน',
            price: '250 บาท',
            img: 'https://i.ibb.co/jyS2kGt/brush.jpg',
          },
          {
            id: 5,
            name: 'ถาดทรายกระต่าย',
            price: '350 บาท',
            img: 'https://i.ibb.co/1XY1XJx/litter-tray.jpg',
          },
        ].map((item) => (
          <div
            key={item.id}
            className="border rounded-lg p-4 shadow hover:shadow-md transition text-center"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-40 object-cover rounded-lg"
            />
            <p className="mt-2 font-semibold">{item.name}</p>
            <p className="text-sm text-gray-600 mb-2">ราคา {item.price}</p>
            <Link
              to={`/equipment/${item.id}`}
              className="inline-block px-4 py-1 bg-pink-500 text-white rounded-full hover:bg-pink-600 text-sm"
            >
              ดูรายละเอียด
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

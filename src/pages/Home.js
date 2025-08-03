import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const categories = [
    { title: "Rabbit", link: "/pets", img: "/images/rabbit.jpg" },
    { title: "Pet food", link: "/pet-food", img: "/images/food.jpg" },
    { title: "Equipment", link: "/equipment", img: "/images/live.jpg" },
    { title: "Parents", link: "/parents", img: "/images/parents.jpg" },
  ];

  const products = [
    { id: 1, name: 'TAE(ต๊ะ)', price: '100 บาท', img: '/images/IMG_1345.jpg' },
    { id: 2, name: 'ARM(อาร์ม)', price: '120 บาท', img: 'https://i.ibb.co/k1fGQ2k/2.jpg' },
    { id: 3, name: 'อาหารกระต่าย BOK DOK', price: '89 บาท', img: 'https://i.ibb.co/ZM9C9BN/3.jpg' },
    { id: 4, name: 'BOY(บอย)', price: '150 บาท', img: 'https://i.ibb.co/FBFh9F1/4.jpg' },
    { id: 5, name: 'อาหารกระต่าย ซัน-ลูกชิ้น 7 กก.', price: '690 บาท', img: 'https://i.ibb.co/6Xm3ycT/5.png' },
    { id: 6, name: 'กระเป๋าพากระต่าย กลมโปร่งใสสะดวก', price: '560 บาท', img: 'https://i.ibb.co/tsCp0Rj/7.jpg' },
    { id: 7, name: 'ข้าวพุกกุ้งกระต่าย 1.5 กก.', price: '290 บาท', img: 'https://i.ibb.co/bLkXjLk/8.jpg' },
    { id: 8, name: 'WILL(วิล)', price: '170 บาท', img: 'https://i.ibb.co/mR2MMLD/9.jpg' },
  ];

  return (
    <div className="p-8">

      {/* Section: Category */}
      <div className="flex flex-col items-center mb-10">
        <h1 className="text-4xl font-bold mb-8">Category</h1>
        <div className="flex flex-wrap justify-center gap-6">
 {categories.map((cat, idx) => (
  <Link to={cat.link} key={idx} className="text-center">
    <div className="w-[239.37px] h-[372.57px] overflow-hidden rounded-2xl shadow-md hover:scale-105 transition mx-auto">
      <img
        src={cat.img}
        alt={cat.title}
        className="w-full h-full object-cover"
      />
    </div>
    <p className="mt-2 text-lg font-semibold">{cat.title}</p>
  </Link>
))}
        </div>
      </div>

      {/* Section: แนะนำการเลี้ยง */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-12">
        <div>
          <h2 className="text-xl font-bold mb-4">
            แนะนำวิธีเลี้ยงกระต่ายสำหรับคนที่เป็นมือใหม่
          </h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2 leading-relaxed">
            <li>เข้าใจนิสัยกระต่าย กระต่ายเป็นสัตว์รอบไว ต้องการความรัก ความปลอดภัย และไม่ชอบเสียงดัง</li>
            <li>อาหารและโภชนาการ ให้อาหารที่มีคุณค่าทางโภชนาการ เช่น หญ้า แครอท หรืออาหารเม็ด</li>
            <li>ที่อยู่อาศัย ต้องมีพื้นที่กว้างพอ ไม่ร้อนจนเกินไป และต้องสะอาด</li>
            <li>เวลาและความเอาใจใส่ กระต่ายต้องการเวลาและความรักสม่ำเสมอ</li>
          </ol>
        </div>
        <div className="flex justify-center">
          <img
            src="/images/r.jpg"
            alt="Rabbit"
            className="max-w-sm rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Section: Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-20">
        {products.map((item) => (
          <div key={item.id} className="border rounded-lg p-4 shadow hover:shadow-md transition">
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-36 object-cover rounded-lg"
            />
            <p className="mt-2 font-semibold">{item.name}</p>
            {item.price && (
              <p className="text-sm text-gray-600 mb-2">ราคา {item.price}</p>
            )}
            <Link
              to={`/pets/${item.id}`}
              className="inline-block px-4 py-1 bg-pink-500 text-white rounded-full hover:bg-pink-600 text-sm"
            >
              ดูรายละเอียด
            </Link>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center text-sm">
        <div className="grid md:grid-cols-3 gap-4 px-4">
          <div>
            <p className="font-semibold">Address</p>
            <p>50/23 หมู่ 4 ถนนบางบอน</p>
            <p>หนองแขม กรุงเทพฯ 10220</p>
          </div>
          <div>
            <p className="font-semibold">Contact</p>
            <div className="flex justify-center gap-3 mt-1">
              <span>📧</span>
              <span>📞</span>
              <span>📍</span>
            </div>
          </div>
          <div>
            <p className="font-semibold">จัดทำโดย</p>
            <p>วินัยฟาร์ม</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

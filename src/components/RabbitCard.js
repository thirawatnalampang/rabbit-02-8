// src/components/RabbitCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function RabbitCard({ rabbit }) {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate('/booking', { state: { rabbit } });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 text-center">
      <img
        src={rabbit.image}
        alt={rabbit.name}
        className="w-full h-52 object-cover rounded-md mb-4"
      />
      <div className="text-sm text-gray-700 leading-relaxed">
        <strong>
          {rabbit.name} ({rabbit.nickname}) {rabbit.gender === 'male' ? '🐰' : '♀️'}
        </strong>
        <br />
        สายพันธุ์: {rabbit.breed}
        <br />
        อายุ {rabbit.age} ปี น้ำหนัก {rabbit.weight} กก
        <br />
        ให้เช่าได้ตั้งแต่วันที่ {rabbit.availableDate}
        <br />
        ราคาต่อรอบ: เช่า {rabbit.price} บาท / 3 วัน
      </div>
      <button
        onClick={handleBooking}
        className="mt-3 bg-rose-400 hover:bg-rose-500 text-white px-4 py-2 rounded-md font-semibold shadow"
      >
        🐇 จองกระต่ายตัวนี้เลย!
      </button>
    </div>
  );
}

import React from 'react';
import RabbitCard from '../components/RabbitCard';

const rabbitData = [
  {
    name: 'ARM',
    nickname: 'อาม',
    breed: 'Netherland Dwarf',
    age: 1.8,
    weight: 2.7,
    availableDate: '8/9/2568',
    price: 350,
    gender: 'male',
    image: '/images/rabbit.jpg'
  },
  {
    name: 'BOY',
    nickname: 'บอย',
    breed: 'Rex',
    age: 2,
    weight: 2.7,
    availableDate: '12/9/2568',
    price: 400,
    gender: 'female',
    image: '/images/rabbit2.jpg'
  },
  {
    name: 'TAE',
    nickname: 'เต้',
    breed: 'Holland Lop',
    age: 2,
    weight: 2,
    availableDate: '2/9/2568',
    price: 300,
    gender: 'male',
    image: '/images/rabbit3.jpg'
  },
  {
    name: 'JAZZ',
    nickname: 'แจ๊ส',
    breed: 'Thai',
    age: 2,
    weight: 2.5,
    availableDate: '1/9/2568',
    price: 500,
    gender: 'female',
    image: '/images/rabbit4.jpg'
  }
];

export default function ParentsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🐰 ข้อมูลพ่อแม่พันธุ์</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {rabbitData.map((rabbit, index) => (
          <RabbitCard key={index} rabbit={rabbit} />
        ))}
      </div>
    </div>
  );
}

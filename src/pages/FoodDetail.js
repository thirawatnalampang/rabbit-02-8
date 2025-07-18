import React, { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const foods = [
  {
    id: '1',
    name: 'อาหารกระต่าย BOK DOK',
    description: 'อาหารเม็ดคุณภาพสูง เหมาะสำหรับกระต่ายทุกวัย',
    price: 89,
    img: 'https://i.ibb.co/ZM9C9BN/3.jpg',
  },
  {
    id: '2',
    name: 'อาหารกระต่าย – ซัน-ลูกชิ้น',
    description: 'อาหารกระต่ายแบบลูกชิ้น นุ่ม เคี้ยวง่าย',
    price: 690,
    img: 'https://i.ibb.co/hgVzvYZ/6.jpg',
  },
  // เพิ่มได้ตามต้องการ
]

export default function FoodDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  const food = foods.find(f => f.id === id)

  const handleAddToCart = () => {
    if (!food) return

    // ✅ เพิ่มสินค้าลง Cart จริง ๆ ตรงนี้
    addToCart({ ...food, quantity })

    // ✅ แสดงข้อความยืนยัน
    alert(`เพิ่ม ${food.name} จำนวน ${quantity} ชิ้น ไปยังตะกร้าแล้ว!`)
  }

  if (!food) {
    return (
      <div className="max-w-xl mx-auto p-6 text-center mt-10">
        <p className="text-red-600 font-semibold text-xl">ไม่พบข้อมูลสินค้าอาหารนี้</p>
        <button
          onClick={() => navigate('/pet-food')}
          className="mt-4 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          กลับไปหน้ารายการอาหาร
        </button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
      {/* รูปภาพ */}
      <div className="flex-1 flex justify-center">
        <img src={food.img} alt={food.name} className="rounded-lg w-full max-w-md" />
      </div>

      {/* รายละเอียด */}
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-2">{food.name}</h1>
        <p className="text-xl font-bold mb-4">
          ราคา <span className="text-green-600">{food.price} บาท</span>
        </p>

        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <h2 className="font-semibold mb-2">รายละเอียดสินค้า</h2>
          <p className="text-gray-700 leading-relaxed">{food.description}</p>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={() => setQuantity(q => Math.max(1, q - 1))}
            className="px-3 py-1 border rounded"
          >
            −
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => setQuantity(q => q + 1)}
            className="px-3 py-1 border rounded"
          >
            +
          </button>
        </div>

        <button
          onClick={handleAddToCart}
          className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          เพิ่มใส่ตะกร้า
        </button>

        <div className="mt-6">
          <Link
            to="/pet-food"
            className="inline-block px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
          >
            ← กลับไปหน้ารายการอาหาร
          </Link>
        </div>
      </div>
    </div>
  )
}

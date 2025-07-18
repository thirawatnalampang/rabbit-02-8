import React, { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const equipments = [
  {
    id: '1',
    name: 'กรงกระต่าย',
    description: 'กรงกระต่ายขนาดกว้าง แข็งแรง วัสดุคุณภาพสูง เหมาะสำหรับสัตว์เลี้ยงขนาดเล็ก',
    price: 1200,
    img: 'https://i.ibb.co/0FxrK3y/cage.jpg',
  },
  {
    id: '2',
    name: 'ขวดน้ำสัตว์เลี้ยง',
    description: 'ขวดน้ำสำหรับสัตว์เลี้ยง ติดกรงได้ ไม่รั่วซึม ใช้งานง่าย',
    price: 150,
    img: 'https://i.ibb.co/p1NjF0c/water-bottle.jpg',
  },
  {
    id: '3',
    name: 'ของเล่นเคี้ยว',
    description: 'ของเล่นเคี้ยวสำหรับสัตว์เลี้ยง ช่วยให้สัตว์เลี้ยงไม่กัดสิ่งของในบ้าน',
    price: 90,
    img: 'https://i.ibb.co/SxwY3h5/chew-toy.jpg',
  },
  {
    id: '4',
    name: 'แปรงหวีขน',
    description: 'แปรงหวีขนสัตว์เลี้ยง ขนไม่ร่วงง่าย หวีแล้วขนนุ่มเงางาม',
    price: 250,
    img: 'https://i.ibb.co/jyS2kGt/brush.jpg',
  },
  {
    id: '5',
    name: 'ถาดทรายกระต่าย',
    description: 'ถาดทรายสำหรับกระต่าย ทำความสะอาดง่าย ใช้งานสะดวก',
    price: 350,
    img: 'https://i.ibb.co/1XY1XJx/litter-tray.jpg',
  },
]

export default function EquipmentDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  const item = equipments.find(eq => eq.id === id)

  const handleAddToCart = () => {
    if (!item) return

    addToCart({ ...item, quantity })
    alert(`เพิ่ม ${item.name} จำนวน ${quantity} ชิ้น ไปยังตะกร้าแล้ว!`)
  }

  if (!item) {
    return (
      <div className="max-w-xl mx-auto p-6 text-center mt-10">
        <p className="text-red-600 font-semibold text-xl">ไม่พบข้อมูลอุปกรณ์นี้</p>
        <button
          onClick={() => navigate('/equipment')}
          className="mt-4 px-6 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition"
        >
          กลับไปหน้ารายการอุปกรณ์
        </button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
      {/* รูปภาพ */}
      <div className="flex-1 flex justify-center">
        <img src={item.img} alt={item.name} className="rounded-lg w-full max-w-md" />
      </div>

      {/* รายละเอียด */}
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-2">{item.name}</h1>
        <p className="text-xl font-bold mb-4">
          ราคา <span className="text-pink-600">{item.price} บาท</span>
        </p>

        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <h2 className="font-semibold mb-2">รายละเอียดสินค้า</h2>
          <p className="text-gray-700 leading-relaxed">{item.description}</p>
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
          className="px-6 py-3 bg-pink-500 text-white rounded hover:bg-pink-600 transition"
        >
          เพิ่มใส่ตะกร้า
        </button>

        <div className="mt-6">
          <Link
            to="/equipment"
            className="inline-block px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
          >
            ← กลับไปหน้ารายการอุปกรณ์
          </Link>
        </div>
      </div>
    </div>
  )
}

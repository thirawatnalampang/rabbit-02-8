import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from '../context/CartContext'

const pets = [
  { id: 1, name: 'Will (วิว)', age: '1 เดือนครึ่ง', price: 170, image: 'https://placekitten.com/400/400' },
  { id: 2, name: 'กระต่ายหูยาว', age: '2 เดือน', price: 2500, image: 'https://placekitten.com/401/400' },
  { id: 3, name: 'กระต่ายขนฟู', age: '3 เดือน', price: 2200, image: 'https://placekitten.com/402/400' },
]

export default function PetDetail() {
  const { id } = useParams()
  const petId = parseInt(id)
  const pet = pets.find(p => p.id === petId)
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    addToCart({ ...pet, quantity })
  }

  if (!pet) {
    return (
      <div className="max-w-xl mx-auto p-6 text-center mt-10">
        <p className="text-red-600 font-semibold text-xl">ไม่พบข้อมูลสัตว์เลี้ยงที่คุณค้นหา</p>
        <button
          onClick={() => navigate('/pets')}
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          กลับไปหน้าสัตว์เลี้ยง
        </button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
      {/* รูปภาพ */}
      <div className="flex-1 flex justify-center">
        <img src={pet.image} alt={pet.name} className="rounded-lg w-full max-w-md" />
      </div>

      {/* รายละเอียด */}
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-2">🐰 {pet.name} อายุ {pet.age} <span className="text-pink-500">♀</span></h1>
        <p className="text-xl font-bold mb-4">
          ราคา <span className="text-blue-600">{pet.price} บาท</span>
        </p>

        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <h2 className="font-semibold mb-2">รายละเอียดสินค้า</h2>
          <p className="text-gray-700 leading-relaxed">
            กระต่ายขาวตัวสุดน่ารัก<br/>
            กระต่ายขนสั้น ลายขาว-ดำ ตัดกับลายขอบตาสวยงาม<br/>
            ขนฟูนุ่มน่าสัมผัส ตัวเล็กน่ารัก โอ้ยเยิ้<br/>
            เหมาะกับทั้งเด็กและผู้ใหญ่ที่อยากมีเพื่อนขนปุยไว้คลายเหงา
          </p>
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
          className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

// pages/BookingPage.jsx
import { useLocation } from 'react-router-dom';
import React, { useState } from 'react';

export default function BookingPage() {
  const location = useLocation();
  const rabbit = location.state?.rabbit;

  const [phone, setPhone] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    date: '',
    message: '',
    agree: false,
  });

  if (!rabbit) {
    return <div>ไม่พบข้อมูลกระต่ายที่ต้องการจอง</div>;
  }

  // ฟังก์ชันกรองเบอร์โทร
  const handlePhoneChange = (e) => {
    const onlyNums = e.target.value.replace(/\D/g, ''); // กรองเฉพาะตัวเลข
    if (onlyNums.length <= 10) {
      setPhone(onlyNums);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ตรวจสอบก่อนส่ง (คุณสามารถเพิ่ม validation ได้มากกว่านี้)
    if (!formData.name || !phone || !formData.address || !formData.date || !formData.agree) {
      alert('กรุณากรอกข้อมูลให้ครบถ้วนและยอมรับข้อตกลง');
      return;
    }

    // จำลองการจองเสร็จ
    setSuccessMessage('🎉 จองกระต่ายสำเร็จ! ขอบคุณที่ใช้บริการของเรา 🐇');
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-4">
        🐰 จองกระต่าย: {rabbit.name} ({rabbit.nickname}) ({rabbit.breed})
      </h2>

      <div className="flex gap-6 mb-4">
        <img src={rabbit.image} alt={rabbit.name} className="w-60 h-60 object-cover rounded-lg" />
        <div className="flex-1 space-y-2">
          <p>🔹 สายพันธุ์: {rabbit.breed}</p>
          <p>⚥ เพศ: {rabbit.gender === 'male' ? 'ผู้' : 'เมีย'}</p>
          <p>📅 อายุ: {rabbit.age} ปี</p>
          <p>💰 ราคาเช่า: {rabbit.price} บาท / 3 วัน</p>
        </div>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label>👤 ชื่อผู้จอง:</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border w-full p-2 rounded"
          />
        </div>
        <div>
          <label>📞 เบอร์โทร (10 ตัวเลข):</label>
          <input
            type="text"
            value={phone}
            onChange={handlePhoneChange}
            className="border w-full p-2 rounded"
            inputMode="numeric"
            maxLength={10}
          />
        </div>
        <div>
          <label>📍 ที่อยู่:</label>
          <input
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="border w-full p-2 rounded"
          />
        </div>
        <div>
          <label>📅 วันที่เริ่มเช่า:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="border w-full p-2 rounded"
          />
        </div>
        <div>
          <label>📝 ข้อความเพิ่มเติม:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="border w-full p-2 rounded"
            rows="3"
          />
        </div>
        <div>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
            />
            ยอมรับข้อตกลงการเช่า
          </label>
        </div>
        <button
          type="submit"
          className="bg-green-400 hover:bg-green-500 text-white py-2 px-4 rounded"
        >
          ยืนยันการจอง
        </button>
      </form>

      {successMessage && (
        <div className="mt-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          {successMessage}
        </div>
      )}
    </div>
  );
}

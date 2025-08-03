import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // เพิ่มบรรทัดนี้

export default function AddRabbitForm() {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const navigate = useNavigate(); // เพิ่มตัวแปรนี้

  const handleImageUpload = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRabbit = { name, breed, age, gender, price, image };
    console.log('ข้อมูลกระต่าย:', newRabbit);

    // 📌 TODO: ส่ง newRabbit ไปเก็บใน backend หรือ state หลัก

    // กลับไปหน้าแสดงรายการกระต่ายหลังบันทึก
    navigate('/');
  };

  return (
    <div style={{ textAlign: 'center', padding: '30px' }}>
      <button
        style={{
          backgroundColor: '#fca311',
          color: '#fff',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '8px',
          fontSize: '18px'
        }}
      >
        เพิ่มกระต่าย
      </button>

      <form onSubmit={handleSubmit} style={{ marginTop: '30px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '10px' }}>
            <input type="file" accept="image/*" onChange={handleImageUpload} hidden id="fileUpload" />
            <div
              style={{
                width: '100px',
                height: '100px',
                border: '2px dashed gray',
                margin: 'auto',
                cursor: 'pointer',
                borderRadius: '10px'
              }}
              onClick={() => document.getElementById('fileUpload').click()}
            >
              {image ? (
                <img src={image} alt="Rabbit" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <span>+</span>
              )}
            </div>
          </label>
        </div>

        <div style={{ marginTop: '20px' }}>
          <label>ชื่อกระต่าย: <input value={name} onChange={(e) => setName(e.target.value)} /></label><br />
          <label>พันธุ์กระต่าย: <input value={breed} onChange={(e) => setBreed(e.target.value)} /></label><br />
          <label>อายุ: <input value={age} onChange={(e) => setAge(e.target.value)} /></label><br />
          <label>เพศ:
            <input type="radio" name="gender" value="male" onChange={(e) => setGender(e.target.value)} /> ♂
            <input type="radio" name="gender" value="female" onChange={(e) => setGender(e.target.value)} /> ♀
          </label><br />
          <label>ราคา: <input value={price} onChange={(e) => setPrice(e.target.value)} /></label>
        </div>

        <button
          type="submit"
          style={{
            marginTop: '20px',
            backgroundColor: '#39e75f',
            padding: '10px 20px',
            borderRadius: '10px',
            fontSize: '18px'
          }}
        >
          บันทึกข้อมูล
        </button>
      </form>
    </div>
  );
}

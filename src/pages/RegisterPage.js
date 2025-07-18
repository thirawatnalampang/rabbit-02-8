// src/pages/RegisterPage.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, password, confirmPassword } = form;
    if (!username || !password || !confirmPassword) {
      alert('กรุณากรอกข้อมูลให้ครบ');
      return;
    }

    if (password !== confirmPassword) {
      alert('รหัสผ่านไม่ตรงกัน');
      return;
    }

    alert('สมัครสมาชิกสำเร็จ!');
    navigate('/login');
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded-xl shadow-md bg-white text-center">
      <h1 className="text-2xl font-bold mb-4">สมัครสมาชิก</h1>

      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        <input
          type="text"
          name="username"
          placeholder="ชื่อผู้ใช้"
          value={form.username}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          type="password"
          name="password"
          placeholder="รหัสผ่าน"
          value={form.password}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="ยืนยันรหัสผ่าน"
          value={form.confirmPassword}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600"
        >
          สมัครสมาชิก
        </button>
      </form>

      <p className="mt-4 text-sm">
        มีบัญชีแล้ว? <a href="/login" className="text-blue-500 underline">เข้าสู่ระบบ</a>
      </p>
    </div>
  );
}

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();

    fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
        return data;
      })
      .then((data) => {
        login(data.user);
        navigate('/profile');
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-md rounded-md p-8 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-black text-center">เข้าสู่ระบบ</h2>

        <input
          type="text"
          placeholder="ชื่อผู้ใช้"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border-b border-gray-300 py-2 mb-6 outline-none focus:border-black"
          required
        />

        <input
          type="password"
          placeholder="รหัสผ่าน"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border-b border-gray-300 py-2 mb-6 outline-none focus:border-black"
          required
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-md font-medium hover:bg-gray-800 transition"
        >
          เข้าสู่ระบบ
        </button>

        <p className="text-center text-sm text-gray-500 mt-4">
          ยังไม่มีบัญชี?{' '}
          <Link to="/register" className="text-blue-600 hover:underline">
            สมัครสมาชิก
          </Link>
        </p>
      </form>
    </div>
  );
}

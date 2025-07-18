import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function LoginPage({ setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === '1234') {
      setUser({ username });
      navigate('/profile');
    } else {
      alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-md rounded-md p-8 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-black">LOGIN</h2>

        <input
          type="text"
          placeholder="Email address"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border-b border-gray-300 py-2 mb-6 outline-none focus:border-black"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border-b border-gray-300 py-2 mb-6 outline-none focus:border-black"
          required
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-md font-medium hover:bg-gray-800 transition"
        >
          LOGIN
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

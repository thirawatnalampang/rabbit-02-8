import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

export default function HomePage() {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    // สมมุติว่าล็อกอินผ่าน Gmail สำเร็จ
    alert('ลงชื่อเข้าใช้ด้วย Gmail สำเร็จ!');
    // สามารถใส่ login logic จริงได้ที่นี่ เช่น Firebase, OAuth, ฯลฯ
  };

  const handleSignUp = () => {
    navigate('/login'); // 👉 ไปหน้า login เมื่อกด Sign up
  };

  return (
    <div className="flex h-screen bg-white">
      {/* ซ้าย: รูป */}
      <div className="w-1/2 hidden md:block">
        <img
          src="https://images.unsplash.com/photo-1580450081739-dcdd8451f3ae?auto=format&fit=crop&w=600&q=80"
          alt="Bunny"
          className="object-cover w-full h-full"
        />
      </div>

      {/* ขวา: เนื้อหา */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-8">
        <div className="space-y-4 max-w-sm w-full">
          {/* ปุ่ม Gmail */}
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 border border-gray-400 py-2 rounded-full hover:bg-gray-100 transition"
          >
            <FcGoogle className="text-xl" />
            <span>Sign up with Gmail</span>
          </button>

          {/* ปุ่ม Sign up → ไป login */}
          <button
            onClick={handleSignUp}
            className="w-full bg-black text-white py-2 rounded-full text-lg font-medium hover:bg-gray-800 transition"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

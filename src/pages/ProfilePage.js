import React from 'react';

export default function ProfilePage({ user }) {
  if (!user) {
    return (
      <div className="text-center text-red-600 font-semibold">
        กรุณาเข้าสู่ระบบก่อน
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-black text-white">
      {/* Sidebar */}
      <div className="w-20 md:w-48 bg-black flex flex-col items-center py-6 space-y-10">
        <img
          src={user.profileImage || 'https://via.placeholder.com/100'}
          alt="profile"
          className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover"
        />
        <div className="text-sm md:text-base font-semibold">Profile</div>
        <div className="text-sm md:text-base font-semibold text-gray-400">Settings</div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-white text-black rounded-tl-3xl p-8">
        <h2 className="text-xl font-bold mb-4">EDIT YOUR PROFILE</h2>

        {/* Profile Picture */}
        <div className="flex justify-center mb-6">
          <img
            src={user.profileImage || 'https://via.placeholder.com/100'}
            alt="profile"
            className="w-24 h-24 rounded-full object-cover"
          />
        </div>

        {/* Input Fields */}
        <div className="space-y-4 max-w-md mx-auto">
          <div>
            <label className="block text-sm font-semibold mb-1">Name</label>
            <input
              type="text"
              className="w-full border-b border-black focus:outline-none p-1"
              defaultValue={user.name}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Surname</label>
            <input
              type="text"
              className="w-full border-b border-black focus:outline-none p-1"
              defaultValue={user.surname}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Email Address</label>
            <input
              type="email"
              className="w-full border-b border-black focus:outline-none p-1"
              defaultValue={user.email}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Password</label>
            <input
              type="password"
              className="w-full border-b border-black focus:outline-none p-1"
              defaultValue="******"
            />
          </div>
        </div>

        {/* Logout Button */}
        <div className="mt-8 flex justify-end">
          <button className="bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-800 transition">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

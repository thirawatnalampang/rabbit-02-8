import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Pets from './pages/Pets';
import PetDetail from './pages/PetDetail';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import GetStartedPage from './pages/GetStartedPage';
import NotFound from './pages/NotFound';
import Food from './pages/Food';
import Equipment from './pages/Equipment';
import FoodDetail from './pages/FoodDetail';
import EquipmentDetail from './pages/EquipmentDetail';

import './App.css';

function App() {
  const [user, setUser] = useState(null);
  // eslint-disable-next-line no-unused-vars
const location = useLocation();

  return (
    <>
      {/* ✅ แสดง Navbar ทุกหน้า */}
      <Navbar user={user} />

      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} /> {/* ✅ หน้าแรก */}
          <Route path="/home" element={<Home />} />
          <Route path="/pets" element={<Pets />} />
          <Route path="/pets/:id" element={<PetDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage setUser={setUser} />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage user={user} />} />
          <Route path="/get-started" element={<GetStartedPage />} />
          <Route path="/pet-food" element={<Food />} /> {/* ✅ เพิ่มตรงนี้! */}
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/pet-food/:id" element={<FoodDetail />} />
          <Route path="/equipment/:id" element={<EquipmentDetail />} />
          <Route path="*" element={<NotFound />} /> {/* ✅ ไม่พบเส้นทาง */}
          
        </Routes>
      </div>
    </>
  );
}

export default App;

import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // ตรวจสถานะ login
import { FaHome, FaPaw, FaShoppingCart, FaUserCircle } from 'react-icons/fa'; // ไอคอนที่ใช้

export default function Navbar() {
  const { user } = useAuth(); // user มีค่าเมื่อ login แล้ว

  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center shadow-md">
      {/* โลโก้ */}
      <span className="text-2xl font-extrabold tracking-wide text-white">
        🐾 PetShop
      </span>

      {/* เมนูหลัก */}
      <div className="flex items-center space-x-6 text-lg font-medium">
        <Link
          to="/"
          className="hover:text-teal-300 transition-colors duration-300"
          title="หน้าแรก"
        >
          <FaHome size={26} />
        </Link>
        <Link
          to="/pets"
          className="hover:text-teal-300 transition-colors duration-300"
          title="สัตว์เลี้ยง"
        >
          <FaPaw size={26} />
        </Link>
        <Link
          to="/cart"
          className="hover:text-teal-300 transition-colors duration-300"
          title="ตะกร้าสินค้า"
        >
          <FaShoppingCart size={26} />
        </Link>

        {/* ถ้า login แล้วแสดงรูปโปรไฟล์ */}
        {user ? (
          <Link
            to="/profile"
            className="hover:text-teal-300 transition-colors duration-300"
            title="โปรไฟล์"
          >
            <FaUserCircle size={26} />
          </Link>
        ) : (
          <Link
            to="/login"
            className="hover:text-teal-300 transition-colors duration-300"
            title="เข้าสู่ระบบ"
          >
            เข้าสู่ระบบ
          </Link>
        )}
      </div>
    </nav>
  );
}

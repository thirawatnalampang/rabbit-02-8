import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function CartPage() {
  const { user } = useAuth();
  const { cartItems, removeFromCart } = useCart(); // ✅ เรียก removeFromCart ด้วย
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if (!user) {
      navigate('/get-started', { state: { from: '/checkout' } });
    } else {
      navigate('/checkout');
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 mt-6">
      <h1 className="text-3xl font-bold mb-6">🛒 ตะกร้าของคุณ</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">ไม่มีสินค้าในตะกร้า</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map(item => (
              <div
                key={item.id}
                className="flex items-center border rounded-lg p-4 shadow-md bg-white"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 rounded-md object-cover"
                />
                <div className="ml-4 flex-1">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-500">จำนวน: {item.quantity}</p>
                  <p className="text-pink-600 font-semibold mt-1">
                    {(item.price * item.quantity).toLocaleString()} บาท
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  ลบ
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t pt-4 flex justify-between items-center text-xl font-semibold">
            <span>ราคารวม</span>
            <span className="text-green-600">{totalPrice.toLocaleString()} บาท</span>
          </div>

          <button
            onClick={handleCheckout}
            className="mt-6 block w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            ✅ ไปชำระเงิน
          </button>
        </>
      )}
    </div>
  );
}

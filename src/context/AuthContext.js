import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    console.log('login called with', userData);
    setUser(userData);
  };

  const logout = () => setUser(null);

  // ✅ เพิ่มฟังก์ชัน Login ด้วย Google (mock ไว้ก่อน)
  const loginWithGoogle = async () => {
    // จำลองการล็อกอินแบบ Google
    const googleUser = {
      username: 'google_user',
      email: 'google@example.com',
      provider: 'google',
    };

    setUser(googleUser); // อัปเดต user
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loginWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

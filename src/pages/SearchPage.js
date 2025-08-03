// SearchPage.jsx
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function SearchPage() {
  const query = useQuery();
  const keyword = query.get("query") || "";
  const [filteredProducts, setFilteredProducts] = useState([]);

  const allProducts = [
    { id: 1, name: "อาหารกระต่าย BOK DOK" },
    { id: 2, name: "กรงใส่น้องกระต่าย" },
    { id: 3, name: "WILD กระต่ายน้อย" },
    { id: 4, name: "ARM กระต่ายจิ๋ว" },
  ];

  useEffect(() => {
    const results = allProducts.filter((product) =>
      product.name.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredProducts(results);
  }, [keyword]);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">ผลการค้นหา: "{keyword}"</h1>
      {filteredProducts.length > 0 ? (
        <ul className="space-y-2">
          {filteredProducts.map((item) => (
            <li key={item.id} className="p-4 border rounded bg-white shadow">
              {item.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>ไม่พบสินค้า</p>
      )}
    </div>
  );
}

import React from 'react';

const statisticsData = [
  { category: 'กระต่าย', sold: 20, stock: 50, income: 250 },
  { category: 'อาหารกระต่าย', sold: 7, stock: 50, income: 910 },
  { category: 'อุปกรณ์เลี้ยงกระต่าย', sold: 15, stock: 30, income: 7500 },
  { category: 'เจ้าพ่อพันธุ์/แม่พันธุ์', sold: 5, stock: 2, income: 900 },
];

export default function StatisticsPage() {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="text-center mb-6">
        <button className="bg-green-100 text-black px-6 py-2 rounded-lg mb-4 shadow">
          📊 สถิติ
        </button>
      </div>

      <div className="overflow-x-auto max-w-4xl mx-auto">
        <table className="min-w-full table-auto border-collapse border border-blue-200 bg-blue-50 rounded-md">
          <thead>
            <tr className="bg-blue-100 text-black">
              <th className="border border-blue-200 px-4 py-2">กระต่าย</th>
              <th className="border border-blue-200 px-4 py-2">จำนวนที่ขาย</th>
              <th className="border border-blue-200 px-4 py-2">คงเหลือ</th>
              <th className="border border-blue-200 px-4 py-2">รายได้ (฿)</th>
            </tr>
          </thead>
          <tbody>
            {statisticsData.map((item, index) => (
              <tr key={index} className="text-center">
                <td className="border border-blue-200 px-4 py-2">{item.category}</td>
                <td className="border border-blue-200 px-4 py-2">{item.sold}</td>
                <td className="border border-blue-200 px-4 py-2">{item.stock}</td>
                <td className="border border-blue-200 px-4 py-2">{item.income}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

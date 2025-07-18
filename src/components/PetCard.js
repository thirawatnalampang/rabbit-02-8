import { Link } from 'react-router-dom';

export default function PetCard({ pet }) {
  return (
    <div className="border rounded-xl shadow-md p-4 hover:shadow-xl transition-shadow duration-300 bg-white">
      <img
        src={pet.image}
        alt={pet.name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-800 mb-1">{pet.name}</h3>
      <p className="text-gray-600 mb-2 capitalize">{pet.type}</p>
      <p className="text-green-600 font-bold text-lg mb-4">{pet.price} บาท</p>
      <Link
        to={`/pets/${pet.id}`}
        className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
      >
        ดูรายละเอียด
      </Link>
    </div>
  );
}

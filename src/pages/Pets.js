import { useState } from 'react'
import PetCard from '../components/PetCard'

const pets = [
  { id: 1, name: 'TAE(ตัวผู้)', price: 100, image: 'https://placekitten.com/400/400' },
  { id: 2, name: 'ARM(ตัวผู้)', price: 120, image: 'https://placekitten.com/401/400' },
  { id: 3, name: 'JAZZ(ตัวผู้)', price: 130, image: 'https://placekitten.com/402/400' },
  { id: 4, name: 'BOY(ตัวผู้)', price: 150, image: 'https://placekitten.com/403/400' },
  { id: 5, name: 'WILL(ตัวผู้)', price: 170, image: 'https://placekitten.com/404/400' },
  { id: 6, name: 'PAI(ตัวผู้)', price: 200, image: 'https://placekitten.com/405/400' },
  { id: 7, name: 'GUIDE(ตัวผู้)', price: 240, image: 'https://placekitten.com/406/400' },
  { id: 8, name: 'KENG(ตัวผู้)', price: 250, image: 'https://placekitten.com/407/400' },
  { id: 9, name: 'PUP(ตัวผู้)', price: 260, image: 'https://placekitten.com/408/400' },
  { id: 10, name: 'NONG(ตัวผู้)', price: 300, image: 'https://placekitten.com/409/400' },
  // เพิ่มได้ตามต้องการ
]

export default function Pets() {
  const [currentPage, setCurrentPage] = useState(1)
  const petsPerPage = 8

  const indexOfLastPet = currentPage * petsPerPage
  const indexOfFirstPet = indexOfLastPet - petsPerPage
  const currentPets = pets.slice(indexOfFirstPet, indexOfLastPet)

  const totalPages = Math.ceil(pets.length / petsPerPage)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {currentPets.map(pet => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-3 py-1 rounded-full ${
              currentPage === index + 1 ? 'bg-black text-white' : 'hover:bg-gray-200'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  )
}

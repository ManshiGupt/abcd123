// CardGrid.tsx

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { productApi } from '@/api/pandit-api';


interface CardProps {
  images: string[];
  title: string;
  subtitle: string,
  oldPrice: string,
  newPrice: string,
  productTag: string,
  discountPercent: string;
  _id:string,
}

const CardGrid: React.FC = () => {


  const router = useRouter();

  const handleAddToCart = (_id: string) => {
    router.push(`/Items/${_id}`);
    }

const[data, setData]= useState<CardProps[]>([]);
useEffect(() => {
  const fetchData = async () => {
    try {
        const response = await productApi();
        setData(response.data);
        console.log(response.data);
        
    } catch (error) {
        console.log("This is not fetching");
    }
  }
  fetchData();
  
}, [])


  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((card, index) => (
          <div key={card._id} className="bg-white shadow-md rounded-lg overflow-hidden">
            
            {Array.isArray(card.images) && card.images.length > 0 ? (
              // <Image src={card.images[0]} alt={card.title} width={500} height={500} className="w-full h-64 object-cover" />
              <img src={card.images[0]} alt={card.title} className="w-full h-64 object-cover" />
            ) : (
              <img src="/path/to/default/image.jpg" alt={card.title} className="w-full h-64 object-cover" />
            )}

            {/* <img src={card.imageSrc} alt={card.title} className="w-full h-64 object-cover" /> */}
            {/* <img src={src.imageUrl} alt={`Slide ${index}`} className="w-full h-[250px] rounded-lg" /> */}
            <div className="p-4">
              <h3 className="md:text-xl font-semibold">{card.title}</h3>
              <div className='text-xs'>
              {/* <p className="text-gray-500 line-clamp-1">{card.productTag}</p> */}
              <p className="text-gray-500 line-clamp-1">{card.subtitle}</p>
              </div>
              <div className="mt-4 flex items-center">
                <span className="text-gray-500 line-through">₹{card.oldPrice}</span>
                <span className="text-red-500 ml-2">₹{card.newPrice}</span>
                <span className="ml-2 text-green-500">(20% off)</span>
              </div>
            </div>
            <div className="p-4">
              <button className="w-full bg-blue-500 text-white py-2 rounded" onClick={() => handleAddToCart(card._id)} >View </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
// 

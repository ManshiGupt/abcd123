import React from 'react';
import Image from 'next/image';

interface CardProps {
  imageSrc: string;
  title: string;
  originalPrice: number;
  discountedPrice: number;
  description: string;
}

const CardItem: React.FC<CardProps> = ({ imageSrc, title, originalPrice, discountedPrice, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <Image src={imageSrc} alt={title} width={500} height={500} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-500">{description}</p>
        <div className="mt-4 flex items-center">
          <span className="text-gray-500 line-through">₹{originalPrice}</span>
          <span className="text-red-500 ml-2">₹{discountedPrice}</span>
          <span className="ml-2 text-green-500">(20% off)</span>
        </div>
      </div>
      <div className="p-4">
        <button className="w-full bg-blue-500 text-white py-2 rounded">Add to Bag</button>
      </div>
    </div>
  );
};

export default CardItem;

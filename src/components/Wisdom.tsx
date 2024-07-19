'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { quotesApi } from '@/api/pandit-api';

interface Wisdom {
  imageUrl: string;
  _id: string;
}

const Wisdom: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState<Wisdom[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await quotesApi();
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log('This is not fetching');
      }
    };
    fetchData();
  }, []);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4 md:py-24">
      <div className="flex justify-between items-center mb-4 px-4">
        <div>
          <h2 className="text-2xl font-bold">Wisdom for Life</h2>
          <p className="text-gray-600">Quotes to inspire and guide you</p>
        </div>
        <Link href="/view-all" className="text-blue-500">
          View All &gt;
        </Link>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {data.map((src, index) => (
            <div key={src._id} className="flex-shrink-0 w-full md:w-1/3 lg:w-1/4 p-2">
              <img src={src.imageUrl} alt={`Slide ${index}`} className="w-full h-[250px] rounded-lg" />
            </div>
          ))}
        </div>
        <button onClick={prevImage} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hidden md:block">
          &lt;
        </button>
        <button onClick={nextImage} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full block">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Wisdom;

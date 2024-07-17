'use client';
import React, { useEffect, useState } from 'react';
import { productApi } from '@/api/pandit-api';

interface SamagrihCat {
  imageUrl: string;
  title: string;
  _id: string;
}

const SamagrihCat: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState<SamagrihCat[]>([]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await productApi();
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      {data.length > 0 ? (
        <div className="relative w-full overflow-hidden">
          <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {data.map((src, index) => (
              <div key={src._id} className="flex-shrink-0 w-1/2 md:w-1/3 lg:w-1/4 flex flex-col items-center p-0">
                <img src={src.imageUrl} alt={`Slide ${src.title}`} className="w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full object-cover" />
                <p className="text-center mt-2">{src.title}</p>
              </div>
            ))}
          </div>
          <button onClick={prevImage} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full md:block">
            &lt;
          </button>
          <button onClick={nextImage} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full md:block">
            &gt;
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SamagrihCat;

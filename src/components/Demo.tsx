'use client'
import { poojaApi } from '@/api/pandit-api';
import React, { useEffect, useRef, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface Demo {
  _id: string,
  images: string,
  title: string,
  subtitle: string,
  date: string,
  tithi: string,
}

const Demo: React.FC= () => {
  const [data, setData] = useState<Demo[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await poojaApi();
        setData(response.data);
      } catch (error) {
        console.log("Error fetching data");
      }
    }
    fetchData();
  }, []);

  const cardsToShow = () => {
    if (window.innerWidth >= 1024) return 4;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const nextCard = () => {
    setCurrentIndex((prevIndex) => 
      Math.min(prevIndex + cardsToShow(), data.length - cardsToShow())
    );
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => 
      Math.max(prevIndex - cardsToShow(), 0)
    );
  };

  return (
    <div className="relative container mx-auto p-4">
      <div className="flex space-x-4">
        {data.slice(currentIndex, currentIndex + cardsToShow()).map((card, index) => (
          <div
            key={card._id}
            className="flex-shrink-0 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 relative bg-white rounded-lg shadow-lg"
          >
            <div>
              <img src={card.images} alt={card.title} className="w-full h-60 object-cover" />
            </div>
            <div className="absolute h-35 w-12 top-0 right-4 bg-black bg-opacity-50 rounded-b-lg text-white ">
              <div className="text-center px-2 pt-2">
                {card.date.slice(0, 2)}
              </div>
              <div className="h-0.5 w-10 bg-slate-300 m-1"></div>
              <div className="text-center px-2 pb-2">
                {card.date.slice(3, 6)}
              </div>
            </div>
            <div className='h-48 relative'>
              <h3 className="text-xl font-bold px-4 line-clamp-1 pt-2">{card.title}</h3>
              <h3 className="text-left pl-4 pb-1">{card.tithi}</h3>
              <p className="text-gray-500 text-left tracking-tighter line-clamp-2 text-wrap leading-normal px-4">{card.subtitle}</p>
              <div className='absolute left-3 bottom-6'>
                <button className="bg-black text-white md:text-center rounded-md shadow-lg shadow-gray-500/50 px-4 py-2">Book Pooja</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevCard}
        className="absolute top-1/2 transform -translate-y-1/2 left-0 bg-gray-800 text-white p-2 rounded-full"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={nextCard}
        className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-gray-800 text-white p-2 rounded-full"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Demo;



// const CardProps = [mt-2 m-4
//   {
//     image: 'https://via.placeholder.com/150',
//     name: 'Pandit 1',
//     category: 'Vedic',
//     language: 'Hindi',
//     experience: '10 years',
//     location: 'Delhi',
//     fees: '500 INR',
//     starRating: 4.5,
//   },
//   {
//       image: 'https://via.placeholder.com/150',
//       name: 'Pandit 1',
//       category: 'Vedic',
//       language: 'Hindi',
//       experience: '10 years',
//       location: 'Delhi',
//       fees: '500 INR',
//       starRating: 4.5,
//     },
//     {
//       image: 'https://via.placeholder.com/150',
//       name: 'Pandit 1',
//       category: 'Vedic',
//       language: 'Hindi',
//       experience: '10 years',
//       location: 'Delhi',
//       fees: '500 INR',
//       starRating: 4.5,
//     },
//     {
//       image: 'https://via.placeholder.com/150',
//       name: 'Pandit 1',
//       category: 'Vedic',
//       language: 'Hindi',
//       experience: '10 years',
//       location: 'Delhi',
//       fees: '500 INR',
//       starRating: 4.5,
//     },
//     {
//       image: 'https://via.placeholder.com/150',
//       name: 'Pandit 1',
//       category: 'Vedic',
//       language: 'Hindi',
//       experience: '10 years',
//       location: 'Delhi',
//       fees: '500 INR',
//       starRating: 4.5,
//     },
//     {
//       image: 'https://via.placeholder.com/150',
//       name: 'Pandit 1',
//       category: 'Vedic',
//       language: 'Hindi',
//       experience: '10 years',
//       location: 'Delhi',
//       fees: '500 INR',
//       starRating: 4.5,
//     },
  
// ];


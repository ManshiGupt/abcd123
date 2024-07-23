'use client'
import { poojaApi } from '@/api/pandit-api';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface Demo {
  _id: string,
  images: string,
  title: string,
  subtitle: string,
  date: string,
  tithi: string,
}

const Demo: React.FC = () => {
  const [data, setData] = useState<Demo[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await poojaApi();
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching data");
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(4);
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    };

    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => 
      Math.min(prevIndex + cardsToShow, data.length - cardsToShow)
    );
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => 
      Math.max(prevIndex - cardsToShow, 0)
    );
  };

  return (
    <div className="relative container mx-auto p-4 md:py-32">
      <h2 className="text-gray md:text-5xl text-2xl tracking-tighter font-medium leading-10 px-4">Upcoming Poojas</h2>
      <div className="flex justify-between items-center mb-10 px-4">
            <p className="text-gray-600">To know all about Poojas</p>
          <Link href="/view-all" className="text-black">
            View All &gt;
          </Link>
        </div>
      <div className="flex space-x-4">

        {loading ? (
          Array.from({ length: cardsToShow }).map((_, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 relative bg-gray-200 rounded-lg shadow-lg animate-pulse"
            >
              <div className="w-full h-60 bg-gray-300"></div>
              <div className="absolute h-35 w-12 top-0 right-4 bg-gray-400 rounded-b-lg"></div>
              <div className='h-48 relative p-4'>
                <div className="h-6 bg-gray-400 rounded mb-2"></div>
                <div className="h-6 bg-gray-400 rounded mb-2 w-1/2"></div>
                <div className="h-12 bg-gray-400 rounded mb-2"></div>
              </div>
            </div>
          ))
        ) : (
          data.slice(currentIndex, currentIndex + cardsToShow).map((card) => (
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
          ))
        )}
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





// const CardProps = 
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


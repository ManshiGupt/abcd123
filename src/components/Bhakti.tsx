'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { bhajanApi } from '@/api/pandit-api';

interface Card {
  thumbnail: string,
  title: string,
}

const Bhakti = () => {
  const [data, setData] = useState<Card[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardWidth = 300; // Width of each card in pixels

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await bhajanApi();
        setData(response.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching data");
      }
    }
    fetchData();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  if (!data || data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className='relative'>
      <div className="container mx-auto p-4 md:py-24">
        <div className="flex justify-between items-center mb-4 px-4">
          <div>
            <h2 className="text-2xl font-bold">Trending Bhankti Bhajan</h2>
            <p className="text-gray-600">To listen all about Bhajan</p>
          </div>
          <Link href="/view-all" className="text-blue-500">
            View All &gt;
          </Link>
        </div>
        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${currentIndex * cardWidth}px)` }}
          >
            {data.map((card, index) => (
              <div key={index} className="flex-shrink-0 w-[300px] bg-white h-[400px] m-4 relative rounded-lg ">
                <img src={card.thumbnail} alt={card.title} className="w-80 h-80 object-center mb-4 rounded-full static blur-sm" />
                <img src={card.thumbnail} alt={card.title} className="w-60 h-60 object-center mb-4 absolute left-[15%] top-[15%] rounded-full" />
                <p className="text-gray-500 text-left tracking-tighter line-clamp-2 text-wrap leading-normal mx-4">{card.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className=" lg:block absolute md:left-52 top-1/2 transform -translate-y-1/2 cursor-pointer">
          <button
            className="arrow left-arrow text-black text-3xl bg-gray-200 p-2 rounded-full"
            onClick={prevSlide}
          >
            &lang;
          </button>
        </div>
        <div className=" lg:block absolute md:right-52 top-1/2 transform -translate-y-1/2 cursor-pointer">
          <button
            className="arrow right-arrow text-black text-3xl bg-gray-200 p-2 rounded-full"
            onClick={nextSlide}
          >
            &rang;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bhakti;

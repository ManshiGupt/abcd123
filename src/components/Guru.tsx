'use client'
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { bhajanApi } from '@/api/pandit-api';

interface Guru {
  videoUrl: string;
  title: string;
}

const Guru = () => {
  const [data, setData] = useState<Guru[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await bhajanApi();
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("This is error in fetching" + error);
      }
    };
    fetchData();
  }, []);

  const nextSlide = () => {
    if (sliderRef.current) {
      const newIndex = (currentIndex + 1) % data.length;
      setCurrentIndex(newIndex);
      sliderRef.current.style.transform = `translateX(-${newIndex * 100}%)`;
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      const newIndex = (currentIndex - 1 + data.length) % data.length;
      setCurrentIndex(newIndex);
      sliderRef.current.style.transform = `translateX(-${newIndex * 100}%)`;
    }
  };

  return (
    <div className='p-5 sm:px-64 bg-gray-200 py-40 mb-10'>
      <div className='flex justify-between'>
        <div className='text-gray text-2xl md:text-5xl tracking-tighter font-medium leading-10 py-10'>
          Guru Satsang Kathaa
        </div>
        <div className='py-10'>
          <Link href="/Blog">View all&gt;</Link>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
          <button onClick={prevSlide} className="p-2 bg-gray-800 text-white rounded-full">
            &lt;
          </button>
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
          <button onClick={nextSlide} className="p-2 bg-gray-800 text-white rounded-full">
            &gt;
          </button>
        </div>
        <div ref={sliderRef} className="flex transition-transform duration-300">
          {data.map((card, index) => (
            <div key={index} className="min-w-[300px] bg-white h-[300px] shadow-xl rounded-lg mx-2 flex-shrink-0">
              <iframe
                width="100%"
                height="60%"
                src={`https://www.youtube.com/embed/${card.videoUrl}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className='rounded-t-lg'
              ></iframe>
              <div className="p-4">
                <p className="text-gray-400 text-left tracking-tighter line-clamp-2 text-wrap leading-normal">
                  {card.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Guru;

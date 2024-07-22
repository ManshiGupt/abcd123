'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { poojaCatApi } from '@/api/pandit-api';

interface Poojacat {
  imageUrl: string;
  title: string;
  _id: string;
}

const Features = () => {
  const [isMediumDevice, setIsMediumDevice] = useState<boolean>(false);
  const [data, setData] = useState<Poojacat[]>([]);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await poojaCatApi();
        setData(response);
        console.log(response);
      } catch (error) {
        console.log('This is not fetching');
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMediumDevice(window.innerWidth < 768);
    };

    handleResize(); // Check initial width
    window.addEventListener('resize', handleResize); // Listen for resize events

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up event listener
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + data.length) % data.length);
  };

  return (
    <div className="bg-gray-900 bg-opacity-90 p-8 md:pb-36 md:pt-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between space-x-10 md:py-10">
          <div className="flex-1">
            <Image
              src="/sanskar.jpg" // replace with the correct image path
              alt="Shopping"
              width={500}
              height={500}
              className="object-cover bg-gray-100 rounded-lg shadow-md"
            />
          </div>
          <div className="flex-1 mt-4 md:mt-0">
            <h2 className='text-white text-3xl md:text-5xl md:mb-12 tracking-tighter font-medium text-left leading-10'>
              Smarter way to know traditional Sanskar
            </h2>
            <p className="text-gray-300 mb-4">
              Sanskar means culture or manners. It can also be pronounced as Sanskara or Samskara which are philosophical terms.
            </p>
          </div>
        </div>
        <div className="mt-8 relative">
          <h3 className="text-white text-xl font-semibold mb-4">Pooja Category</h3>
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * (100 / (data.length || 1))}%)` }}>
              {data.map((card, index) => (
                <div key={index} className="flex-shrink-0 w-1/4 p-1"> {/* Adjusted width and padding */}
                  <div className="flex justify-center mb-2"> {/* Reduced bottom margin */}
                    <img
                      src={card.imageUrl}
                      alt={card.title}
                      className="w-24 h-24 rounded-full object-cover bg-gray-100 shadow-md"
                    />
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-300">{card.title}</div> {/* Adjusted text size */}
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-r-lg"
            >
              &lt;
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-l-lg"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;


{/*
sm:grid-cols-3 gap-4
<div className="bg-white p-4 rounded-md shadow-md flex keen-slider__slide number-slide2">

              <div className='px-6'>
                <Image
                  src="/aghori.png" // replace with the correct image path
                  alt="Daily Assets"
                  width={50}
                  height={50}
                  className='rounded-full '
                />
              </div>

              <div>
                <h3>Ceremonial</h3>
                <p>Subtitle</p>
              </div>

            </div>


            <div className="bg-white p-4 rounded-md shadow-md flex keen-slider__slide number-slide3">

              <div className='px-6'>
                <Image
                  src="/aghori.png" // replace with the correct image path
                  alt="Daily Assets"
                  width={50}
                  height={50}
                  className='rounded-full '
                />
              </div>

              <div>
                <h3>Godhbharai</h3>
                <p>Subtitle</p>
              </div>

            </div>
          </div> */}
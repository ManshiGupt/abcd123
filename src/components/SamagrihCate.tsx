'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const images = [
  '/thaali.jpg',
  '/budha.jpg',
  '/budha.jpg',
  '/budha.jpg',
  '/budha.jpg',
  '/budha.jpg',
  '/budha.jpg',
  '/budha.jpg',
  // Add more image URLs as needed
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((src, index) => (
          <div key={index} className="flex-shrink-0 w-1/2 md:w-1/3 lg:w-1/4 flex flex-col items-center p-0">
            <img src={src} alt={`Slide ${index}`} className="w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full object-cover" />
            <p className='text-center mt-2'>dgfgfiuef</p>
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
  );
};

const SamagrihCat = () => {
  return (
    <div className="container mx-auto p-4">
      <ImageSlider />
    </div>
  );
};

export default SamagrihCat;

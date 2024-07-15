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
          <div key={index} className="flex-shrink-0 w-full md:w-1/3 lg:w-1/4 p-2">
            <img src={src} alt={`Slide ${index}`} className="w-full h-[250px] rounded-lg" />
          </div>
        ))}
      </div>
      <button onClick={prevImage} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hidden md:block">
        &lt;
      </button>
      <button onClick={nextImage} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hidden md:block">
        &gt;
      </button>
    </div>
  );
};

const Wisdom = () => {
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
      <ImageSlider />
    </div>
  );
};

export default Wisdom;

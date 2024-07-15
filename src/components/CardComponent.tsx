'use client'
import React from 'react';

interface CardProps {
  image: string;
  title: string;
  subtitle: string;
}

const CardComponent: React.FC<CardProps> = ({ image, title, subtitle }) => {
  return (
    
    <div className="flex flex-col sm:flex-row lg:flex-col bg-white rounded-lg shadow-md p-4 mb-4 sm:mb-0 sm:mr-4 md:w-80 justify-center flex-wrap">
      <img src={image} alt={title} className="w-full sm:w-1/4 lg:w-full rounded-md sm:mr-4 lg:mr-0" />
      <div className="text-center sm:text-left lg:text-center mt-4 sm:mt-0 lg:mt-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-600">{subtitle}</p>
      </div>
    </div>
  );
};

export default CardComponent;
// lg:mr-0 lg:mb-4 
// 
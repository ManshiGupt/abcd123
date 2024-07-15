// components/DharmikGyanBhandar.tsx

import React from 'react';

const Search: React.FC = () => {
  return (
    <div className='bg-gray-100'>
      {/* Header Section */}
      <div className='relative bg-cover bg-center' style={{ backgroundImage: 'url(https://i.pinimg.com/736x/7e/65/7f/7e657f80946f82e548af2047b2b31a43.jpg)' }}>
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <div className='relative z-10 flex flex-col items-center justify-center py-4'>
          {/* <h1 className='text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 text-center'>Dharmik Gyan Bhandar</h1> */}
          <div className='flex items-center w-full max-w-xl bg-white rounded-full shadow-md p-4'>
            <input
              type='text'
              placeholder='Search for Hawan Samarigh'
              className='flex-grow bg-transparent outline-none px-4 text-gray-700'
            />
            <button className='ml-2 text-gray-500'>
              <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20'>
                <path
                  fillRule='evenodd'
                  d='M12.9 14.32a8 8 0 111.41-1.41l5.32 5.31-1.41 1.42-5.32-5.32zm-6.9-3.82a6 6 0 100-12 6 6 0 000 12z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
          </div>
          <div className='flex flex-wrap justify-center mt-4'>
            <span className=' text-white  px-4 py-1 m-2'>Popular Search:</span>
            <span className='bg-white text-gray-700 rounded-full px-4 py-1 m-2 shadow-md'>Phalgun Amavasya</span>
            <span className='bg-white text-gray-700 rounded-full px-4 py-1 m-2 shadow-md'>Meena Sankranti</span>
            <span className='bg-white text-gray-700 rounded-full px-4 py-1 m-2 shadow-md'>Janmashtami</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;







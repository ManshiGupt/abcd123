// components/DharmikGyanBhandar.tsx

import React from 'react';

const Search: React.FC = () => {
  return (
    <div className='bg-white'>
      {/* Header Section */}
      {/* <div className=' bg-cover bg-center' style={{ backgroundImage: 'url(https://i.pinimg.com/736x/7e/65/7f/7e657f80946f82e548af2047b2b31a43.jpg)' }}> */}
        {/* <div className='absolute inset-0 bg-black opacity-50'></div> */}
        <div className=' flex flex-col items-center justify-center py-4'>
          
          <div className='flex items-center w-full max-w-xl bg-white rounded-full shadow-md p-4'>
            <input
              type='text'
              placeholder='Search for Hawan Samarigh'
              className='flex-grow bg-transparent outline-none px-4 text-gray-700'
            />
            <button className='ml-2 text-gray-500'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" id="search">
                <path fill="#000" fill-rule="evenodd" d="M14.192 15.606a7 7 0 1 1 1.414-1.414l5.172 5.172a1 1 0 0 1-1.414 1.414l-5.172-5.172ZM15 10a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z" clip-rule="evenodd">
                </path>
              </svg>
            </button>
          </div>
          <div className='flex flex-wrap justify-center mt-4'>
            <span className=' text-gray  px-4 py-1 m-2'>Popular Search:</span>
            <span className='bg-white text-gray-700 rounded-full px-4 py-1 m-2 shadow-md'>Phalgun Amavasya</span>
            <span className='bg-white text-gray-700 rounded-full px-4 py-1 m-2 shadow-md'>Meena Sankranti</span>
            <span className='bg-white text-gray-700 rounded-full px-4 py-1 m-2 shadow-md'>Janmashtami</span>
          </div>
        </div>
      </div>
  
  );
};

export default Search;







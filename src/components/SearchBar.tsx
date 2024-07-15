// components/DharmikGyanBhandar.tsx

import React from 'react';

const Searchbar: React.FC = () => {
  return (
    <div className='bg-gray-100'>
      {/* Header Section */}
      <div className='relative bg-cover bg-center' style={{ backgroundImage: 'url(/path/to/your/background/image.jpg)' }}>
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <div className='relative z-10 flex flex-col items-center justify-center py-16'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 text-center'>Dharmik Gyan Bhandar</h1>
          <div className='flex items-center w-full max-w-xl bg-white rounded-full shadow-md p-4'>
            <input
              type='text'
              placeholder='Search for Maha Shivratri'
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

      {/* Content Section */}
      <div className='overflow-hidden py-8'>
        <div className='flex animate-marquee'>
          {/* Replace the src attribute values with your image URLs */}
          {[
            '/searchbg.png',
                      '/searchbg.png',
                      '/searchbg.png',
                      '/searchbg.png',
                      '/searchbg.png',
                      '/searchbg.png',
                      '/searchbg.png',
          ].map((src, index) => (
            <div key={index} className='flex-shrink-0 m-2'>
              <img
                src={src}
                alt={`Dharmik Image ${index + 1}`}
                className='w-32 h-32 md:w-48 md:h-48 rounded-lg object-cover'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Searchbar;






// // components/DharmikGyanBhandar.tsx

// import React from 'react';

// const Searchbar: React.FC = () => {
//   return (
//     <div className='bg-gray-100'>
//       {/* Header Section */}
//       <div className='relative bg-cover bg-center' style={{ backgroundImage: 'url(https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAzL3Jhd3BpeGVsX29mZmljZV8zOV9mbG93X2FuZF9mbHV0dGVyX29mX2FfbGlnaHRfaW5kaWFuX2dhcmRlbl9zdF8xMjYyYjIzMC04MDFmLTQyOWUtYjU1Ny1iY2I0NTc5NGExZTVfMS5qcGc.jpg)' }}>
//         <div className='absolute inset-0 bg-black opacity-50'></div>
//         <div className='relative z-10 flex flex-col items-center justify-center py-16'>
//           <h1 className='text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 text-center'>Dharmik Gyan Bhandar</h1>
//           <div className='flex items-center w-full max-w-xl bg-white rounded-full shadow-md p-4'>
//             <input
//               type='text'
//               placeholder='Search for Maha Shivratri'
//               className='flex-grow bg-transparent outline-none px-4 text-gray-700'
//             />
//             <button className='ml-2 text-gray-500'>
//               <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20'>
//                 <path
//                   fillRule='evenodd'
//                   d='M12.9 14.32a8 8 0 111.41-1.41l5.32 5.31-1.41 1.42-5.32-5.32zm-6.9-3.82a6 6 0 100-12 6 6 0 000 12z'
//                   clipRule='evenodd'
//                 />
//               </svg>
//             </button>
//           </div>
//           <div className='flex flex-wrap justify-center mt-4'>
//             <h4></h4>
//             <span className=' text-white  px-4 py-1 m-2'>Popular Search:</span>
//             <span className='bg-white text-gray-700 rounded-full px-4 py-1 m-2 shadow-md'>Phalgun Amavasya</span>
//             <span className='bg-white text-gray-700 rounded-full px-4 py-1 m-2 shadow-md'>Meena Sankranti</span>
//             <span className='bg-white text-gray-700 rounded-full px-4 py-1 m-2 shadow-md'>Janmashtami</span>
//           </div>
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className='flex flex-wrap justify-center py-8'>
//         {/* Replace the src attribute values with your image URLs */}
//         {[
//           '/searchbg.png',
//           '/searchbg.png',
//           '/searchbg.png',
//           '/searchbg.png',
//           '/searchbg.png',
//           '/searchbg.png',
          
          
//         ].map((src, index) => (
//           <div key={index} className='m-2'>
//             <img
//               src={src}
//               alt={`Dharmik Image ${index + 1}`}
//               className='w-32 h-32 md:w-48 md:h-48 rounded-lg object-cover'
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Searchbar;

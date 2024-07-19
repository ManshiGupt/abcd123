// import React from 'react'

// const Stat = () => {
//     return (
//         <main className="p-8 text-center px-6">
//         <h3 className="text-2xl font-bold mb-6 text-center">Let a Pandit solve your problems in a vedic way</h3>

//         <div className="flex flex-wrap justify-around py-8 space-y-4">
//           <div className="flex flex-row sm:flex-col text-center mb-8 px-8">
//             <div className="mb-4">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
//               </svg>
//             </div>
//             <div className='px-15'>
//             <h2 className="text-4xl font-semibold font-sans">2500+</h2>
//             <p className='text-3xl pt-4 font-sans'>Pooja Performed</p>
//             <p className='text-lg font-sans'>Across India, Australia, New Zealand and the UK</p>
//             </div>
//           </div>

//           <div className="flex flex-row sm:flex-col text-center mb-8 px-8 space-y-2">
//             <div className="mb-4">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
//               </svg>
//             </div>
//             <div className='px-15'>
//             <h2 className="text-4xl font-semibold">550+</h2>
//             <p className='text-3xl pt-4'>Types of Pooja</p>
//             <p className='text-lg'>Booked by our customers every year</p>
//             </div>
//           </div>

//           {/* <div className="flex flex-row sm:flex-col text-center mb-8 px-8">
//             <div className="mb-4">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
//               </svg>
//             </div>
//             <div>
//             <h2 className="text-4xl font-semibold">12 Cr+</h2>
//             <p className='text-3xl pt-4'>Fast Delivary</p>
//             <p className='text-lg'>Distance covered </p>
//             </div>
//           </div> */}

//           <div className="flex flex-row sm:flex-col text-center mb-8 px-8 space-y-4">
//             <div className="mb-4">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
//               </svg>
//             </div>
//             <div className='px-15'>
//             <h2 className="text-4xl font-semibold">12 Cr+</h2>
//             <p className='text-3xl pt-4'>Fast Delivary</p>
//             <p className='text-lg'>Distance covered</p>
//             </div>
//           </div>


          
//         </div>
//       </main>
//     )
// }

// export default Stat

import Image from 'next/image'
import React from 'react'

const Stat = () => {
  return (
    <div className='p-4 md:items-center py-8 '>
      <div className='px-4 py-10'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
          <div className='flex flex-col md:flex-col md:items-center md:text-center py-10'>
            <div className='flex space-x-5 md:flex-col items-center'>
              <Image 
                src="/stat1.png" // replace with the correct image path
                alt="Stat 1"
                width={100}
                height={100}
                className="object-cover bg-gray-100 rounded-lg shadow-md"
              />
              <div className='text-left md:text-center md:pt-4 md:line-clamp-3'>
                <h1 className='font-semibold text-4xl'>250+</h1>
                <h2 className='font-bold'>Types of Poojas</h2>
                <p>Pooja performed in Delhi NCR</p>
              </div>
            </div>
          </div>

          <div className='flex flex-col md:flex-col md:items-center md:text-center py-10'>
            <div className='flex space-x-5 md:flex-col items-center'>
              <Image 
                src="/stat2.png" // replace with the correct image path
                alt="Stat 2"
                width={100}
                height={100}
                className="object-cover bg-gray-100 rounded-lg shadow-md"
              />
              <div className='text-left md:text-center md:pt-4 md:line-clamp-3'>
                <h1 className='font-semibold text-4xl'>2500+</h1>
                <h2 className='font-bold'>Pandit Onboard</h2>
                <p>All Types of Pandit across India</p>
              </div>
            </div>
          </div>

          <div className='flex flex-col md:flex-col md:items-center md:text-center py-10'>
            <div className='flex space-x-5 md:flex-col items-center'>
              <Image 
                src="/stat3.png" // replace with the correct image path
                alt="Stat 3"
                width={100}
                height={100}
                className="object-cover bg-gray-100 rounded-lg shadow-md"
              />
              <div className='text-left md:text-center md:pt-4 md:line-clamp-3'>
                <h1 className='font-semibold text-4xl'>2500+</h1>
                <h2 className='font-bold'>Pooja Samagrih</h2>
                <p>For every Pooja, collection of Items</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stat

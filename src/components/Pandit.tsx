'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css';
import { panditApi } from '@/api/pandit-api';
import { FaStar } from "react-icons/fa";

interface Pandit {
  _id: string;
  name: string;
  profileImage: string;
  oldPrice: string;
  newPrice: string;
  poojaNames: string[];
  experience: string;
  language: string[];
  education: string[];
  visibility: boolean;
  index: number;
  verified: boolean;
  panditTag: string;
  location: string;
  avgStars: string;
}


const PanditComponent = () => {
  const [data, setData] = useState<Pandit[]>([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await panditApi()
        setData(response.data.slice(0,4));
        console.log(response)
      } catch (error) {

      }
    }


    fetchData();
  }, []);

  return (
    <div className='p-5 sm:px-64'>
      <div className='flex justify-between'>
        <div className='text-gray text-3xl md:text-5xl tracking-tighter font-medium leading-10 py-10'>
          Pandit We Offer
        </div>
        <div className='py-10'>
          <Link href="/pandit">View all&gt;</Link>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-20'>
        {data.map((card) => (
          <div key={card._id} className='min-h-full md:w-72 bg-slate-100 rounded-md shadow-lg'>
            <div className='flex p-2'>
              <div>

                <img
                  src={card.profileImage}
                  alt={card.name}
                  height={90}
                  width={90}
                  className='rounded-lg pb-2 object-cover'
                />
                <div className=' flex text-xs'>
                {Array.from({ length: 5 }, (_, index) => (
                    <FaStar
                      key={index}
                      className={`h-3 w-3 ${
                        index < parseInt(card.avgStars) ? "text-yellow-500" : "text-gray-300"
                      }`}
                    />
                  ))}
                   <p className='text-xs'>({card.avgStars})</p>
                  </div>
               
              </div>
              <div className='px-2'>

                <div className='flex gap-2'>
                <h3>{card.name}</h3>
                <h3>{card.verified ?
                       <img
                        src="/verified.png"
                        alt='verfied'
                        height={20}
                        width={20}
                        className='mt-1'
                        style={{ filter: 'invert(0%) sepia(100%) saturate(5000%) hue-rotate(90deg)' }}
                       /> 
                      : ""}</h3>
                </div>
                <p className='text-xs'>{card.language.join(', ')}</p>
                <p className='text-xs'>{card.education.join(', ')}</p>
                <p className='text-xs'>Exp: {card.experience}</p>
                <p className='text-xs'>{card.location}</p>
              </div>
              {/* <div className='pr-12'>
                
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PanditComponent;



























// // 'use client'
// // import React, { useEffect, useState } from 'react';
// // import Image from 'next/image';

// // interface FeedbackDetail {
// //   _id: string;
// //   message: string;
// //   stars: number;
// //   userName: string;
// //   profileImage: string;
// //   platformLogoUrl: string;
// //   createdAt: string;
// // }

// // const PanditFeedbacks = () => {
// //   const [feedbackDetails, setFeedbackDetails] = useState<FeedbackDetail[]>([]);
// //   const [loading, setLoading] = useState<boolean>(true);
// //   const [error, setError] = useState<string | null>(null);

// //   useEffect(() => {
// //     const fetchFeedbackDetails = async () => {
// //       try {
// //         const response = await fetch('https://vedic-pandit-server.onrender.com/get-home-feedbacks');
// //         if (!response.ok) {
// //           throw new Error('Network response was not ok');
// //         }
// //         const data = await response.json();
// //         setFeedbackDetails(data.data);
// //       } catch (error) {
// //         setError('Failed to fetch data');
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchFeedbackDetails();
// //   }, []);

// //   if (loading) {
// //     return <div>Loading...</div>;
// //   }

// //   if (error) {
// //     return <div>{error}</div>;
// //   }

// //   return (
// //     <div className='bg-gray-400 p-4 md:p-8 md:py-20'>
// //       <h2 className='text-black text-3xl md:text-5xl md:mb-12 tracking-tighter font-medium text-left md:text-center leading-10 py-4'>
// //         Pandit Feedbacks
// //       </h2>
// //       <div className='grid grid-rows-1 gap-4 lg:grid-cols-4'>
// //         {feedbackDetails.map((feedback) => (
// //           <div key={feedback._id} className='bg-white shadow-lg rounded-md p-4 flex gap-4 flex-row'>
// //             <div>
// //               <Image
// //                 src={feedback.profileImage}
// //                 alt={feedback.userName}
// //                 width={100}
// //                 height={100}
// //                 className='rounded-lg'
// //               />
// //               <h3 className='py-2'>{feedback.stars} stars</h3>
// //               <Image
// //                 src={feedback.platformLogoUrl}
// //                 alt="Platform Logo"
// //                 width={30}
// //                 height={30}
// //                 className='rounded-lg'
// //               />
// //             </div>
// //             <div>
// //               <h3 className='font-bold'>{feedback.userName}</h3>
// //               <p>{feedback.message}</p>
// //               <p><span>Posted on:</span> {new Date(feedback.createdAt).toLocaleDateString()}</p>
// //             </div>
// //             <div className='w-full'>
// //               <button className='bg-black text-white w-full p-2 rounded-md shadow-lg shadow-gray-500/50'>
// //                 Book Now
// //               </button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default PanditFeedbacks;

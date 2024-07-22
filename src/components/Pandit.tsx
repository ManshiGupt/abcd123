'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
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

const SkeletonLoader = () => {
  return (
    <div className='min-h-full md:w-72 bg-slate-100 rounded-md shadow-xl p-2'>
      <div className='animate-pulse'>
        <div className='rounded-lg bg-gray-300 h-24 w-24 mb-2'></div>
        <div className='flex flex-col gap-2'>
          <div className='bg-gray-300 h-4 w-3/4 rounded'></div>
          <div className='bg-gray-300 h-4 w-1/2 rounded'></div>
          <div className='bg-gray-300 h-4 w-1/3 rounded'></div>
          <div className='bg-gray-300 h-4 w-1/4 rounded'></div>
        </div>
      </div>
    </div>
  );
}

const PanditComponent = () => {
  const [data, setData] = useState<Pandit[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await panditApi();
        setData(response.data.slice(0, 4));
        setLoading(false);
      } catch (error) {
        console.log("Error fetching data");
      }
    }
    fetchData();
  }, []);

  return (
    <div className="relative container mx-auto p-4 md:py-32 ">
      <h2 className="text-gray md:text-5xl text-2xl tracking-tighter font-medium leading-10 px-4">Pandit we Offer</h2>
      <div className="flex justify-between items-center mb-10 px-4">
        <p className="text-gray-600">To know all about Pandit</p>
        <Link href="/pandit" className="text-black">
          View All &gt;
        </Link>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-20 '>
        {loading ? (
          Array.from({ length: 4 }).map((_, index) => <SkeletonLoader key={index} />)
        ) : (
          data.map((card) => (
            <div key={card._id} className='min-h-full md:w-72 bg-slate-100 rounded-md shadow-xl'>
              <div className='flex p-2'>
                <div>
                  <img
                    src={card.profileImage}
                    alt={card.name}
                    height={90}
                    width={90}
                    className='rounded-lg pb-2 object-cover'
                  />
                  <div className='flex text-xs'>
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
                    {card.verified && (
                      <img
                        src="/verified.png"
                        alt='verified'
                        height={20}
                        width={20}
                        className='mt-1'
                        style={{ filter: 'invert(0%) sepia(100%) saturate(5000%) hue-rotate(90deg)' }}
                      />
                    )}
                  </div>
                  <p className='text-xs'>{card.language.join(', ')}</p>
                  <p className='text-xs'>{card.education.join(', ')}</p>
                  <p className='text-xs'>Exp: {card.experience}</p>
                  <p className='text-xs'>{card.location}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default PanditComponent;

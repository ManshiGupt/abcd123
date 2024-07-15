'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css';
import { panditApi } from '@/api/pandit-api';
import axios from 'axios';
import { bhajanApi } from '@/api/pandit-api';
import Image from 'next/image';

interface cards {
  thumbnail: string,
  title: string,
}

// const cards=[
//     {
//         thumbnail:'/diya.webp',
//         title:"uwfegwhegroihg eieghejh urthit reyertertiy retyt",
//     },
// ]
const Bhakti = () => {
  const [data, setData] = useState<cards[]>([]);

  useEffect(() => {
    const fetchData= async () => {
      try {
        const response = await bhajanApi();
        setData(response.data);
        console.log(response);
      } catch (error) {
        
      }
    }
    fetchData();
    
  }, [])
  



  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: {
      perView: 4,
      spacing: 10,
    },
    breakpoints: {
      '(max-width: 1024px)': {
        slides: { perView: 2.1, spacing: 10 },
      },
      '(max-width: 600px)': {
        slides: { perView: 1.2, spacing: 10 },
      },
    },
  });

  return (
    <div className=' relative'>
      <div className="container mx-auto p-4 md:py-24">
        <div className="flex justify-between items-center mb-4 px-4">
          <div>
            <h2 className="text-2xl font-bold">Trending Bhankti Bhajan</h2>
            <p className="text-gray-600">To listen all about Bhajan</p>
          </div>
          <Link href="/view-all" className="text-blue-500">
            View All &gt;
          </Link>
        </div>
        <div ref={sliderRef} className="keen-slider ">
          {data.map((card, index) => (
            <div key={index} className="keen-slider__slide number-slide1 ">
              <div className="w-[300px] bg-white h-[400px]  m-4 ">
                <img src={card.thumbnail} alt="dhdh" className="w-80 h-80 object-center mb-4  rounded-full  static blur-sm" />
                <img src={card.thumbnail} alt="de" className="w-60 h-60 object-center mb-4 absolute left-[15%]  top-[15%] rounded-full " />
                <p className="text-gray-500 text-left tracking-tighter line-clamp-2 text-wrap leading-normal mx-4">{card.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden lg:block absolute md:left-52 top-1/2 transform -translate-y-1/2 cursor-pointer">
          <button
            className="arrow left-arrow text-black text-3xl bg-gray-200"
            onClick={() => slider.current?.prev()}
          >
            &lang;
          </button>
        </div>
        <div className="hidden lg:block absolute md:right-52 top-1/2 transform -translate-y-1/2 cursor-pointer">
          <button
            className="arrow right-arrow text-black text-3xl bg-gray-200  p-0 "
            onClick={() => slider.current?.next()}
          >
            &rang;
          </button>
        </div>
      </div>
    </div>
  );
};


export default Bhakti
// min-w-[250px]
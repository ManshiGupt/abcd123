'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useKeenSlider } from 'keen-slider/react';

import 'keen-slider/keen-slider.min.css';
import { bhajanApi } from '@/api/pandit-api';

interface GuruItem {
    videoUrl: string,
    title: string,
}



const Guru = () => {
    const[data, setData]= useState<GuruItem[]>([]);
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await bhajanApi();
      setData(response.data); 
      console.log(response.data); 
    } catch (error) {
        console.log("This is error in fetching"+ error);
    }
  }
fetchData();
  
}, [])

    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        mode: "snap",
        slides: {
            perView: 4,
            spacing: 10,
        },
        breakpoints: {
            '(max-width: 1024px)': {
                slides: { perView: 2, spacing: 10 },
            },
            '(max-width: 600px)': {
                slides: { perView: 1.2, spacing: 10 },
            },
        },
    });

    return (
        <div className='p-5 sm:px-64 bg-slate-200 py-20 mb-10'>
            <div className='flex justify-between'>
                <div className='text-gray text-2xl md:text-5xl tracking-tighter font-medium leading-10 py-10'>
                    Guru Satsang Katha
                </div>
                <div className='py-10'>
                    <Link href="/Blog">View all&gt;</Link>
                </div>
            </div>

            <div ref={sliderRef} className="keen-slider">
                {data.map((card, index) => (
                    <div key={index} className="keen-slider__slide number-slide1">
                        <div className="min-w-[300px] bg-white h-[220px] shadow-xl rounded-lg">
                            <a href={card.videoUrl} target="_blank" rel="noopener noreferrer">
                                <iframe
                                    src= {`https://www.youtube.com/watch?v=${card.videoUrl}`}
                                    width="320"
                                    height="150"
                                    title="guru video"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className='md:w-96 rounded-t-lg'
                                />
                            </a>
                            <p className="text-gray-400 text-left tracking-tighter line-clamp-2 text-wrap leading-normal px-4 my-2">
                                {/* {card.title} */}
                                <p>{`https://www.youtube.com/watch?v=${card.videoUrl}`}</p>
                            </p>
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Guru;




// const guru: GuruItem[] = [
//     {
//         video: 'https://www.youtube.com/embed/RSFv-SBl3jc',
//         subtitle: 'AUM Foundation, the social welfare arm of AUM',
//     },
//     {
//         video: 'https://www.youtube.com/embed/RSFv-SBl3jc',
//         subtitle: 'AUM Foundation, the social welfare arm of AUM',
//     },
//     {
//         video: 'https://www.youtube.com/embed/RSFv-SBl3jc',
//         subtitle: 'AUM Foundation, the social welfare arm of AUM',
//     },
//     {
//         video: 'https://www.youtube.com/embed/RSFv-SBl3jc',
//         subtitle: 'AUM Foundation, the social welfare arm of AUM',
//     },
// ];
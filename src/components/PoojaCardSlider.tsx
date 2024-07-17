'use client';
import React, { useEffect, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import Link from 'next/link';
import 'keen-slider/keen-slider.min.css';
import { poojaApi } from '@/api/pandit-api';

interface PoojaCardSlider {
  _id: string,
  images: string,
  title: string,
  subtitle: string,
  date: string,
  tithi: string,
}

const PoojaCardSlider: React.FC = () => {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'snap',
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

  const [data, setData] = useState<PoojaCardSlider[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await poojaApi();
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log('This is not fetching');
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 relative">
      <div className="container mx-auto p-4 md:py-24">
        <div className="flex justify-between items-center mb-4 px-4">
          <div>
            <h2 className="text-2xl font-bold">Upcoming Poojas</h2>
            <p className="text-gray-600">To know all about Poojas</p>
          </div>
          <Link href="/view-all" className="text-blue-500">
            View All &gt;
          </Link>
        </div>
        <div ref={sliderRef} className="keen-slider">
          {data.map((card, index) => (
            <div key={index} className="keen-slider__slide number-slide1">
              <div className="min-w-[300px] bg-white h-[450px] shadow-xl rounded">
                <img src={card.images} alt={card.title} className="w-full h-60 object-fill rounded mb-4 static" />
                <div className="h-35 w-12 absolute top-0 right-4 bg-black bg-opacity-50 rounded-b-lg text-white ">
                  <div className="text-center px-2 pt-2">
                    {card.date.slice(0, 2)}
                  </div>
                  <div className="h-0.5 w-10 bg-slate-300 m-1"></div>
                  <div className="text-center px-2 pb-2">
                    {card.date.slice(3, 6)}
                  </div>
                </div>
                <h3 className="text-xl font-bold px-4 line-clamp-1">{card.title}</h3>
                <h3 className="text-left pl-4 pb-1">{card.tithi}</h3>
                <p className="text-gray-500 text-left tracking-tighter line-clamp-2 text-wrap leading-normal px-4">{card.subtitle}</p>
                <button className="bg-black text-white md:text-center rounded-md shadow-lg shadow-gray-500/50 px-4 py-2 mt-2 m-4">Book Pooja</button>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute left-0 md:left-12 top-1/2 transform -translate-y-1/2 cursor-pointer z-10">
          <button
            className="arrow left-arrow text-black text-3xl bg-gray-200 rounded-full p-2"
            onClick={() => slider.current?.prev()}
          >
            &lang;
          </button>
        </div>
        <div className="absolute right-0 md:right-12 top-1/2 transform -translate-y-1/2 cursor-pointer z-10">
          <button
            className="arrow right-arrow text-black text-3xl bg-gray-200 rounded-full p-2"
            onClick={() => slider.current?.next()}
          >
            &rang;
          </button>
        </div>
      </div>
    </div>
  );
};

export default PoojaCardSlider;

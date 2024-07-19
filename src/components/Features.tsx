'use client'
import Image from 'next/image';
import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider'
import React, { useEffect, useState } from 'react';
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

interface Poojacat {
  Category: String,
  subtitle: String,
  image: String,
}
const Poojacat = [
  {
    Category: 'Festivals',
    subtitle: 'Many festivals have religious origins and entwine cultural and religious significance in traditional activities.',
    image: '/diya.webp',
  },
  {
    Category: 'Ceremonial',
    subtitle: 'Many festivals have religious origins and entwine cultural and religious significance in traditional activities.',
    image: '/om.jpg',
  },
  {
    Category: 'Business',
    subtitle: 'Many festivals have religious origins and entwine cultural and religious significance in traditional activities.',
    image: '/om.jpg',
  },
  {
    Category: 'Pooja Path',
    subtitle: 'Many festivals have religious origins and entwine cultural and religious significance in traditional activities.',
    image: '/om.jpg',
  },
  {
    Category: 'havan Jaap',
    subtitle: 'Many festivals have religious origins and entwine cultural and religious significance in traditional activities.',
    image: '/om.jpg',
  },
  {
    Category: 'Dosh Nivaran',
    subtitle: 'Many festivals have religious origins and entwine cultural and religious significance in traditional activities.',
    image: '/om.jpg',
  },
]

const Features = () => {
  const [isMediumDevice, setIsMediumDevice] = useState<boolean>(false);

  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: {
      perView: 3.2,
      spacing: 15,
    },
    disabled: isMediumDevice
  })


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMediumDevice(false);
      } else {
        setIsMediumDevice(true);
      }
    };

    handleResize(); // Check initial width
    window.addEventListener('resize', handleResize); // Listen for resize events

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up event listener
    };
  }, []);


  return (
    <div className="bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between space-x-10">

          <div className="flex-1">

            <Image
              src="/sanskar.jpg" // replace with the correct image path
              alt="Shopping"
              width={500}
              height={500}
              className="object-cover bg-gray-100 rounded-lg shadow-md"
            />
          </div>

          <div className="flex-1 mt-4 md:mt-0">
            <h2 className='text-white text-3xl md:text-5xl md:mb-12 tracking-tighter font-medium text-left leading-10'>Smarter way to know traditional Sanskar</h2>

            {/* "text-2xl font-semibold mb-2" */}

            <p className="text-gray-300 mb-4">Sanskar means culture or manners. It can also be pronounced as Sanskara or Samskara which are philosophical terms.</p>

          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-white text-xl font-semibold mb-4">Pooja Category</h3>
          <div ref={sliderRef} className="keen-slider">
            {Poojacat.map((card, index) => (
              <div key={index} className="keen-slider__slide grid grid-cols-1">
                <div className="bg-white p-4 rounded-md shadow-md flex my-2 sm:p-2 h-40">

                  <div className='px-6 sm:px-0'>
                    <img
                      src={card.image} // replace with the correct image path
                      alt={card.Category}
                      width={100}
                      height={100}
                      className='rounded-full shadow-lg h-100 w-100 md:hidden'
                    />
                    
                  </div>

                  <div>
                    <h3 className=' font-bold px-4 sm:px-2'>{card.Category}</h3>
                    <p className="text-gray-500 text-left tracking-tighter line-clamp-3 text-wrap leading-5 px-4 sm:px-2 mb-2">{card.subtitle}</p>
                    <button className='bg-black text-white md:text-center rounded-md shadow-lg shadow-gray-500/50 px-4 py-2 mt-1 m-2'>Explore</button>
                  </div>
                  
                </div>
              </div>

            ))}

          </div>

        </div>
      </div>
    </div>
  );
}

export default Features;
{/*
sm:grid-cols-3 gap-4
<div className="bg-white p-4 rounded-md shadow-md flex keen-slider__slide number-slide2">

              <div className='px-6'>
                <Image
                  src="/aghori.png" // replace with the correct image path
                  alt="Daily Assets"
                  width={50}
                  height={50}
                  className='rounded-full '
                />
              </div>

              <div>
                <h3>Ceremonial</h3>
                <p>Subtitle</p>
              </div>

            </div>


            <div className="bg-white p-4 rounded-md shadow-md flex keen-slider__slide number-slide3">

              <div className='px-6'>
                <Image
                  src="/aghori.png" // replace with the correct image path
                  alt="Daily Assets"
                  width={50}
                  height={50}
                  className='rounded-full '
                />
              </div>

              <div>
                <h3>Godhbharai</h3>
                <p>Subtitle</p>
              </div>

            </div>
          </div> */}
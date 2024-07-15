'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { productApi } from '@/api/pandit-api'

interface Saman {
  images: string[],
  title: string,
  subtitle: string,
  oldPrice: string,
  newprice: string,
  productTag: string,
  discountPercent: string,
  _id: string
}

const Samagrih = () => {
  const [data, setData] = useState<Saman[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await productApi();
        setData(response.data);
        console.log(response.data.slice(0, 4));
      } catch (error) {
        console.log("not working api" + error);
      }
    }

    fetchData();

  }, [])

  return (
    <div className='p-5 sm:px-64'>
      <div className='flex justify-between'>
        <div className='text-gray text-3xl md:text-5xl tracking-tighter font-medium leading-10 py-10'>
          All kinds of Samagrih
        </div>
        <div className='py-10'>
          <Link href="/pandit">View all&gt;</Link>
        </div>
      </div>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((card, index) => (
            <div key={card._id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <ImageSlider images={card.images} />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="text-gray-500">{card.subtitle}</p>
                <div className="mt-4 flex items-center">
                  <span className="text-gray-500 line-through">₹{card.oldPrice}</span>
                  <span className="text-red-500 ml-2">₹{card.newprice}</span>
                  <span className="ml-2 text-green-500">{card.discountPercent}</span>
                </div>
              </div>
              <div className="p-4">
                <button className="w-full bg-blue-500 text-white py-2 rounded">Add to Bag</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

interface ImageSliderProps {
  images: string[]
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }

  return (
    <div className="relative">
      <Image src={images[currentIndex]} alt="Product image" width={500} height={500} className="w-full h-64 object-cover" />
      <button onClick={prevImage} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full">
        &lt;
      </button>
      <button onClick={nextImage} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full">
        &gt;
      </button>
    </div>
  )
}

export default Samagrih


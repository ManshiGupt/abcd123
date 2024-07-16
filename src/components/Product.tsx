import React from 'react';
import Image from 'next/image';

interface Item {

    Category: string;
    title: string;
    date: string;
    review: string;
    subtitle: string;
    image: string;
    duration: string;
    pandit: string;
    minPrice: string;
    maxPrice: string;
    about: string;
}

const Items: Item[] = [
    {
        Category: "Puja",
        title: "Griha Pravesh Puja",
        date: "2024-07-15",
        review: "Excellent service!",
        subtitle: "Home entry ceremony",
        image: "/blog1.jpeg",
        duration: "2 hours",
        pandit: "Pandit Sharma",
        minPrice: "5000",
        maxPrice: "7000",
        about: "A ceremony to purify the new home and ensure peace and prosperity."
    },
    // Add more items as needed
];

const Product = () => {
    return (
        <div className="container mx-auto p-4">
            {Items.map((card, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center my-8">


                    <div className="flex justify-center md:justify-end">
                        
                        <div className="w-full md:max-w-md">
                            <Image
                                src={card.image}
                                alt={card.subtitle}
                                width={500}
                                height={500}
                                layout="responsive"
                                className="rounded-lg"
                            />
                        </div>
                    </div>


                    <div className="md:space-y-2">
                        <h3 className="text-xl font-semibold">{card.title}</h3>
                        <p className="text-gray-500">{card.date}</p>
                        <p className="text-gray-700">{card.review}</p>
                        <p className="text-gray-500">{card.subtitle}</p>
                        <p className="text-gray-500">Pooja Duration: {card.duration}</p>
                        <p className="text-gray-500">Pandit: {card.pandit}</p>
                        <div className="flex space-x-2 text-gray-700">
                            <p>₹{card.minPrice} -</p>
                            <p>₹{card.maxPrice}</p>
                        </div>
                        <div className='flex gap-4'>
                            <div className='border-2 rounded-lg  h-20 w-20 justify-center'>
                                <p className='text-xs text-center'>Samagrih</p>
                            </div>
                            <div className='border-2 rounded-lg  h-20 w-20 justify-center'>
                                <p className='text-xs text-center'>Mantra</p>
                            </div>
                            <div className='border-2 rounded-lg  h-20 w-20 justify-center'>
                                <p className='text-xs text-center'>Aarti</p>
                            </div>
                            <div className='border-2 rounded-lg  h-20 w-20 justify-center'>
                                <p className='text-xs text-center'>Bhajan</p>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold">About {card.title}</h4>
                            <p className="text-gray-500">{card.about}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Product;

'use client'
import React, { useEffect, useState } from 'react';
import { poojaCatApi } from '@/api/pandit-api';

interface Demo2 {
    imageUrl: string,
    title: string,
    _id: string
}

const Demo = [
  {
    imageUrl: 'https://via.placeholder.com/150',
    title: 'Pandit 1',
    _id:'3'
  },
  {
    imageUrl: 'https://via.placeholder.com/150',
    title: 'Pandit 1',
    _id:'3'
  },]

const Demo2 = () => {
    const [data, setData] = useState<Demo2[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardWidth = 200; // Width of each card in pixels

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await poojaCatApi();
                setData(response.data);
                console.log(response.data);
            } catch (error) {
                console.log("not fetched");
            }
        }
        fetchData();
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === data.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? data.length - 1 : prevIndex - 1
        );
    };

    // if (!data || data.length === 0) {
    //     return <div>Loading...</div>;
    // }

    return (
        <div className="relative container mx-auto p-4">
            <div className="flex overflow-hidden">
                <div
                    className="flex transition-transform duration-300 ease-out"
                    style={{ transform: `translateX(-${currentIndex * cardWidth}px)` }}
                >
                    {Demo.map((card) => (
                        <div
                            key={card._id}
                            className="flex-shrink-0 w-52 sm:w-52 md:w-52 lg:w-52 relative bg-white rounded-lg shadow-lg mx-2 p-4"
                            style={{ width: `${cardWidth}px` }}
                        >
                            <div className="flex justify-center mb-4">
                                <img
                                    src={card.imageUrl}
                                    alt={card.title}
                                    className="w-24 h-24 rounded-full object-cover bg-gray-100 shadow-md"
                                />
                            </div>
                            <div className="text-center">
                                <div className="text-xl font-bold">{card.title}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button
                onClick={prevSlide}
                className="absolute top-1/2 transform -translate-y-1/2 left-0 bg-gray-800 text-white p-2 rounded-full"
            >
                &#8249;
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-gray-800 text-white p-2 rounded-full"
            >
                &#8250;
            </button>
        </div>
    );
}

export default Demo2;



// 'use client'
// import { poojaCatApi } from '@/api/pandit-api';
// import React, { useEffect, useState } from 'react';

// interface Demo2{
//     imageUrl:string,
//     title: string,
//     _id: string
// }

// const Demo2 = () => {
//     const[data,setData] =useState<Demo2[]>([]);
//     useEffect(() => {
//       const fetchData = async () => {
//         try {
            
//             const response = await poojaCatApi();
//             setData(response.data);
//             console.log(response.data);
//         } catch (error) {
//             console.log("not fetched");
//         }
//       }
//       fetchData();
      
//     }, [])
//     if(!data || data.length ===0){
//         return <div>Loading....</div>
        
//     }
    

//   return (
//     <div className="relative container mx-auto p-4">
//         {data.map((card,index)=>(
//                 <div  key={card._id}
//                 className="flex-shrink-0 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 relative bg-white rounded-lg shadow-lg">
//                     {/* <div className=''>{card.imageUrl}</div> */}
//                     <div>{card.title}</div>
//                 </div>
//         ))}

//     </div>
//   )
// }

// export default Demo2
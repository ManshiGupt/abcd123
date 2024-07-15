// // CardGrid.tsx

// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import { useRouter } from 'next/router';

// interface CardProps {
//   imageSrc: string;
//   title: string;
//   originalPrice: number;
//   discountedPrice: number;
//   description: string;
// }

// const CardGrid: React.FC = () => {
// //   const cards: CardProps[] = [
// //     {
// //       imageSrc: '/guru.jpg',
// //       title: 'Incense Stick',
// //       originalPrice: 100,
// //       discountedPrice: 80,
// //       description: '10 packets in a bundle',
// //     },
// //     {
// //       imageSrc: '/guru.jpg',
// //       title: 'Incense Stick',
// //       originalPrice: 100,
// //       discountedPrice: 80,
// //       description: '10 packets in a bundle',
// //     },
//     // Add more card data as needed
// //   ];

// //   const router = useRouter();

// //   const handleAddToCart = (title: string) => {
// //     router.push(`/product/product-details/${title}`);
// //   }
// const[data, setData]= useState();
// useEffect(() => {
//   const fetchData = async () => {
//     try {
//         const response = 
        
//     } catch (error) {
        
//     }
//   }

  
// }, [])


//   return (
//     <div className="container mx-auto p-4">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {cards.map((card, index) => (
//           <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
//             <Image src={card.imageSrc} alt={card.title} width={500} height={500} className="w-full h-64 object-cover" />
//             <div className="p-4">
//               <h3 className="text-xl font-semibold">{card.title}</h3>
//               <p className="text-gray-500">{card.description}</p>
//               <div className="mt-4 flex items-center">
//                 <span className="text-gray-500 line-through">₹{card.originalPrice}</span>
//                 <span className="text-red-500 ml-2">₹{card.discountedPrice}</span>
//                 <span className="ml-2 text-green-500">(20% off)</span>
//               </div>
//             </div>
//             <div className="p-4">
//               <button className="w-full bg-blue-500 text-white py-2 rounded" onClick={() => handleAddToCart(card.title)}>Add to Bag</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CardGrid;

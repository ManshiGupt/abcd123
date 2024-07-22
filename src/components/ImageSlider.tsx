'use client'
// // import React, { useState } from 'react';
// // import Image from 'next/image';

// // interface Slide {
// //   image: string;
// //   text: string;
// // }

// // const slides: Slide[] = [
// //   { image: '/slide1.jpg', text: 'Pooja ' },
// //   { image: '/slide2.jpeg', text: 'Mantra' },
// //   { image: '/slide3.jpg', text: 'Guru Satsang katha' },
// //   { image: '/images/slide4.jpg', text: 'Pooja smargrih' },
// //   { image: '/images/slide5.jpg', text: 'Panchang' },
// // ];

// // const ImageSlider: React.FC = () => {
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   const goToNextSlide = () => {
// //     setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
// //   };

// //   const goToPrevSlide = () => {
// //     setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
// //   };

// //   return (
// //     <div className="relative w-full">
// //       <div className="relative h-64 md:h-96 lg:h-[36rem] w-full">
// //         {slides.map((slide, index) => (
// //           <div
// //             key={index}
// //             className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
// //           >
// //             <Image src={slide.image} alt={`Slide ${index + 1}`} layout="fill" objectFit="cover" />
// //             <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg md:text-2xl">
// //               {slide.text}
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //       <button
// //         onClick={goToPrevSlide}
// //         className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
// //       >
// //         &lt;
// //       </button>
// //       <button
// //         onClick={goToNextSlide}
// //         className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
// //       >
// //         &gt;
// //       </button>
// //       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
// //         {slides.map((_, index) => (
// //           <div
// //             key={index}
// //             className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
// //             onClick={() => setCurrentIndex(index)}
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ImageSlider;

// import React, { useState } from 'react';
// import Image from 'next/image';

// interface Slide {
//   image: string;
//   text: string;
// }

// const slides: Slide[] = [
//   { image: '/slide1.jpg', text: 'Pooja ' },
//   { image: '/slide2.jpeg', text: 'Mantra' },
//   { image: '/slide3.jpg', text: 'Guru Satsang katha' },
//   { image: '/images/slide4.jpg', text: 'Pooja smargrih' },
//   { image: '/slide5.jpg', text: 'Panchang' },
// ];

// const ImageSlider: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const goToNextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//   };

//   const goToPrevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
//   };

//   return (
//     <div className="relative w-full">
//       <div className="relative h-64 md:h-96 lg:h-[36rem] w-full overflow-hidden">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
//           >
//             <Image src={slide.image} alt={`Slide ${index + 1}`} layout="fill" objectFit="cover" className="animate-zoomIn" />
//             <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg md:text-2xl">
//               {slide.text}
//             </div>
//           </div>
//         ))}
//       </div>
//       <button
//         onClick={goToPrevSlide}
//         className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
//       >
//         &lt;
//       </button>
//       <button
//         onClick={goToNextSlide}
//         className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
//       >
//         &gt;
//       </button>
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {slides.map((_, index) => (
//           <div
//             key={index}
//             className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
//             onClick={() => setCurrentIndex(index)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Slide {
  image: string;
  text: string;
  heading: string;
  url: string,
  butt: string,
}

const slides: Slide[] = [
  { image: '/thaali.jpg',
    url: "/pooja",
    text: 'The religion of the ancient Indo-European-speaking peoples who entered India about 1500 bce from the region of present-day Iran. It takes its name from the collections of sacred texts known as the Vedas. Vedism is the oldest stratum of religious activity in India for which there exist written materials. ', 
    heading:'Pooja',
    butt: 'Book Now' },
  { image: '/Mantra.jpg', 
    url: "/pooja",
    text: 'A mantra is a motivating chant, like the “I think I can, I think I can” you repeat over and over to yourself on the last stretch of every marathon you run. A mantra is usually any repeated word or phrase, but it can also refer more specifically to a word repeated in meditation.',
    heading:'Mantra',
    butt: 'Learn more' },
 
  { image: '/thali.jpg', 
    url: "/Items",
    text: 'Vedic pandit offers a wide range of Pooja/Pujan samagri to make your pooja more auspicious by bringing high quality pujan samagri at your Doorstep.',
    heading:'Pandit',
    butt: 'View profile'  },
  { image: '/Horoscope.jpg', 
    url: "/pooja",
    text: 'A panchanga is a Hindu calendar and almanack that uses standard Hindu timekeeping units and displays important dates and calculations in a tabulated format.',
    heading:'Blog',
    butt: 'Read more' },
];

const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleBookNow = () => {
    window.location.href = slides[currentIndex].url;
  };

  return (
    <div className="relative w-full overflow-hidden pt-20">
      <div className="relative h-[36rem] md:h-96 lg:h-[36rem] w-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image
              src={slide.image}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="animate-zoomIn"
            />
            <div className="absolute inset-0 flex text-justify bg-black bg-opacity-50 text-white px-4 md:px-20 py-32" style={{background: "linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5))"}}>
             <div className='py-4 container md:px-52'> 
              <h1 className="text-3xl md:text-6xl font-bold text-white leading-relaxed mb-3"> {slide.heading}</h1>
              <p className="leading-relaxed text-white mb-3 text-wrap text-left md:pr-60">{slide.text}</p>
              <button className='bg-black rounded-full border-4 border-gray-700 px-5 shadow-lg shadow-gray-500/50 p-3 cursor-pointer' onClick={handleBookNow}>{slide.butt}</button>
            </div>

            </div>
          </div>  
        ))}
      </div>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

// 
// 

// text-lg md:text-2xl

// <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5))' }}></div>
// background: linear-gradient(to left, #333, #333 50%, #eee 75%, #333 75%);
 {/* <button
        onClick={goToPrevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
      >
        &lt;
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
      >
        &gt;
      </button> */}
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const Footer: React.FC = () => {
  return (
    <footer className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 text-left md:text-left">
          <div className="flex title-font font-medium md:items-center md:justify-start px-4 text-white">
            
            <Link href={'/'}>
            <Image src="/aumvec.png" alt="Logo" width={50} height={50} />
            </Link>
            <span className="ml-3 text-xl">Vedic Pandit</span>
          </div>
          <p className="mt-2 text-sm text-gray-500 px-4">Easiest way to book Pandit and delaver Pooja items</p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Book Pandit</h2>
            <nav className="list-none mb-10">
              <li>
                <Link href={''} className="text-gray-400 hover:text-white"> Types of Pandit</Link>
              </li>
              <li>
                <Link href={''} className="text-gray-400 hover:text-white">Popular Pandit</Link>
              </li>
              <li>
                <Link href={''} className="text-gray-400 hover:text-white">Pandit</Link>
              </li>
              <li>
                <Link href={''} className="text-gray-400 hover:text-white">Pandit nearby you</Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Bhajan</h2>
            <nav className="list-none mb-10">
              <li>
                <Link  href={''} className="text-gray-400 hover:text-white" >Blog</Link>
              </li>
              <li>
                <Link href={''} className="text-gray-400 hover:text-white">Sanskar</Link>
              </li>
              <li>
                <Link href={''} className="text-gray-400 hover:text-white">Mantra</Link>
              </li>
              <li>
                <Link href={''} className="text-gray-400 hover:text-white">Spritual thoughts</Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Panchang</h2>
            <nav className="list-none mb-10">
              <li>
                <Link href={''} className="text-gray-400 hover:text-white">Horoscope</Link>
              </li>
              <li>
                <Link href={''} className="text-gray-400 hover:text-white">Bhajan</Link>
              </li>
              <li>
                <Link href={''} className="text-gray-400 hover:text-white">Shorts</Link>
              </li>
              <li>
                <Link href={''} className="text-gray-400 hover:text-white">Pandit</Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Privacy Policy</h2>
            <nav className="list-none mb-10">
              {/* <li>
                <Link href={''} className="text-gray-400 hover:text-white cursor-pointer">Term & Condition</Link>
              </li> */}
              <Link href={'/Privacy'}>Term & Condition</Link>
              <li>
                <Link href={'/shipping'} className="text-gray-400 hover:text-white cursor-pointer">Shipping Policy</Link>
              </li>
              <li>
                <Link href={'/refund'} className="text-gray-400 hover:text-white cursor-pointer">Refund Policy</Link>
              </li>
              <li>
                <Link href={'/return'} className="text-gray-400 hover:text-white cursor-pointer">Return Policy</Link>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 bg-opacity-75">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-400 text-sm text-center sm:text-left">© 2024 Vedic-Pandit
            <Link href={'/'}  rel="noopener noreferrer" className="text-gray-500 ml-1" target="_blank"></Link>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <Link href={''} className="text-gray-400">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </Link>
            <Link href={''} className="ml-3 text-gray-400">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </Link>
            <Link href={''} className="ml-3 text-gray-400">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </Link>
            <Link href={''} className="ml-3 text-gray-400">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

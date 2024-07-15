'use client';
import React from 'react';
import Search from '@/components/Search';
import CardGrid from '@/components/CardGrid';
import SamagrihCat from '@/components/SamagrihCate';
import { useRouter } from 'next/navigation';

const Home: React.FC = () => {
  // const router = useRouter();

  // const handleAddToCart = (productId: string, title: string, name: string, subtitle: string) => {

  //   const url = `/Product/${productId}?title=${encodeURIComponent(title)}&name=${encodeURIComponent(name)}&subtitle=${encodeURIComponent(subtitle)}`;
  //   router.push(url);

  // };

  return (
    <div className="md:pt-40 pt-20">
      <Search />
      <SamagrihCat />
     <CardGrid/>
      {/* <div onClick={() => handleAddToCart('djlfjrujoi3diofj', 'Pooja Samagri', 'Product Name', 'Product Subtitle')} className="cursor-pointer">
        Good
      </div> */}
    </div>
  );
};

export default Home;

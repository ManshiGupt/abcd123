// pages/index.tsx (or any other page)

import React from 'react';
import SearchBar from '@/components/SearchBar';
import Search from '@/components/Search';
import Product from "@/components/Product";

const Home: React.FC = () => {
  return (
    <div className='md:pt-40 pt-20'>
        <Search />
        <Product/>
     
    </div>
  );
};

export default Home;

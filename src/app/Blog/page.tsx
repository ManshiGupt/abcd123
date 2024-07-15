// pages/index.tsx (or any other page)

import React from 'react';
import SearchBar from '@/components/SearchBar';

const Home: React.FC = () => {
  return (
    <div className='mt-14'>
        <SearchBar />
     
    </div>
  );
};

export default Home;

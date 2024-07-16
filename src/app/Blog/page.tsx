// pages/index.tsx (or any other page)

import React from 'react';
import SearchBar from '@/components/SearchBar';
import AllBlog from '@/components/AllBlog';

const Home: React.FC = () => {
  return (
    <div className='mt-14'>
        <SearchBar />
        <AllBlog/>
    </div>
  );
};

export default Home;

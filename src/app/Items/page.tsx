// pages/index.tsx (or any other page)

import React from 'react';
import Search from '@/components/Search';
import CardGrid from '@/components/CardgridItem';
import SamagrihCat from '@/components/SamagrihCate';

const Home: React.FC = () => {
  return (
    <div className='pt-40'>
        <Search />
        <SamagrihCat/>
        <CardGrid />
    </div>
  );
};

export default Home;

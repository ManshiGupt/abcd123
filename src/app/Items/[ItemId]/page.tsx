import Product from '@/components/Product'
import Search from '@/components/Search'
import React from 'react'


const page = () => {
  return (
    <div className="md:pt-40 pt-20" >
         <Search />
        <Product/>

    </div>
  )
}

export default page
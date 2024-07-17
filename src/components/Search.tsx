// components/DharmikGyanBhandar.tsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface SearchResult {
  id: string;
  title: string;
}

const Search: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchAllProducts = async () => {
    try {
      const response = await axios.get('https://vedic-pandit-server.onrender.com/get-product');
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  };

  const handleSearch = async (searchQuery: string) => {
    setIsLoading(true);
    try {
      const allProducts = await fetchAllProducts();
      const filteredResults = allProducts.filter((product: { title: string }) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setResults(filteredResults);
    } catch (error) {
      console.error('Error filtering search results:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (query.length > 2) {
      const delayDebounceFn = setTimeout(() => {
        handleSearch(query);
      }, 300);

      return () => clearTimeout(delayDebounceFn);
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <div className='bg-white'>
      <div className='flex flex-col items-center justify-center py-4'>
        <div className='flex items-center w-full max-w-xl bg-white rounded-full shadow-md p-4'>
          <input
            type='text'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Search for Hawan Samagri'
            className='flex-grow bg-transparent outline-none px-4 text-gray-700'
          />
          <button className='ml-2 text-gray-500'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" id="search">
              <path fill="#000" fillRule="evenodd" d="M14.192 15.606a7 7 0 1 1 1.414-1.414l5.172 5.172a1 1 0 0 1-1.414 1.414l-5.172-5.172ZM15 10a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z" clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
        <div className='flex flex-wrap justify-center mt-4'>
          <span className='text-gray px-4 py-1 m-2'>Popular Search:</span>
          <span className='bg-white text-gray-700 rounded-full px-4 py-1 m-2 shadow-md'>Phalgun Amavasya</span>
          <span className='bg-white text-gray-700 rounded-full px-4 py-1 m-2 shadow-md'>Meena Sankranti</span>
          <span className='bg-white text-gray-700 rounded-full px-4 py-1 m-2 shadow-md'>Janmashtami</span>
        </div>
        <div className='w-full max-w-xl mt-4'>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <ul className='bg-white border border-gray-200 rounded-lg shadow-md'>
              {results.map((result) => (
                <li key={result.id} className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                  {result.title}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;

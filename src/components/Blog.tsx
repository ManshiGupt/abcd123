'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { blogApi } from '@/api/pandit-api';

interface Blog {
  id: string;
  thumbnail: string;
  title: string;
  pageUrl: string;
  category: string;
}

const Blog: React.FC = () => {
  const [data, setData] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await blogApi();
        setData(response.data.slice(0,3));
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className='flex justify-between items-center'>
          <div>
            <h3 className='text-3xl md:text-5xl mb-12 tracking-tighter font-medium'>
              Blogs
            </h3>
          </div>
          <div className='flex items-center mb-12'>
            <Link href="/Blog" className="flex items-center">
              <h3 className="md:text-2xl font-medium title-font text-gray-900 text-right">View more</h3>
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="20" id="arrow" className='ml-2'>
                <path fillRule="evenodd" d="M.366 19.708c.405.39 1.06.39 1.464 0l8.563-8.264a1.95 1.95 0 0 0 0-2.827L1.768.292A1.063 1.063 0 0 0 .314.282a.976.976 0 0 0-.011 1.425l7.894 7.617a.975.975 0 0 1 0 1.414L.366 18.295a.974.974 0 0 0 0 1.413"></path>
              </svg>
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap -m-4 shadow-lg">
          {data.map((blog) => (
            <div key={blog.id} className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div className="lg:h-48 md:h-36 w-full relative">
                  <Image
                    src={blog.thumbnail}
                    alt={blog.title}
                    layout="fill"
                    objectFit="cover"
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-6 bg-gray-200">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{blog.category}</h2>
                  <h1 className="title-font text-lg font-medium text-gray-950 mb-3">{blog.title}</h1>
                  <div className="flex items-center flex-wrap">
                    {blog.pageUrl ? (
                      <Link href={blog.pageUrl} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                        Learn More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </Link>
                    ) : (
                      <span className="text-gray-500 inline-flex items-center md:mb-2 lg:mb-0">
                        
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

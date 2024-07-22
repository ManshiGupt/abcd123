'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { blogApi } from '@/api/pandit-api';

interface Blog {
  _id: string,
  thumbnail: string,
  title: string,
  pageUrl: string,
  category: string,
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
    <section className=" body-font">
      <div className="container px-5 py-24 mx-auto">
      <h2 className="text-gray md:text-5xl text-2xl tracking-tighter font-medium leading-10 px-4">Blogs</h2>
      <div className="flex justify-between items-center mb-10 px-4">
        <p className="text-gray-600">To know all about Vedic</p>
        <Link href="/pandit" className="text-black">
          View All &gt;
        </Link>
      </div>

        <div className="flex flex-wrap -m-4 shadow-lg">
          {data.map((blog) => (
            <div key={blog._id} className="p-4 h-[425px] md:w-1/3">
              <div className="h-full border-opacity-60 rounded-lg overflow-hidden">
                <div className="w-full relative rounded-lg">
                  <img
                    src={blog.thumbnail}
                    alt={blog.title}
                    className="object-center object-fill"
                  />
                    <div className="p-6 bg-gray-200 ">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

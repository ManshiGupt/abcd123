'use client';
import React from 'react';
import { useParams, useSearchParams } from 'next/navigation';

const ProductDetails: React.FC = () => {
  const { productId } = useParams();
  const searchParams = useSearchParams();

  const title = searchParams.get('title');
  const name = searchParams.get('name');
  const subtitle = searchParams.get('subtitle');

  return (
    <div style={{ padding: 50, fontSize: 50, marginTop: 100 }}>
      <h1>ProductDetails - {productId}</h1>
      <p>Title: {title}</p>
      <p>Name: {name}</p>
      <p>Subtitle: {subtitle}</p>
    </div>
  );
};

export default ProductDetails;

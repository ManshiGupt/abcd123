
'use client'
import React, { useEffect } from 'react';
import CardComponent from '../components/CardComponent';

const CardContainer: React.FC = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.card-container');

    cards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        card.classList.add('paused');
      });

      card.addEventListener('mouseleave', () => {
        card.classList.remove('paused');
      });
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener('mouseenter', () => {
          card.classList.add('paused');
        });

        card.removeEventListener('mouseleave', () => {
          card.classList.remove('paused');
        });
      });
    };
  }, []);

  const cards = [
    {
      image: '/card2.jpeg',
      title: 'For Any Pooja',
      subtitle: 'This is the Pooja',
    },
    {
      image: '/card2.jpeg',
      title: 'For Any Problems',
      subtitle: 'This is the Solution',
    },
    {
      image: '/card3.jpeg',
      title: 'For Ease',
      subtitle: 'This is the Simple',
    },
  ];

  return (
    <div className="card-container-wrapper p-4">
      <h2 className="text-2xl font-bold mb-4 text-center"></h2>
      <h1 className="text-3xl md:text-5xl mb-12 tracking-tighter font-medium text-left md:text-center">Upcoming Poojas</h1>
      <div className="card-list flex flex-col lg:flex-row lg:justify-between lg:flex-wrap">
        {cards.map((card, index) => (
          <CardComponent
            key={index}
            image={card.image}
            title={card.title}
            subtitle={card.subtitle}
          />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;

"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function TestimonialsSection() {
  return (
    
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      {/* <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center"></h1> */}
      <h2 className='text-black text-3xl md:text-5xl md:mb-12 tracking-tighter font-medium text-left md:text-center leading-10 px-4'>What Devotees say about Vedic Pandit?</h2>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="fast"
        className="w-full"
       
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Baba Ram Dev",
    image: "/face.png",
    rating: 4,
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "Neem Karauli Baba",
    image: "/face.png",
    rating: 5,
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Sanatana Goswami ",
    image: "/face.png",
    rating: 5,
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Ram Raheem",
    image: "/face.png",
    rating: 4,
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    image: "/face.png",
    rating: 5,
  },
];


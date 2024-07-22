import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Pooja", "Pandit", "Bhagwat Geeeta", "Samagrih"];

  return (
    <div className="h-[10rem] flex justify-center items-center px-4 py-40">
      <div className="md:flex text-4xl md:text-5xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Have
        <FlipWords words={words} /> 
        Just by one click
      </div>
    </div>
  );
}

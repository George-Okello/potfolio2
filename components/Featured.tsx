"use client";
import React from "react";
import { FocusCards } from "./ui/focus-cards";

const Featured = () => {
  const cards = [
    {
      title: "Mozilla Grant",
      src: "https://media.bizj.us/view/img/11580964/mozillamountainview01*1200xx6720-3780-0-321.jpg",
      link: "https://example.com/ai-agriculture",
    },
    {
      title: "Innovate Africa Winner(2024-2025)",
      src: "https://images.squarespace-cdn.com/content/v1/6599c68de792820c84a54be8/34e74bd3-1e38-497b-9291-9151508d5f94/Innovate+Africa+Challenge+.jpg",
      link: "https://example.com/climate-impact",
    },
    {
      title: "Strathmore University(@Ilab Africa)",
      src: "https://cdn.tuko.co.ke/images/1120/0fgjhs1soj9sdtfvu.jpeg?v=1",
    },
  ];
  return (
    <div className="py-20 w-full " id="featured">
      <h1 className="heading text-4xl md:text-6xl font-extrabold text-center bg-gradient-to-r from-green-400 via-green-300 to-green-500 text-transparent bg-clip-text drop-shadow-2xl animate-fade-in mb-16 md:mb-24 tracking-wide">
        Featu
        <span className="text-white animate-bounce inline-block">red</span>
        <span className="text-green-300 drop-shadow-lg"> Articles</span>
      </h1>

      <FocusCards cards={cards} />

    </div>
  );
};

export default Featured;

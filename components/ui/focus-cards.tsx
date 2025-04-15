"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: { title: string; src: string; link?: string }; // 'link' is optional
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => {
    const content = (
      <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden aspect-[4/6] w-full max-w-[800px] transition-all duration-300 ease-out", // Increased aspect ratio to 4/6
          hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
        )}
      >
        <Image
          src={card.src}
          alt={card.title}
          fill
          className="object-cover absolute inset-0"
        />
        <div
          className={cn(
            "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
            hovered === index ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
            {card.title}
          </div>
        </div>
      </div>
    );

    return card.link ? (
      <Link href={card.link} target="_blank" rel="noopener noreferrer">
        {content}
      </Link>
    ) : (
      content
    );
  }
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
  link?: string; // 'link' is now optional
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}

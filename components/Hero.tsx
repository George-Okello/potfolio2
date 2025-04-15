"use client";
import React from "react";
import { TextHoverEffect } from "./ui/text-hover-effect";
import { LampContainer } from "./ui/lamp";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="h-[75rem] flex items-center justify-center">
        <div className="relative w-full max-w-7xl">
          {/* Image positioned absolutely */}
          <div
            className="absolute inset-0 flex items-center justify-center opacity-75"
            style={{ zIndex: 0 }}
          >
            <Image
              src="/IMG_0916(3).png"
              alt="Avatar"
              width={720}
              height={1080}
              className="object-contain"
              priority
            />
          </div>

          {/* Text positioned on top with higher z-index */}
          <div className="relative" style={{ zIndex: 3 }}>
            <TextHoverEffect text="GEORGE OKELLO" />
          </div>
        </div>
      </div>
      <div className="w-full">
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-green-300 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            Illuminate
            <br />
            Your Data
          </motion.h1>
        </LampContainer>
      </div>
    </>
  );
};

export default Hero;

"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../ui/slider";

export default function Hero() {
  const images = [
    "https://images.unsplash.com/photo-1637228393246-c38a4b3d2011?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1671198905435-20f8d166efb2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1731938155665-f78f0c729af0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <ImagesSlider className="h-[36rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-2xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-richGold to-burgundy py-4">
        Your Prime Destination for <br /> Perfect Picks!        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-burgundy/60 border-burgundy/20 text-pearl mx-auto text-center rounded-full relative mt-4">
          <span>View More →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-richGold-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}

"use client"

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import Link from "next/link";

function Hero() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
    <div
    className="h-auto md:h-[40rem] w-full rounded-md flex flex-col md:flex-row items-center justify-center relative overflow-hidden mx-auto py-10 " >
      <div className="p-4 relative z-10 w-full text-center">
        <h1 
        className="mt-20 md:mt-0 text-4xl md:text-5xl font-bold bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400">Maximize Performance and Minimize Costs with IoT Solutions</h1>
        <p
        className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">From streamlining operations for businesses to enhancing daily life for individuals and fostering innovation in educational institutions, our tailored IoT solutions are revolutionizing connectivity and efficiency across all sectors.</p>
        <div className="mt-4">
            <Link href={"/shop"}>Explore Products</Link>
        </div>
      </div>
    </div>
    </motion.div>
    </AuroraBackground>
  );
}

export default Hero;

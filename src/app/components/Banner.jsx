"use client";
import Image from "next/image";
import React from "react";
import { motion as m } from "framer-motion";

const Banner = () => {
  return (
    <div className="justify-center items-center m-12 gap-28 md:flex md:justify-between ">
      <span className="text-slate-400 text-2xl  md:text-4xl">
        Explore the world's wonders: Discover Country Info and Culture at your
        Fingertips
      </span>
      <m.div
        initial={{ x: 100 }}
        whileInView={{ x: 0 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        <Image
          src="/world.svg"
          width={400}
          height={400}
          alt="world map"
          className="opacity-60 translate-y-8"
        />
      </m.div>
    </div>
  );
};

export default Banner;


"use client";
import React from 'react'

import { useEffect, useState } from "react";
// import { useTheme } from "next-themes";

import Particles from "@/components/ui/particles";

export default function ParticlesDemo() {
  // const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  // useEffect(() => {
  //     setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  // }, [resolvedTheme]);

  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <img className="w-full h-auto" src="/images/image-17.jpeg" alt="Demo Image" />

      {/* <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
      </span> */}
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={"#fffff"}
        refresh
      />
    </div>
  );
}

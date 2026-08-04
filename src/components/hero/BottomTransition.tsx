import React from "react";

export const BottomTransition: React.FC = () => {
  return (
    <div className="relative w-full h-96 mt-[-100px]">
      {/* Background Image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt="Lawyer Portrait Background"
        className="w-full h-full object-cover"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_1YRkkxwkAr8wwymepRBj94K9EXt3jWWQKFwJiqKgatekRHc2T7tX6QEMtRxNVUey7JBGbpwD81XeW9vSuAyoysEYCISlPta48da8nOlnl8jheQ7qX_Rsnq6twNY-1DKB_ysy2ZCjwoid3R1lHo962vc_LWproDA0gww5_clIEk4W7duQwjdH8iB9NWe0Xda9IJoaWyR_4jYhfPYx2iu1UgHl56s9ZrlAeYo_jat-U1_r64BMSms"
      />
      {/* Curved Top Overlay */}
      <div className="absolute top-[-2px] left-0 right-0 w-full overflow-hidden leading-none z-20">
        <svg
          className="w-full h-auto text-[#FAF6F0] fill-current preserve-3d"
          viewBox="0 0 1440 120"
        >
          <path d="M0,0 L1440,0 L1440,60 Q720,120 0,60 Z"></path>
        </svg>
      </div>
      {/* Scroll Down Circle */}
      <div className="absolute top-[-60px] left-1/2 transform -translate-x-1/2 z-30">
        <div className="w-32 h-32 rounded-full border-2 border-white/20 bg-[#9C7A58]/80 backdrop-blur-md flex items-center justify-center relative">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            ></path>
          </svg>
          {/* Circular Text SVG */}
          <svg
            className="absolute inset-0 w-full h-full animate-spin-slow"
            viewBox="0 0 100 100"
          >
            <path
              d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
              fill="transparent"
              id="curve"
            ></path>
            <text
              className="text-[0.6rem] tracking-[0.2em] uppercase font-sans"
              fill="white"
            >
              <textPath href="#curve" startOffset="0%">
                Scroll Down — Scroll Down —
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};

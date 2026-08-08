import React from "react";

export const BottomTransition: React.FC = () => {
  return (
    <div className="relative w-full z-20 mb-24 transition-bg">
      <div className="relative h-28">
        <div className="absolute inset-x-0 bottom-0 h-px bg-black" />
        <div className="absolute left-1/2 bottom-[-64px] -translate-x-1/2 z-30">
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
                  Scroll Down â€” Scroll Down â€”
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>

      <div className="relative h-[220px] sm:h-[280px] md:h-96 transition-bg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="Lawyer Portrait Background"
          className="absolute inset-0 w-full h-full object-contain md:object-cover md:object-[center_35%] pointer-events-none transition-bg"
          src="/sizelatest.png"
        />
      </div>
    </div>
  );
};

import React from "react";
import { AwardModel } from "@/models/domain";

interface AwardBadgeProps {
  award: AwardModel;
}

export const AwardBadge: React.FC<AwardBadgeProps> = ({ award }) => {
  return (
    <div className="flex items-center gap-2">
      {/* Laurel Left */}
      <svg
        fill="currentColor"
        height="40"
        viewBox="0 0 24 40"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 1C10 5 2 15 2 25C2 30 5 35 10 38"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        ></path>
      </svg>
      <div className="text-center text-[0.65rem] font-medium tracking-wide uppercase">
        <div className="flex justify-center gap-1 text-xs mb-1">
          {Array.from({ length: award.stars }).map((_, i) => (
            <span key={i}>★</span>
          ))}
        </div>
        {award.title}
        {award.year && (
          <>
            <br />
            {award.year}
          </>
        )}
      </div>
      {/* Laurel Right */}
      <svg
        fill="currentColor"
        height="40"
        viewBox="0 0 24 40"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 1C14 5 22 15 22 25C22 30 19 35 14 38"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        ></path>
      </svg>
    </div>
  );
};

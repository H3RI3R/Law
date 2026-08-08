import React from "react";
import { StatModel } from "@/models/domain";

interface StatsSectionProps {
  stats: StatModel[];
}

export const StatsSection: React.FC<StatsSectionProps> = ({ stats }) => {
  return (
    <div className="w-full max-w-5xl mx-auto flex flex-wrap justify-between border-t border-[#9C7A58]/20 pt-10 px-4 mb-32 relative z-10">
      {stats.map((stat, idx) => {
        const isLast = idx === stats.length - 1;
        const isThird = idx === 2;
        return (
          <div
            key={stat.id}
            className={`w-1/2 md:w-1/4 text-center md:text-left mb-8 md:mb-0 ${
              !isLast ? "md:border-r border-[#9C7A58]/20 md:pr-4" : ""
            } ${idx > 0 ? "md:pl-8" : ""}`}
          >
            <div
              className={`text-4xl md:text-5xl font-light mb-2 ${
                isThird ? "text-[#9C7A58]" : "text-[#3A3A3A]"
              }`}
            >
              {stat.value}
            </div>
            <div className="text-xs md:text-sm text-[#6B6B6B] uppercase tracking-wider">
              {stat.label}
            </div>
          </div>
        );
      })}
    </div>
  );
};

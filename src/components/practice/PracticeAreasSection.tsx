"use client";

import React, { useState } from "react";
import { PracticeAreaModel } from "@/models/domain";

interface PracticeAreasProps {
  practiceAreas: PracticeAreaModel[];
  onSelectArea?: (area: PracticeAreaModel) => void;
}

export const PracticeAreasSection: React.FC<PracticeAreasProps> = ({
  practiceAreas,
}) => {
  const [activeAreaSlug, setActiveAreaSlug] = useState<string>(
    practiceAreas[0]?.slug || "indirect-tax"
  );

  const selectedArea =
    practiceAreas.find((a) => a.slug === activeAreaSlug) || practiceAreas[0];

  return (
    <section id="practice-areas" className="practice-section py-20 px-4 max-w-7xl mx-auto border-t border-[#9C7A58]/20 bg-[#FAF6F0]">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-[#9C7A58] text-xs uppercase tracking-widest font-semibold">
          Core Expertise
        </span>
        <h2 className="font-serif text-4xl md:text-5xl text-[#9C7A58] mt-2 mb-4 font-semibold">
          PRACTICE AREAS
        </h2>
        <p className="dark-copy text-[#6B6B6B] text-sm md:text-base leading-relaxed">
          Deep technical legal precision combined with strategic foresight across Litigation, Tax, Economic Offences &amp; Regulatory Forums.
        </p>
      </div>

      {/* Tabs / Navigation */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {practiceAreas.map((area) => {
          const isActive = area.slug === activeAreaSlug;
          return (
            <button
              key={area.id}
              onClick={() => setActiveAreaSlug(area.slug)}
              className={`px-5 py-2.5 text-xs md:text-sm font-medium rounded-xl transition-all cursor-pointer ${
                isActive
                  ? "bg-[#9C7A58] text-white shadow-md"
                  : "bg-white border border-[#9C7A58]/30 text-[#3A3A3A] hover:border-[#9C7A58] hover:text-[#9C7A58]"
              }`}
            >
              {area.title}
            </button>
          );
        })}
      </div>

      {/* Active Area Detailed View */}
      {selectedArea && (
        <div className="practice-panel bg-white border border-[#9C7A58]/20 p-6 md:p-10 rounded-2xl shadow-sm">
          <div className="border-b border-[#9C7A58]/20 pb-6 mb-8">
            <h3 className="font-serif text-2xl md:text-3xl text-[#9C7A58] font-bold mb-2">
              {selectedArea.title}
            </h3>
            <p className="text-xs uppercase tracking-widest text-[#B58B66] font-semibold mb-4">
              {selectedArea.subtitle}
            </p>
            <p className="dark-copy text-[#3A3A3A] text-sm md:text-base leading-relaxed">
              {selectedArea.detailedProfile.intro}
            </p>
          </div>

          {/* Service Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {selectedArea.detailedProfile.services.map((cat, idx) => (
              <div key={idx} className="practice-card h-full flex flex-col bg-[#FAF6F0]/50 p-6 rounded-2xl border border-[#9C7A58]/10">
                <h4 className="font-serif text-lg text-[#9C7A58] font-bold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B58B66] inline-block"></span>
                  {cat.category}
                </h4>
                <ul className="space-y-2.5 text-xs md:text-sm dark-copy text-[#6B6B6B] flex-1">
                  {cat.items.map((item, iIndex) => (
                    <li key={iIndex} className="flex items-start gap-2">
                      <span className="text-[#9C7A58] font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

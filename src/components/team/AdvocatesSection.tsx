"use client";

import React, { useState } from "react";
import { AdvocateModel } from "@/models/domain";

interface AdvocatesSectionProps {
  advocates: AdvocateModel[];
  onOpenConsultation: () => void;
}

export const AdvocatesSection: React.FC<AdvocatesSectionProps> = ({
  advocates,
  onOpenConsultation,
}) => {
  const [selectedAdvocate, setSelectedAdvocate] = useState<AdvocateModel | null>(
    advocates[0] || null
  );

  return (
    <section id="advocates" className="py-20 px-4 max-w-7xl mx-auto border-t border-[#9C7A58]/20 bg-[#FAF6F0]">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-[#9C7A58] text-xs uppercase tracking-widest font-semibold">
          Legal Minds &amp; Courtroom Advocates
        </span>
        <h2 className="font-serif text-4xl md:text-5xl text-[#9C7A58] mt-2 mb-4 font-semibold">
          OUR LEGAL TEAM
        </h2>
        <p className="text-[#6B6B6B] text-sm md:text-base leading-relaxed">
          Lawyers with decades of combined courtroom experience before the Supreme Court of India, High Courts, NCLT, CESTAT, and Special Economic Courts.
        </p>
      </div>

      {/* Grid of Advocates */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {advocates.map((adv) => {
          const isSelected = selectedAdvocate?.id === adv.id;
          return (
            <div
              key={adv.id}
              onClick={() => setSelectedAdvocate(adv)}
              className={`p-6 rounded-sm border transition-all cursor-pointer bg-white ${
                isSelected
                  ? "border-[#9C7A58] ring-1 ring-[#9C7A58] shadow-md"
                  : "border-[#9C7A58]/20 hover:border-[#9C7A58]/60"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-serif text-xl font-bold text-[#3A3A3A]">
                  {adv.name}
                </h3>
                {adv.isFoundingPartner && (
                  <span className="bg-[#B58B66]/20 text-[#9C7A58] text-[0.65rem] font-bold uppercase px-2 py-0.5 rounded-xs">
                    Lead Counsel
                  </span>
                )}
              </div>
              <p className="text-xs text-[#9C7A58] font-semibold mb-2">
                {adv.designation} • {adv.qualifications}
              </p>
              <p className="text-xs text-[#6B6B6B] line-clamp-3 mb-4 leading-relaxed">
                {adv.bio}
              </p>
              <div className="flex flex-wrap gap-1">
                {adv.specializations.slice(0, 2).map((spec, i) => (
                  <span
                    key={i}
                    className="text-[0.65rem] bg-[#FAF6F0] text-[#3A3A3A] px-2 py-0.5 rounded-xs border border-[#9C7A58]/10"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Detailed Modal or Card for Selected Advocate */}
      {selectedAdvocate && (
        <div className="bg-white border border-[#9C7A58]/30 p-8 rounded-sm shadow-sm relative">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-[#9C7A58]/20 pb-4 mb-6">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl text-[#9C7A58] font-bold">
                {selectedAdvocate.name}
              </h3>
              <p className="text-sm text-[#B58B66] font-medium">
                {selectedAdvocate.designation} | {selectedAdvocate.qualifications}
              </p>
            </div>
            <button
              onClick={onOpenConsultation}
              className="mt-4 md:mt-0 bg-[#B58B66] hover:bg-[#9C7A58] text-white px-6 py-2.5 rounded-sm text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-2"
            >
              Consult With Advocate
              <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="14">
                <path d="M7 17l9.2-9.2M17 17V7H7"></path>
              </svg>
            </button>
          </div>

          <p className="text-[#3A3A3A] text-sm md:text-base leading-relaxed mb-6">
            {selectedAdvocate.bio}
          </p>

          {selectedAdvocate.notableClients && selectedAdvocate.notableClients.length > 0 && (
            <div className="mt-6 pt-4 border-t border-[#9C7A58]/10">
              <h4 className="text-xs uppercase tracking-widest text-[#9C7A58] font-bold mb-3">
                Key Representations &amp; Client Matters:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedAdvocate.notableClients.map((client, idx) => (
                  <span
                    key={idx}
                    className="bg-[#FAF6F0] text-[#3A3A3A] text-xs font-medium px-3 py-1 rounded-sm border border-[#9C7A58]/20"
                  >
                    {client}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

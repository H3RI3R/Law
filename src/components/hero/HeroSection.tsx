"use client";

import React from "react";
import { AwardModel, StatModel } from "@/models/domain";
import { AwardBadge } from "./AwardBadge";
import { StatsSection } from "../stats/StatsSection";

interface HeroSectionProps {
  awards: AwardModel[];
  stats: StatModel[];
  onOpenConsultation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  awards,
  stats,
  onOpenConsultation,
}) => {
  return (
    <main className="pt-32 pb-20 px-4 max-w-7xl mx-auto relative z-10 flex flex-col items-center">
      {/* Headline & Subtext */}
      <div className="text-center max-w-4xl mx-auto mb-12 mt-10">
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-[#9C7A58] leading-tight mb-6 uppercase">
          YOUR LEGAL PARTNER IN<br />EVERY SITUATION
        </h1>
        <p className="text-[#6B6B6B] text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          From Complex Disputes To Everyday Legal Matters, We Deliver Strategic Solutions With A Client First Approach. We Stand By You To Protect What Matters Most.
        </p>
        <div className="mt-8">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 bg-[#B58B66] hover:bg-[#9C7A58] text-white px-8 py-3.5 rounded-sm text-sm font-medium transition-colors cursor-pointer"
          >
            Book a Free Consultation
            <svg
              fill="none"
              height="16"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 17l9.2-9.2M17 17V7H7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Central Image & Social Proof */}
      <div className="relative w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between mb-24 min-h-[500px]">
        {/* Watermark Background */}
        <div className="watermark-text uppercase">LAWYER</div>

        {/* Left Text */}
        <div className="md:w-1/4 text-sm text-[#6B6B6B] text-left relative z-10 pl-4 md:pl-0 mt-8 md:mt-0 order-2 md:order-1">
          Our legal team brings <strong className="text-[#9C7A58]">30+ years</strong> of combined expertise, having represented clients in over <strong className="text-[#9C7A58]">12,000</strong> Criminal matters.
        </div>

        {/* Center Statue Image */}
        <div className="relative z-20 w-full md:w-1/2 flex justify-center order-1 md:order-2">
          <div className="border border-[#9C7A58]/20 p-2 pb-0 relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Lady Justice Statue"
              className="max-h-[600px] object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6Y5IHH1YAZUI_HDTAERa5q0YBpTFh7COV-rqxrEvLt1S5cH-WfINru6LP-ezOIO06beiyaQliJORM9WsnbhJS84ljQsgRS2FSP6B4O64JhDSAaprsw6mvQZ54BHVARZrYMgGajG_8IlMhczxFkwCToNEk7kcf2LXOEDvhWQ_pyTsda3aa9qIDOQhysugarBbJ2zoHIFLMvHXpn4m6bFBOoeF8Po2F_J-M0d1MwyJT9iSgDLZUuQEUcNilCGUduopN"
            />
            {/* Fade effect at bottom of image */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAF6F0] to-transparent"></div>
          </div>
        </div>

        {/* Right Awards */}
        <div className="md:w-1/4 flex flex-col gap-6 items-center justify-center relative z-10 mt-8 md:mt-0 order-3 text-[#9C7A58]">
          {awards.map((award) => (
            <AwardBadge key={award.id} award={award} />
          ))}
        </div>
      </div>

      {/* Description Block */}
      <div className="max-w-4xl mx-auto text-center mb-24 px-4">
        <h2 className="font-sans text-3xl md:text-4xl text-[#6B6B6B] font-light leading-relaxed">
          At LexCore, We Deliver Smart Legal Solutions Through Expertise, Precision, And A Client <span className="text-[#9C7A58] font-medium">Focused Mindset. Backed By Integrity And Results, We Support</span> You Every Step Of The Way.
        </h2>
      </div>

      {/* Stats Section */}
      <StatsSection stats={stats} />
    </main>
  );
};

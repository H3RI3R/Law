"use client";

import React from "react";
import { NavItemModel } from "@/models/domain";

interface HeaderProps {
  navItems: NavItemModel[];
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ navItems, onOpenConsultation }) => {
  return (
    <header className="w-full py-6 px-8 lg:px-16 flex justify-between items-center fixed top-0 left-0 right-0 z-50 bg-[#FAF6F0]/90 backdrop-blur-sm">
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="text-[#9C7A58] font-serif text-3xl font-bold flex items-center leading-none">
          <span className="text-4xl mr-1">A</span>
          <div className="flex flex-col">
            <span>Aprajita</span>
            <span className="text-lg">Legal</span>
          </div>
        </div>
        <div className="text-[#9C7A58] text-[0.5rem] uppercase tracking-widest font-semibold border-l border-[#9C7A58] pl-2 ml-1 leading-tight">
          Advocates<br />&amp; Solicitors
        </div>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex gap-8 text-[#6B6B6B] text-sm font-medium">
        {navItems.map((item) =>
          item.active ? (
            <a
              key={item.label}
              className="flex items-center gap-1 text-[#9C7A58]"
              href={item.href}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#9C7A58] inline-block"></span>{" "}
              {item.label}
            </a>
          ) : (
            <a
              key={item.label}
              className="hover:text-[#9C7A58] transition-colors"
              href={item.href}
            >
              {item.label}
            </a>
          )
        )}
      </nav>

      {/* CTA */}
      <button
        onClick={onOpenConsultation}
        className="bg-[#B58B66] hover:bg-[#9C7A58] text-white px-6 py-2.5 rounded-sm text-sm font-medium transition-colors flex items-center gap-2 cursor-pointer"
      >
        Contact Us
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
    </header>
  );
};

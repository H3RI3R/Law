"use client";

import React, { useState, useRef, useEffect } from "react";

export interface CustomSelectOption {
  label: string;
  value: string;
}

interface CustomSelectProps {
  options: CustomSelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value) || options[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="select-trigger w-full px-4 py-3 rounded-xl border border-[#9C7A58]/30 hover:border-[#9C7A58]/60 bg-white text-[#3A3A3A] font-medium text-sm text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[#9C7A58]/20 focus:border-[#9C7A58] transition-all cursor-pointer shadow-xs"
      >
        <span className="truncate">{selectedOption ? selectedOption.label : placeholder}</span>
        <svg
          className={`h-4 w-4 text-[#9C7A58] transition-transform duration-200 shrink-0 ml-2 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu Popup */}
      {isOpen && (
        <div className="custom-select-menu absolute top-full left-0 right-0 mt-2 z-50 bg-white border border-[#9C7A58]/30 rounded-xl shadow-xl py-1">
          {options.map((opt) => {
            const isSelected = opt.value === value;
            return (
              <div
                key={opt.value}
                onClick={() => {
                  onChange(opt.value);
                  setIsOpen(false);
                }}
                className={`custom-select-item px-4 py-2.5 text-sm cursor-pointer transition-colors flex items-center justify-between ${
                  isSelected
                    ? "bg-[#FAF6F0] text-[#9C7A58] font-semibold"
                    : "text-[#3A3A3A] hover:bg-[#FAF6F0] hover:text-[#9C7A58]"
                }`}
              >
                <span>{opt.label}</span>
                {isSelected && (
                  <svg className="w-4 h-4 text-[#9C7A58]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

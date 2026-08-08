"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavItemModel } from "@/models/domain";

interface HeaderProps {
  navItems: NavItemModel[];
  onOpenConsultation: () => void;
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ navItems, onOpenConsultation, theme, onToggleTheme }) => {
  const pathname = usePathname();

  return (
    <header className="w-full py-4 px-8 lg:px-16 flex justify-between items-center fixed top-0 left-0 right-0 z-50 bg-[#FAF6F0]/90 backdrop-blur-sm">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 cursor-pointer py-1">
        <Image
          src="/logo.png"
          alt="Aprajita Legal Logo"
          width={280}
          height={90}
          className="h-14 md:h-20 lg:h-22 w-auto object-contain transition-transform hover:scale-105"
          priority
        />
      </Link>

      {/* Navigation */}
      <nav className="hidden md:flex gap-8 text-[#6B6B6B] text-sm font-medium">
        {navItems.map((item) =>
          pathname === item.href ? (
            <Link
              key={item.label}
              className="flex items-center gap-1 text-[#9C7A58]"
              href={item.href}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#9C7A58] inline-block"></span>{" "}
              {item.label}
            </Link>
          ) : (
            <Link
              key={item.label}
              className="hover:text-[#9C7A58] transition-colors"
              href={item.href}
            >
              {item.label}
            </Link>
          )
        )}
      </nav>

      <div className="flex items-center gap-3">
        <button
          onClick={onToggleTheme}
        className="h-11 w-11 rounded-xl border border-[#9C7A58]/20 bg-white/70 flex items-center justify-center text-[#9C7A58] hover:bg-[#9C7A58] hover:text-white transition-colors cursor-pointer"
          aria-label="Toggle dark mode"
        >
          {theme === "dark" ? (
            <svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18">
              <path d="M21 12.79A9 9 0 1111.21 3c0 .34.01.67.05 1A7 7 0 1020 11.74c.3.34.55.68 1 1.05z"></path>
            </svg>
          ) : (
            <svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18">
              <circle cx="12" cy="12" r="5"></circle>
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
            </svg>
          )}
        </button>

        <button
          onClick={onOpenConsultation}
          className="bg-[#B58B66] hover:bg-[#9C7A58] text-white px-6 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center gap-2 cursor-pointer"
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
      </div>
    </header>
  );
};

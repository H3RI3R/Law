"use client";

import React from "react";

interface ContactSectionProps {
  onOpenConsultation: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenConsultation,
}) => {
  return (
    <footer id="contact" className="bg-[#3A3A3A] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-[#B58B66] font-serif text-3xl font-bold flex items-center leading-none mb-4">
            <span className="text-4xl mr-1">A</span>
            <div className="flex flex-col">
              <span>Aprajita</span>
              <span className="text-lg">Legal</span>
            </div>
            <div className="text-white/80 text-[0.55rem] uppercase tracking-widest font-semibold border-l border-[#B58B66] pl-2 ml-3 leading-tight">
              Advocates &amp; Solicitors
            </div>
          </div>
          <p className="text-white/70 text-sm max-w-md leading-relaxed mb-6">
            Boutique legal practice based in New Delhi providing strategic litigation, tax advisory, arbitration, and economic offences defense across India.
          </p>

          <div className="space-y-3 text-xs md:text-sm text-white/90">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[#B58B66] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>
                <strong>Address:</strong> B-28, LGF, B-Block, Lajpat Nagar-III, New Delhi- 110024
              </span>
            </div>

            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-[#B58B66] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 me 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>
                <strong>Mobile:</strong> +91-8585988102
              </span>
            </div>

            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-[#B58B66] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>
                <strong>Email:</strong> pclegaladvisor@gmail.com
              </span>
            </div>
          </div>
        </div>

        {/* CTA Card */}
        <div className="bg-white/5 border border-white/10 p-8 rounded-sm text-center">
          <h3 className="font-serif text-2xl font-bold text-white mb-2">
            Schedule a Confidential Legal Consultation
          </h3>
          <p className="text-white/70 text-xs md:text-sm mb-6">
            Get immediate strategic clarity on your tax, corporate, or litigation matters from senior advocate team.
          </p>
          <button
            onClick={onOpenConsultation}
            className="w-full bg-[#B58B66] hover:bg-[#9C7A58] text-white py-3.5 rounded-sm text-sm font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            Request Case Evaluation
            <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16">
              <path d="M7 17l9.2-9.2M17 17V7H7"></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 mt-12 pt-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Aprajita Legal Advocates &amp; Solicitors. All Rights Reserved. Confidential &amp; Privileged Legal Practice.
      </div>
    </footer>
  );
};

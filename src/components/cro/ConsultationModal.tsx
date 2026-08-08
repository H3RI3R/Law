"use useState";
"use client";

import React, { useState } from "react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity">
      <div 
        className="bg-[#FAF6F0] border border-[#9C7A58]/30 w-full max-w-lg rounded-sm shadow-2xl p-6 md:p-8 relative animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#6B6B6B] hover:text-[#3A3A3A] text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/5"
          aria-label="Close modal"
        >
          ✕
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-[#B58B66]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#9C7A58]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#9C7A58] mb-2">Consultation Scheduled!</h3>
            <p className="text-[#6B6B6B] text-sm mb-6">
              Thank you for reaching out. Senior Advocate team at Aprajita Legal will contact you within 2 business hours.
            </p>
            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="bg-[#B58B66] hover:bg-[#9C7A58] text-white px-6 py-2.5 rounded-sm text-sm font-medium transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <div className="text-xs uppercase tracking-widest text-[#9C7A58] font-bold mb-1">
                CRO Strategic Lead Intake
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#3A3A3A]">
                Book Free Confidential Case Evaluation
              </h2>
              <p className="text-[#6B6B6B] text-xs md:text-sm mt-1">
                Protect your legal interests immediately. 100% Client Confidentiality Guaranteed.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase text-[#3A3A3A] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Adv. R. Sharma"
                  className="w-full px-3.5 py-2.5 bg-white border border-[#9C7A58]/30 rounded-sm text-sm focus:outline-none focus:border-[#9C7A58]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-[#3A3A3A] mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 bg-white border border-[#9C7A58]/30 rounded-sm text-sm focus:outline-none focus:border-[#9C7A58]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-[#3A3A3A] mb-1">
                    Legal Category
                  </label>
                  <div className="relative">
                    <select className="w-full appearance-none px-3.5 py-2.5 pr-10 bg-white border border-[#9C7A58]/30 hover:border-[#9C7A58]/60 rounded-xl text-sm font-medium focus:outline-none focus:border-[#9C7A58] focus:ring-2 focus:ring-[#9C7A58]/20 cursor-pointer text-[#3A3A3A] transition-all">
                      <option>Criminal Defense</option>
                      <option>Civil Litigation</option>
                      <option>Corporate & Commercial</option>
                      <option>Property & Family Dispute</option>
                      <option>Other Legal Assistance</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-[#9C7A58]">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-[#3A3A3A] mb-1">
                  Brief Details of Matter
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe your legal query or case summary..."
                  className="w-full px-3.5 py-2.5 bg-white border border-[#9C7A58]/30 rounded-sm text-sm focus:outline-none focus:border-[#9C7A58]"
                ></textarea>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#6B6B6B] my-2">
                <svg className="w-4 h-4 text-[#9C7A58]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Strict Legal Privilege & Confidentiality Applied
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#B58B66] hover:bg-[#9C7A58] text-white py-3 rounded-sm text-sm font-semibold tracking-wide uppercase transition-colors flex items-center justify-center gap-2"
              >
                {loading ? "Processing..." : "Submit Confidential Request"}
                <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16">
                  <path d="M7 17l9.2-9.2M17 17V7H7"></path>
                </svg>
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

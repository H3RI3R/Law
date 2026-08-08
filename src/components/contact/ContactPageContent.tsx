"use client";

import React, { useState } from "react";
import { useOpenConsultation } from "@/components/layout/SiteShell";
import { CustomSelect } from "@/components/ui/CustomSelect";

const matterOptions = [
  { label: "Indirect Tax (GST, Customs, SEZ)", value: "GST & Indirect Tax" },
  { label: "Direct Tax & International Tax", value: "Direct Tax & International Tax" },
  { label: "White Collar Crimes & PMLA", value: "White Collar Crimes & PMLA" },
  { label: "Commercial Disputes & NCLT", value: "Commercial Disputes & NCLT" },
  { label: "Arbitration & Conciliation (ADR)", value: "Arbitration & Conciliation" },
  { label: "Banking, Insolvency & IBC", value: "Banking & IBC" },
  { label: "Other Legal Matter", value: "Other Legal Advisory" },
];

export const ContactPageContent: React.FC = () => {
  const openConsultation = useOpenConsultation();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    matterType: "GST & Indirect Tax",
    urgency: "Standard Inquiry",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="bg-[#FAF6F0] text-[#9C7A58] text-xs uppercase tracking-widest font-semibold px-3.5 py-1 rounded-full border border-[#9C7A58]/20 dark:bg-[#2A2A2A] dark:text-[#E6D8C8]">
          GET IN TOUCH
        </span>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#9C7A58] mt-4 mb-4 font-semibold tracking-tight">
          Contact Our Legal Team
        </h1>
        <p className="dark-copy text-[#6B6B6B] text-base md:text-lg leading-relaxed">
          Provide your legal inquiry details or schedule a confidential chamber consultation with senior advocates at Aprajita Legal.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
        {/* Left Column: Office Details & Court Chambers */}
        <div className="lg:col-span-5 space-y-6">
          <div className="chambers-card bg-white border border-[#9C7A58]/20 p-8 rounded-2xl shadow-sm space-y-6">
            <h2 className="font-serif text-2xl text-[#9C7A58] font-bold pb-4 border-b border-[#9C7A58]/20">
              Chambers &amp; Head Office
            </h2>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#FAF6F0] rounded-xl text-[#9C7A58] shrink-0 border border-[#9C7A58]/20 dark:bg-[#2A2A2A]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-[#9C7A58] uppercase tracking-wider mb-1">
                  Primary Location
                </h3>
                <p className="dark-copy text-sm text-[#3A3A3A] leading-relaxed">
                  B-28, LGF, B-Block, Lajpat Nagar-III<br />
                  New Delhi - 110024, India
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#FAF6F0] rounded-xl text-[#9C7A58] shrink-0 border border-[#9C7A58]/20 dark:bg-[#2A2A2A]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-[#9C7A58] uppercase tracking-wider mb-1">
                  Phone &amp; Direct Line
                </h3>
                <a href="tel:+918585988102" className="dark-copy text-sm text-[#3A3A3A] hover:text-[#9C7A58] font-medium transition-colors">
                  +91-8585988102
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#FAF6F0] rounded-xl text-[#9C7A58] shrink-0 border border-[#9C7A58]/20 dark:bg-[#2A2A2A]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-[#9C7A58] uppercase tracking-wider mb-1">
                  Email Inquiry
                </h3>
                <a href="mailto:pclegaladvisor@gmail.com" className="dark-copy text-sm text-[#3A3A3A] hover:text-[#9C7A58] font-medium transition-colors">
                  pclegaladvisor@gmail.com
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#FAF6F0] rounded-xl text-[#9C7A58] shrink-0 border border-[#9C7A58]/20 dark:bg-[#2A2A2A]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-[#9C7A58] uppercase tracking-wider mb-1">
                  Chamber Hours
                </h3>
                <p className="dark-copy text-sm text-[#3A3A3A]">
                  Monday – Saturday: 9:00 AM – 8:00 PM<br />
                  <span className="dark-copy text-xs text-[#6B6B6B]">Prior appointment recommended for chamber consultations.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Emergency Alert Box */}
          <div className="emergency-card bg-[#3A3A3A] text-white p-6 rounded-2xl border border-[#9C7A58]/40 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
              <h3 className="font-serif text-lg font-bold text-white">Emergency Tax / Legal Representation</h3>
            </div>
            <p className="text-xs text-white/80 leading-relaxed mb-4">
              Facing immediate DGGI search raids, summons under Sec 132 GST, PMLA enforcement action, or urgent stay petitions before the High Court?
            </p>
            <button
              onClick={() => openConsultation?.()}
              className="w-full bg-[#B58B66] hover:bg-[#9C7A58] text-white py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              Request Emergency Legal Counsel
              <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="14">
                <path d="M7 17l9.2-9.2M17 17V7H7"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Right Column: Case Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="contact-panel bg-white border border-[#9C7A58]/20 p-8 md:p-10 rounded-2xl shadow-sm">
            <h2 className="font-serif text-2xl md:text-3xl text-[#9C7A58] font-bold mb-2">
              Send Us a Case Note
            </h2>
            <p className="dark-copy text-sm text-[#6B6B6B] mb-8">
              Fill out the details below. All submissions are treated under strict legal privilege and attorney-client confidentiality.
            </p>

            {isSubmitted ? (
              <div className="bg-[#FAF6F0] border border-[#9C7A58]/30 p-8 rounded-xl text-center space-y-4">
                <div className="w-12 h-12 bg-[#B58B66] text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                  ✓
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#3A3A3A] dark-copy">
                  Inquiry Received
                </h3>
                <p className="dark-copy text-sm text-[#6B6B6B] max-w-md mx-auto">
                  Thank you for contacting Aprajita Legal. Our senior litigation team is reviewing your matter and will contact you shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs text-[#9C7A58] underline font-semibold cursor-pointer pt-2"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-[#3A3A3A] uppercase tracking-wider mb-2 dark-copy">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Advocate / Client Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#9C7A58]/30 bg-white text-[#3A3A3A] focus:border-[#9C7A58] focus:ring-1 focus:ring-[#9C7A58] outline-none text-sm transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#3A3A3A] uppercase tracking-wider mb-2 dark-copy">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91-9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#9C7A58]/30 bg-white text-[#3A3A3A] focus:border-[#9C7A58] focus:ring-1 focus:ring-[#9C7A58] outline-none text-sm transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-[#3A3A3A] uppercase tracking-wider mb-2 dark-copy">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#9C7A58]/30 bg-white text-[#3A3A3A] focus:border-[#9C7A58] focus:ring-1 focus:ring-[#9C7A58] outline-none text-sm transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#3A3A3A] uppercase tracking-wider mb-2 dark-copy">
                      Practice Area / Practice Focus
                    </label>
                    <CustomSelect
                      options={matterOptions}
                      value={formData.matterType}
                      onChange={(val) => setFormData({ ...formData, matterType: val })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#3A3A3A] uppercase tracking-wider mb-2 dark-copy">
                    Matter Urgency
                  </label>
                  <div className="flex flex-wrap gap-4">
                    {["Standard Inquiry", "High Priority", "Emergency Response"].map((level) => (
                      <label key={level} className="flex items-center gap-2 text-xs text-[#3A3A3A] dark-copy cursor-pointer">
                        <input
                          type="radio"
                          name="urgency"
                          value={level}
                          checked={formData.urgency === level}
                          onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                          className="accent-[#9C7A58]"
                        />
                        {level}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#3A3A3A] uppercase tracking-wider mb-2 dark-copy">
                    Brief Summary of Legal Issue *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide relevant facts, SCN status, court forum, or key objectives..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#9C7A58]/30 bg-white text-[#3A3A3A] focus:border-[#9C7A58] focus:ring-1 focus:ring-[#9C7A58] outline-none text-sm transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#B58B66] hover:bg-[#9C7A58] text-white py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  Submit Case Note
                  <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16">
                    <path d="M7 17l9.2-9.2M17 17V7H7"></path>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

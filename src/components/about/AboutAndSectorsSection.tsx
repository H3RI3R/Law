import React from "react";

interface AboutAndSectorsProps {
  sectors: string[];
}

export const AboutAndSectorsSection: React.FC<AboutAndSectorsProps> = ({
  sectors,
}) => {
  return (
    <section id="about" className="py-20 px-4 max-w-7xl mx-auto border-t border-[#9C7A58]/20">
      {/* About Block */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <span className="text-[#9C7A58] text-xs uppercase tracking-widest font-semibold">
            Boutique Legal Firm • New Delhi
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#9C7A58] mt-2 mb-6 font-bold">
            ABOUT APRAJITA LEGAL
          </h2>
          <p className="dark-copy text-[#3A3A3A] text-sm md:text-base leading-relaxed mb-4">
            Aprajita Legal is a boutique law firm based in New Delhi, committed to delivering innovative, practical, and client-focused legal solutions. We offer a unique, holistic approach that blends deep domain expertise with rich litigation and advisory experience across a broad spectrum of legal areas.
          </p>
          <p className="dark-copy text-[#6B6B6B] text-sm md:text-base leading-relaxed mb-6">
            Our core strength lies in Litigation &amp; Dispute Resolution and Regulatory Advisory, particularly in Taxation (GST, Customs, Income Tax), Corporate Law, White-Collar Crimes, Arbitration, and Economic Offences before the Supreme Court, High Courts, NCLT, DRT, CESTAT, RERA, and Regulatory Authorities.
          </p>
          
          <div className="about-panel dark-panel bg-white border-l-4 border-[#9C7A58] p-6 shadow-xs">
            <h4 className="font-serif text-lg text-[#9C7A58] font-bold mb-2">
              Our Practice Philosophy
            </h4>
            <p className="dark-copy text-xs md:text-sm text-[#3A3A3A] italic leading-relaxed">
              &quot;Combining technical legal precision with strategic foresight, ensuring that our solutions are not only legally sound but also commercially viable. Responsiveness, clarity, and results-oriented approach.&quot;
            </p>
          </div>
        </div>

        {/* Why Choose Us Features */}
        <div id="why-us" className="about-panel bg-white border border-[#9C7A58]/20 p-8 rounded-2xl shadow-xs">
          <h3 className="font-serif text-2xl text-[#9C7A58] font-bold mb-6">
            WHY APRAJITA LEGAL?
          </h3>
          <ul className="space-y-4 text-xs md:text-sm dark-copy text-[#3A3A3A]">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#B58B66]/20 text-[#9C7A58] flex items-center justify-center font-bold text-xs shrink-0">
                1
              </div>
              <div>
                <strong>Deep Expertise in Tax, Corporate, and Regulatory Litigation</strong>
                <p className="dark-copy text-[#6B6B6B] text-xs mt-0.5">Specialized mastery across GST, Customs, Income Tax &amp; Economic Offences.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#B58B66]/20 text-[#9C7A58] flex items-center justify-center font-bold text-xs shrink-0">
                2
              </div>
              <div>
                <strong>Holistic Legal Approach</strong>
                <p className="dark-copy text-[#6B6B6B] text-xs mt-0.5">Seamlessly blending advisory, regulatory compliance, and trial strategy.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#B58B66]/20 text-[#9C7A58] flex items-center justify-center font-bold text-xs shrink-0">
                3
              </div>
              <div>
                <strong>Formidable Courtroom Presence</strong>
                <p className="dark-copy text-[#6B6B6B] text-xs mt-0.5">Backed by meticulous drafting and strong advocacy before Supreme Court &amp; High Courts.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-[#B58B66]/20 text-[#9C7A58] flex items-center justify-center font-bold text-xs shrink-0">
                4
              </div>
              <div>
                <strong>Client-Centric &amp; Result-Focused Delivery</strong>
                <p className="dark-copy text-[#6B6B6B] text-xs mt-0.5">Proven track record in high-stakes commercial litigation and investigation defense.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Sectors Served Grid */}
      <div id="sectors" className="pt-10 border-t border-[#9C7A58]/20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#9C7A58] text-xs uppercase tracking-widest font-semibold">
            Industry Reach
          </span>
          <h3 className="font-serif text-3xl md:text-4xl text-[#9C7A58] font-bold mt-1">
            SECTORS WE REGULARLY ADVISE
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="bg-white border border-[#9C7A58]/20 p-4 text-center rounded-2xl hover:border-[#9C7A58] transition-colors"
            >
              <div className="w-2 h-2 rounded-full bg-[#B58B66] mx-auto mb-2"></div>
              <span className="dark-copy text-xs font-semibold text-[#3A3A3A] tracking-tight">
                {sector}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

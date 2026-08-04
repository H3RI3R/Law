"use client";

import React, { useState } from "react";
import { Header } from "@/components/header/Header";
import { HeroSection } from "@/components/hero/HeroSection";
import { BottomTransition } from "@/components/hero/BottomTransition";
import { PracticeAreasSection } from "@/components/practice/PracticeAreasSection";
import { AdvocatesSection } from "@/components/team/AdvocatesSection";
import { AboutAndSectorsSection } from "@/components/about/AboutAndSectorsSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { ConsultationModal } from "@/components/cro/ConsultationModal";
import { LandingPageDataService, JsonLdService } from "@/services/dataService";

export default function Home() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const navItems = LandingPageDataService.getNavigationItems();
  const awards = LandingPageDataService.getAwards();
  const stats = LandingPageDataService.getStatistics();
  const practiceAreas = LandingPageDataService.getPracticeAreas();
  const advocates = LandingPageDataService.getAdvocates();
  const sectors = LandingPageDataService.getSectors();
  const jsonLd = JsonLdService.getLegalServiceSchema();

  return (
    <>
      {/* Inject Structured Data JSON-LD for Google SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header
        navItems={navItems}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      <HeroSection
        awards={awards}
        stats={stats}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      <AboutAndSectorsSection sectors={sectors} />

      <PracticeAreasSection practiceAreas={practiceAreas} />

      <AdvocatesSection
        advocates={advocates}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      <BottomTransition />

      <ContactSection
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </>
  );
}

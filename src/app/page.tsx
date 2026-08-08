import { BottomTransition } from "@/components/hero/BottomTransition";
import { HeroSection } from "@/components/hero/HeroSection";
import { AboutAndSectorsSection } from "@/components/about/AboutAndSectorsSection";
import { PracticeAreasSection } from "@/components/practice/PracticeAreasSection";
import { AdvocatesSection } from "@/components/team/AdvocatesSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { SiteShell } from "@/components/layout/SiteShell";
import { LandingPageDataService, JsonLdService } from "@/services/dataService";

export default function Home() {
  const navItems = LandingPageDataService.getNavigationItems();
  const awards = LandingPageDataService.getAwards();
  const stats = LandingPageDataService.getStatistics();
  const practiceAreas = LandingPageDataService.getPracticeAreas();
  const advocates = LandingPageDataService.getAdvocates();
  const sectors = LandingPageDataService.getSectors();
  const jsonLd = JsonLdService.getLegalServiceSchema();

  return (
    <SiteShell navItems={navItems} jsonLd={jsonLd}>
      <>
        <HeroSection awards={awards} stats={stats} />
        <AboutAndSectorsSection sectors={sectors} />
        <PracticeAreasSection practiceAreas={practiceAreas} />
        <AdvocatesSection advocates={advocates} />
        <BottomTransition />
      </>
    </SiteShell>
  );
}

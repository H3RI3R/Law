import { PracticeAreasSection } from "@/components/practice/PracticeAreasSection";
import { SiteShell } from "@/components/layout/SiteShell";
import { LandingPageDataService } from "@/services/dataService";

export default function PracticeAreasPage() {
  const navItems = LandingPageDataService.getNavigationItems();
  const practiceAreas = LandingPageDataService.getPracticeAreas();

  return (
    <SiteShell navItems={navItems}>
      <PracticeAreasSection practiceAreas={practiceAreas} />
    </SiteShell>
  );
}


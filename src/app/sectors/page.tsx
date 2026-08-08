import { AboutAndSectorsSection } from "@/components/about/AboutAndSectorsSection";
import { SiteShell } from "@/components/layout/SiteShell";
import { LandingPageDataService } from "@/services/dataService";

export default function SectorsPage() {
  const navItems = LandingPageDataService.getNavigationItems();
  const sectors = LandingPageDataService.getSectors();

  return (
    <SiteShell navItems={navItems}>
      <AboutAndSectorsSection sectors={sectors} />
    </SiteShell>
  );
}


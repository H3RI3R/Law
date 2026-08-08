import { AdvocatesSection } from "@/components/team/AdvocatesSection";
import { SiteShell } from "@/components/layout/SiteShell";
import { LandingPageDataService } from "@/services/dataService";

export default function AdvocatesPage() {
  const navItems = LandingPageDataService.getNavigationItems();
  const advocates = LandingPageDataService.getAdvocates();

  return (
    <SiteShell navItems={navItems}>
      <AdvocatesSection advocates={advocates} />
    </SiteShell>
  );
}

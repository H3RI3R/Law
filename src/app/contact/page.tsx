import { ContactPageContent } from "@/components/contact/ContactPageContent";
import { SiteShell } from "@/components/layout/SiteShell";
import { LandingPageDataService } from "@/services/dataService";

export default function ContactPage() {
  const navItems = LandingPageDataService.getNavigationItems();

  return (
    <SiteShell navItems={navItems}>
      <ContactPageContent />
    </SiteShell>
  );
}

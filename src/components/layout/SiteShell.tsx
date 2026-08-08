"use client";

import React, { createContext, useContext, useEffect, useMemo, useState, useSyncExternalStore } from "react";
import { Header } from "@/components/header/Header";
import { ConsultationModal } from "@/components/cro/ConsultationModal";
import { NavItemModel } from "@/models/domain";

import { ContactSection } from "@/components/contact/ContactSection";

const ConsultationContext = createContext<(() => void) | null>(null);

interface SiteShellProps {
  navItems: NavItemModel[];
  children: React.ReactNode;
  jsonLd?: object;
}

export function useOpenConsultation() {
  return useContext(ConsultationContext);
}

export const SiteShell: React.FC<SiteShellProps> = ({ navItems, children, jsonLd }) => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const theme = useSyncExternalStore<"light" | "dark">(
    (onStoreChange) => {
      window.addEventListener("storage", onStoreChange);
      window.addEventListener("themechange", onStoreChange);
      return () => {
        window.removeEventListener("storage", onStoreChange);
        window.removeEventListener("themechange", onStoreChange);
      };
    },
    () => {
      const storedTheme = window.localStorage.getItem("theme") as "light" | "dark" | null;
      if (storedTheme) return storedTheme;
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    },
    () => "light"
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.body.dataset.theme = theme;
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark");
    }
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const openConsultation = useMemo(() => () => setIsConsultationOpen(true), []);

  return (
    <>
      {jsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ) : null}
      <Header
        navItems={navItems}
        onOpenConsultation={openConsultation}
        theme={theme}
        onToggleTheme={() => {
          const nextTheme = theme === "dark" ? "light" : "dark";
          window.localStorage.setItem("theme", nextTheme);
          window.dispatchEvent(new Event("themechange"));
        }}
      />
      <ConsultationContext.Provider value={openConsultation}>
        {children}
        <ContactSection onOpenConsultation={openConsultation} />
      </ConsultationContext.Provider>
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </>
  );
};

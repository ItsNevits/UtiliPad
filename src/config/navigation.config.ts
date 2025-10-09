/**
 * Navigation configuration
 * Defines menu items, links, and navigation structure
 */

import type { Language } from "@/types/language.type";

export interface NavItem {
  id: string;
  labelKey: string; // i18n key
  href: (lang: Language) => string;
}

export const MAIN_NAV: NavItem[] = [
  {
    id: "home",
    labelKey: "navigation.home",
    href: (lang) => `/${lang}`,
  },
  {
    id: "tools",
    labelKey: "navigation.tools",
    href: (lang) => `/${lang}/#tools`,
  },
  {
    id: "contact",
    labelKey: "navigation.contact",
    href: (lang) => `/${lang}/contact`,
  },
];

export const FOOTER_NAV = {
  legal: [
    {
      id: "privacy",
      labelKey: "navigation.privacy",
      href: (lang: Language) => `/${lang}/privacy`,
    },
    {
      id: "terms",
      labelKey: "navigation.terms",
      href: (lang: Language) => `/${lang}/terms`,
    },
  ],
} as const;

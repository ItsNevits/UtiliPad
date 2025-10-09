/**
 * Site configuration
 * Contains site metadata, URLs, and general settings
 */

export const SITE_CONFIG = {
  name: "UtiliPad",
  url: "https://www.utilipad.com",
  description: "Herramientas online gratuitas para archivos, imágenes y texto",
  author: "UtiliPad Team",

  // Social
  social: {
    twitter: "@utilipad",
    github: "https://github.com/ItsNevits/UtiliPad",
  },

  // SEO
  defaultLocale: "es",
  locales: ["es", "en"],

  // Analytics
  googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID,
  vercelAnalytics: true,
} as const;

export type SiteConfig = typeof SITE_CONFIG;

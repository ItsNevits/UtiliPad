// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";

import sitemap from "@astrojs/sitemap";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: true,
    },
  },

  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),

  site: "https://utilipad.com",

  integrations: [
    sitemap({
      customPages: [
        // Categorías
        "https://utilipad.com/es/category/files",
        "https://utilipad.com/en/category/files",

        "https://utilipad.com/es/category/images",
        "https://utilipad.com/en/category/images",

        "https://utilipad.com/es/category/text",
        "https://utilipad.com/en/category/text",

        // Herramientas - URLs nuevas SEO-friendly
        "https://utilipad.com/es/tools/zip-files",
        "https://utilipad.com/en/tools/zip-files",

        "https://utilipad.com/es/tools/file-converter",
        "https://utilipad.com/en/tools/file-converter",

        "https://utilipad.com/es/tools/image-compress",
        "https://utilipad.com/en/tools/image-compress",

        "https://utilipad.com/es/tools/image-converter",
        "https://utilipad.com/en/tools/image-converter",

        "https://utilipad.com/es/tools/json-formatter",
        "https://utilipad.com/en/tools/json-formatter",

        "https://utilipad.com/es/tools/text-analyzer",
        "https://utilipad.com/en/tools/text-analyzer",

        "https://utilipad.com/es/tools/qr-generator",
        "https://utilipad.com/en/tools/qr-generator",

        "https://utilipad.com/es/tools/password-generator",
        "https://utilipad.com/en/tools/password-generator",
      ],
    }),
    db(),
  ],
});

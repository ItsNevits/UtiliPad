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

  site: "https://www.utilipad.com",

  integrations: [
    sitemap({
      customPages: [
        // Páginas principales
        "https://www.utilipad.com/es/",
        "https://www.utilipad.com/en/",

        // Categorías
        "https://www.utilipad.com/es/category/files",
        "https://www.utilipad.com/en/category/files",

        "https://www.utilipad.com/es/category/images",
        "https://www.utilipad.com/en/category/images",

        "https://www.utilipad.com/es/category/text",
        "https://www.utilipad.com/en/category/text",

        // Herramientas - URLs nuevas SEO-friendly
        "https://www.utilipad.com/es/tools/zip-files",
        "https://www.utilipad.com/en/tools/zip-files",

        "https://www.utilipad.com/es/tools/file-converter",
        "https://www.utilipad.com/en/tools/file-converter",

        "https://www.utilipad.com/es/tools/image-compress",
        "https://www.utilipad.com/en/tools/image-compress",

        "https://www.utilipad.com/es/tools/image-converter",
        "https://www.utilipad.com/en/tools/image-converter",

        "https://www.utilipad.com/es/tools/json-formatter",
        "https://www.utilipad.com/en/tools/json-formatter",

        "https://www.utilipad.com/es/tools/text-analyzer",
        "https://www.utilipad.com/en/tools/text-analyzer",

        "https://www.utilipad.com/es/tools/qr-generator",
        "https://www.utilipad.com/en/tools/qr-generator",

        "https://www.utilipad.com/es/tools/password-generator",
        "https://www.utilipad.com/en/tools/password-generator",
      ],
    }),
    db(),
  ],
});

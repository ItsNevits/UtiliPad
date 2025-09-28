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

        // Herramientas de archivos
        "https://utilipad.com/es/category/files?tool=zip-files",
        "https://utilipad.com/en/category/files?tool=zip-files",

        "https://utilipad.com/es/category/files?tool=file-converter",
        "https://utilipad.com/en/category/files?tool=file-converter",

        // Herramientas de imágenes
        "https://utilipad.com/es/category/images?tool=image-converter",
        "https://utilipad.com/en/category/images?tool=image-converter",

        // Herramientas de texto
        "https://utilipad.com/es/category/text?tool=json-formatter",
        "https://utilipad.com/en/category/text?tool=json-formatter",

        "https://utilipad.com/es/category/text?tool=text-analyzer",
        "https://utilipad.com/en/category/text?tool=text-analyzer",

        "https://utilipad.com/es/category/text?tool=qr-generator",
        "https://utilipad.com/en/category/text?tool=qr-generator",

        "https://utilipad.com/es/category/text?tool=password-generator",
        "https://utilipad.com/en/category/text?tool=password-generator",
      ],
    }),
    db(),
  ],
});

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

  redirects: {
    // Redirects de URLs antiguas a nuevas
    "/es/category/files?tool=zip-files": "/es/tools/zip-files",
    "/en/category/files?tool=zip-files": "/en/tools/zip-files",

    "/es/category/files?tool=file-converter": "/es/tools/file-converter",
    "/en/category/files?tool=file-converter": "/en/tools/file-converter",

    "/es/category/images?tool=image-compress": "/es/tools/image-compress",
    "/en/category/images?tool=image-compress": "/en/tools/image-compress",

    "/es/category/images?tool=image-converter": "/es/tools/image-converter",
    "/en/category/images?tool=image-converter": "/en/tools/image-converter",

    "/es/category/text?tool=json-formatter": "/es/tools/json-formatter",
    "/en/category/text?tool=json-formatter": "/en/tools/json-formatter",

    "/es/category/text?tool=text-analyzer": "/es/tools/text-analyzer",
    "/en/category/text?tool=text-analyzer": "/en/tools/text-analyzer",

    "/es/category/text?tool=qr-generator": "/es/tools/qr-generator",
    "/en/category/text?tool=qr-generator": "/en/tools/qr-generator",

    "/es/category/text?tool=password-generator": "/es/tools/password-generator",
    "/en/category/text?tool=password-generator": "/en/tools/password-generator",
  },

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

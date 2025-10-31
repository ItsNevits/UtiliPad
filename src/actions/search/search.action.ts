import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { getTranslation } from "@/i18n/index";
import type { Language } from "@/types/language.type";

/**
 * Search tools action
 * Receives a query and language, returns filtered tools
 */
export const searchTools = defineAction({
  accept: "json",
  input: z.object({
    query: z.string().min(1, "Search query is required"),
    lang: z.enum(["es", "en"]),
  }),
  handler: async ({ query, lang }) => {
    try {
      // Get tools translations for the specified language
      const items = getTranslation(lang as Language, "tools.items") as unknown as Record<
        string,
        { name: string; description: string; seo?: any }
      >;

      // Build tools array from translations
      const allTools = [];
      const toolIds = Object.keys(items || {});

      for (const toolId of toolIds) {
        const toolTranslation = items[toolId];
        if (toolTranslation) {
          // Build SEO-friendly URL
          const href = `/${lang}/tools/${toolId}`;

          allTools.push({
            id: toolId,
            name: toolTranslation.name,
            description: toolTranslation.description,
            href: href,
            isAvailable: true,
          });
        }
      }

      // Filter by query
      const lowerQuery = query.toLowerCase().trim();
      const results = allTools.filter(
        (tool) =>
          tool.name.toLowerCase().includes(lowerQuery) ||
          tool.description.toLowerCase().includes(lowerQuery)
      );

      return {
        success: true,
        results,
        total: results.length,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "Search failed",
        results: [],
        total: 0,
      };
    }
  },
});

import { getTranslation } from "@/i18n/index";
import type { Language } from "@/types/language.type";

export interface SEOData {
  title: string;
  description: string;
}

export interface PageData {
  category?: string;
  tool?: string;
}

export const getDynamicSEO = (
  pathname: string,
  lang: Language,
  pageData: PageData = {}
): SEOData => {
  // Contact page
  if (pathname.includes("/contact")) {
    return {
      title: getTranslation(lang, "seo.pages.contact.title"),
      description: getTranslation(lang, "seo.pages.contact.description"),
    };
  }

  // Privacy page
  if (pathname.includes("/privacy")) {
    return {
      title: getTranslation(lang, "seo.pages.privacy.title"),
      description: getTranslation(lang, "seo.pages.privacy.description"),
    };
  }

  // Terms page
  if (pathname.includes("/terms")) {
    return {
      title: getTranslation(lang, "seo.pages.terms.title"),
      description: getTranslation(lang, "seo.pages.terms.description"),
    };
  }

  // News page
  if (pathname.includes("/news")) {
    return {
      title: getTranslation(lang, "seo.pages.news.title"),
      description: getTranslation(lang, "seo.pages.news.description"),
    };
  }

  // Category page
  if (pathname.includes("/category/") && pageData.category) {
    return {
      title: getTranslation(lang, "seo.pages.category.title").replace(
        "{category}",
        pageData.category
      ),
      description: getTranslation(
        lang,
        "seo.pages.category.description"
      ).replace("{category}", pageData.category),
    };
  }

  // Tool page
  if (pathname.includes("/tools/") || pageData.tool) {
    return {
      title: getTranslation(lang, "seo.pages.tool.title").replace(
        "{tool}",
        pageData.tool || ""
      ),
      description: getTranslation(lang, "seo.pages.tool.description").replace(
        "{tool}",
        pageData.tool || ""
      ),
    };
  }

  // Default home page
  return {
    title: getTranslation(lang, "seo.title"),
    description: getTranslation(lang, "seo.description"),
  };
};

export const generateJSONLD = (
  pathname: string,
  baseUrl: string,
  currentUrl: string,
  lang: Language,
  finalTitle: string,
  finalDescription: string,
  pageData: PageData = {}
): any => {
  const baseSchema: any = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: "UtiliPad",
        description: finalDescription,
        inLanguage: lang,
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${baseUrl}/${lang}/tools/{search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: "UtiliPad",
        url: baseUrl,
        logo: {
          "@type": "ImageObject",
          url: `${baseUrl}/og/og-home-1200x630.jpg`,
        },
        sameAs: [],
      },
    ],
  };

  // Add specific schema based on page type
  if (pathname.includes("/contact")) {
    baseSchema["@graph"].push({
      "@type": "ContactPage",
      "@id": `${currentUrl}/#contactpage`,
      url: currentUrl,
      name: finalTitle,
      description: finalDescription,
      inLanguage: lang,
      isPartOf: {
        "@id": `${baseUrl}/#website`,
      },
    });
  } else if (
    pathname.includes("/tools/") ||
    (pathname.includes("/category/") && pageData.tool)
  ) {
    // Tool page
    baseSchema["@graph"].push({
      "@type": "WebApplication",
      "@id": `${currentUrl}/#webapplication`,
      name: pageData.tool,
      description: finalDescription,
      url: currentUrl,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web Browser",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      inLanguage: lang,
      isPartOf: {
        "@id": `${baseUrl}/#website`,
      },
      publisher: {
        "@id": `${baseUrl}/#organization`,
      },
    });
  } else if (pathname.includes("/category/")) {
    // Category page
    baseSchema["@graph"].push({
      "@type": "CollectionPage",
      "@id": `${currentUrl}/#collectionpage`,
      url: currentUrl,
      name: finalTitle,
      description: finalDescription,
      inLanguage: lang,
      isPartOf: {
        "@id": `${baseUrl}/#website`,
      },
    });
  } else if (pathname.includes("/news")) {
    baseSchema["@graph"].push({
      "@type": "Blog",
      "@id": `${currentUrl}/#blog`,
      url: currentUrl,
      name: finalTitle,
      description: finalDescription,
      inLanguage: lang,
      publisher: {
        "@id": `${baseUrl}/#organization`,
      },
      isPartOf: {
        "@id": `${baseUrl}/#website`,
      },
    });
  } else {
    // Default SoftwareApplication for home page
    baseSchema["@graph"].push({
      "@type": "SoftwareApplication",
      "@id": `${baseUrl}/#softwareapplication`,
      name: "UtiliPad",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web Browser",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      url: currentUrl,
      inLanguage: lang,
      description: finalDescription,
      publisher: {
        "@id": `${baseUrl}/#organization`,
      },
    });
  }

  return baseSchema;
};

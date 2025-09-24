export default {
  languageLabel: "English",
  languageOptions: {
    es: "Español",
    en: "English",
  },

  // ===== PAGES =====
  sites: {
    home: {
      hero: {
        title: "Your toolbox on the web.",
        description:
          "Convert, edit, and automate your files without installing anything. Drag and drop or explore the most used tools.",
      },
    },
    files: {
      hero: {
        title: "File Tools.",
        description: "Free tools to manipulate and convert files.",
      },
    },
    images: {
      hero: {
        title: "Image Tools.",
        description: "Free tools to edit and process images.",
      },
    },
    text: {
      hero: {
        title: "Text Tools.",
        description: "Free tools to manipulate and analyze text.",
      },
    },
    news: {
      hero: {
        title: "News",
        description:
          "Stay up to date with the latest updates and improvements.",
      },
    },
    privacy: {
      hero: {
        title: "Privacy Policy",
        description: "How we handle and protect your information at UtiliPad",
      },
    },
    terms: {
      hero: {
        title: "Terms of Service",
        description: "The terms and conditions for using UtiliPad",
      },
    },
    contact: {
      hero: {
        title: "Contact",
        description:
          "Do you have a suggestion, found a bug, or want to propose a new tool?",
      },
    },
  },

  // ===== COMPONENTS =====
  components: {
    sidebar: {
      title: "Categories",
      categories: [
        { label: "Files", href: "/files" },
        { label: "Images", href: "/images" },
        { label: "Text", href: "/text" },
        { label: "News", href: "/news" },
      ],
    },
    index: {
      hero: {
        title: "Your toolbox on the web.",
        description:
          "Convert, edit, and automate your files without installing anything. Drag and drop or explore the most used tools.",
      },
    },
    indexNews: {
      title: "News",
      description: "Stay up to date with the latest updates and improvements.",
    },
    header: {
      title: "Home",
      searchPlaceholder: "Search for a tool…",
    },
    footer: {
      madeWith: "Made with",
      and: "and",
      privacy: "Privacy",
      terms: "Terms",
      contact: "Contact",
    },
    search: {
      placeholder: "Search for a tool…",
      results: "Search results",
      noResults: "No tools found",
    },
    recent: {
      title: "Recent",
      completed: "Completed",
      timeAgo: {
        hoursAgo: "{count} h ago",
        yesterday: "yesterday",
      },
    },
    language: {
      changeLanguage: "Change language",
      current: "English",
    },
    aboutUs: {
      title: "About Us",
      description:
        "We just like to collaborate with the community and create useful things.",
      alt: "About us",
    },
    processSummary: {
      title: "Processed Tasks",
      items: {
        filesConverted: "Files converted",
        imagesProcessed: "Images processed",
        urlDownloads: "URL downloads",
      },
    },
    news: {
      title: "News",
      seeMore: "see more",
      seeMoreTitle: "See all news",
    },
  },

  // ===== TOOLS =====
  tools: {
    categories: {
      files: "Files",
      images: "Images",
      text: "Text",
      news: "News",
    },
    categoryTitles: {
      files: "File Tools",
      images: "Image Tools",
      text: "Text Tools",
    },
    categoryDescriptions: {
      files: "Free tools to manipulate and convert files.",
      images: "Free tools to edit and process images.",
      text: "Free tools to manipulate and analyze text.",
    },
    items: {
      "zip-files": {
        name: "Create ZIP",
        description: "Compress files into ZIP format",
      },
      "file-converter": {
        name: "File Converter",
        description: "Convert between different file formats",
      },
      "image-compress": {
        name: "Compress Image",
        description: "Reduce the size of your images",
      },
      "image-resize": {
        name: "Resize Image",
        description: "Change image dimensions",
      },
      "image-crop": {
        name: "Crop Image",
        description: "Crop specific parts of the image",
      },
      "image-format": {
        name: "Convert Format",
        description: "Convert between JPG, PNG, WebP, etc.",
      },
      "json-formatter": {
        name: "JSON Formatter",
        description: "Format, validate and beautify JSON code",
      },
      "text-analyzer": {
        name: "Text Analyzer",
        description: "Count words, characters and paragraphs",
      },
      "qr-generator": {
        name: "QR Generator",
        description: "Generate QR codes for URLs and text",
      },
    },
    badges: {
      Nuevo: "New",
      Proximamente: "Coming Soon",
    },
    actions: {
      open: "Open",
      searchShortcut: "⌘K to search",
      searchShortcutWin: "Ctrl+K to search",
    },
    messages: {
      notImplemented: "Not implemented",
      otherToolsPrefix: "Other",
      otherToolsSuffix: "tools",
      noMoreTools: "No more tools available in this category.",
    },
  },
};

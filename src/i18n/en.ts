export default {
  languageLabel: "English",
  languageOptions: {
    es: "Español",
    en: "English",
  },

  general: {
    or: "or",
    and: "and",
    close: "Close",
    cancel: "Cancel",
    copy: "Copy",
    copied: "Copied",
    paste: "Paste",
    clear: "Clear",
    confirm: "Confirm",
    download: "Download",
    downloadZip: "Download as ZIP",
    delete: "Delete",
    back: "Back",
    home: "Home",
    accept: "Accept",
    reject: "Reject",
    select: "Select",
    selectFile: "Select file",
    dragAndDrop: "Drag and drop files here",
    browseFiles: "Browse files",
    uploadFiles: "Upload files",
    processing: "Processing...",
    loading: "Loading...",
    noData: "No data available",
    viewOnGitHub: "View on GitHub",
    openInNewTab: "Open in new tab",
    learnMore: "Learn more",
    moreInfo: "More info",
    comingSoon: "Coming soon",
    allTools: "All tools",
    allCategories: "All categories",
    selectCategory: "Select a category",
    selectTool: "Select a tool",
    viewAll: "View all",
    seeMore: "See more",
    seeLess: "See less",
    searchPlaceholder: "Search for a tool…",
    noResults: "No results found",
    format: "Format",
    all: "All",
  },

  // ===== SEO =====
  seo: {
    title: "UtiliPad — Free Web Tools",
    description:
      "Online utility suite: JSON formatter and validator, text analyzer, image compressor/resizer, and more. Fast, free, and no sign-up required.",
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
      completeReading: "Complete Reading",
      readMore: "Read More",
      noPosts: "No posts available.",
      noPostsDesc: "We will soon add new updates about UtiliPad.",
      statisticsTitle: "Statistics",
      statisticsDescription: "Summary of published news",
      articles: "Articles",
    },
    privacy: {
      hero: {
        title: "Privacy Policy",
        description: "How we handle and protect your information at UtiliPad",
      },
      content: [
        {
          title: "Data Handling",
          paragraphs: [
            '<strong class="underline">Local processing:</strong> All tools (JSON Formatter, Word Counter, etc.) process your files locally in your browser.',
            '<strong class="underline">We do not store files:</strong> Your documents, images, and data are never stored on our servers.',
            '<strong class="underline">Analytics:</strong> We use Google Analytics to improve the user experience.',
          ],
        },
        {
          title: "Cookies and Storage",
          paragraphs: [
            "We only use technical cookies that are necessary for the application to function.",
          ],
        },
        {
          title: "User Anonymity",
          paragraphs: [
            "You can use all our tools without registration or personal identification.",
          ],
        },
      ],
    },
    terms: {
      hero: {
        title: "Terms of Service",
        description: "The terms and conditions for using UtiliPad",
      },
      content: [
        {
          title: "Service Usage",
          paragraphs: [
            '<strong class="underline">Free:</strong> All tools are completely free.',
            '<strong class="underline">No limits:</strong> There are no restrictions on using our tools.',
            '<strong class="underline">Responsibility:</strong> The user is responsible for the content they process.',
          ],
        },
        {
          title: "Limitations",
          paragraphs: [
            'The tools are provided "as is" without warranties of perfect operation.',
          ],
        },
        {
          title: "Intellectual Property",
          paragraphs: [
            "The source code is available under MIT license. Processed content belongs to the user.",
          ],
        },
      ],
    },
    contact: {
      hero: {
        title: "Contact",
        description:
          "Do you have a suggestion, found a bug, or want to propose a new tool?",
      },
      contactInfo: {
        title: "Contact Information",
        helpWith: {
          title: "How can we help you?",
          items: [
            "Report bugs or errors",
            "Suggest new tools",
            "Improve existing tools",
            "Collaborate on the project",
            "General questions",
          ],
        },
        responseTime: {
          icon: "⚡",
          title: "Response Time",
          description: "24-48 hours",
        },
        options: [
          {
            icon: "📧",
            title: "Email",
            description: "bs.alvarado21@gmail.com",
            href: "mailto:bs.alvarado21@gmail.com",
          },
          {
            icon: "🐙",
            title: "GitHub",
            description: "https://github.com/ItsNevits",
            href: "https://github.com/ItsNevits",
          },
        ],
      },
      form: {
        title: "Send us a message",
        fields: {
          name: {
            label: "Name",
            placeholder: "Your name",
          },
          email: {
            label: "Email",
            placeholder: "your@email.com",
          },
          subject: {
            label: "Subject",
            placeholder: "Select a subject",
            options: [
              { value: "", label: "Select a subject" },
              { value: "bug", label: "Report bug" },
              { value: "feature", label: "Suggest tool" },
              { value: "improvement", label: "Existing improvement" },
              { value: "collaboration", label: "Collaboration" },
              { value: "other", label: "Other" },
            ],
          },
          message: {
            label: "Message",
            placeholder: "Describe your inquiry, suggestion or problem...",
          },
        },
        submit: {
          default: "Send message",
          sending: "Sending...",
          success: "✓ Message sent successfully. We will respond soon.",
          error: "✗ Error sending message. Please try again.",
        },
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          {
            question: "Is UtiliPad really free?",
            answer:
              "Yes, all tools are completely free with no usage limits. It's an open source project.",
          },
          {
            question: "Are my files sent to any server?",
            answer:
              "No, all processing is done in our open source API.\nYour files are never sent to any server.\nYou can review the code on GitHub.",
          },
          {
            question: "Can I suggest new tools?",
            answer:
              "Of course! Send us your ideas through the contact form or create an issue on GitHub.",
          },
          {
            question: "How can I contribute to the project?",
            answer:
              "You can contribute by reporting bugs, suggesting improvements.",
          },
        ],
      },
    },
  },

  // ===== COMPONENTS =====
  components: {
    sidebar: {
      title: "Categories",
      categories: [
        { label: "Files", href: "/category/files" },
        { label: "Images", href: "/category/images" },
        { label: "Text", href: "/category/text" },
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
      noRecent: "No recent processes",
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
    modal: {
      press: "Press",
      toClose: "to close",
    },
    jsonFormatter: {
      // ==== BUTTONS ====
      paste: "Paste",
      clear: "Clear",
      copy: "Copy",
      download: "Download",
      format: "Format",
      minify: "Minify",

      // ==== TEXTOS ====
      inputTitle: "Input JSON",
      outputTitle: "Formatted JSON",
      indentSpaces: "Indentation spaces",
      originalSize: "Original size",
      formattedSize: "Formatted size",

      // ==== MENSAJES ====
      invalidJson: "Invalid JSON",
      emptyInput: "Empty input",
      validJson: "Valid JSON",
      errorParsing: "Error parsing JSON",

      // ==== OTROS ====
      modalTitle: "Expanded JSON",
      modalDescription: "Detailed view of formatted JSON",
    },
    qrGenerator: {
      // ==== BUTTONS ====
      generate: "Generate",
      download: "Download",
      share: "Share",

      // ==== TEXTOS ====
      inputTitle: "Text or URL:",
      qrCodeTitle: "Generated QR Code",
      qrCodeDescription:
        "Right-click on the QR code to save it, or use the download buttons.",

      // ==== PLACEHOLDERS ====
      inputPlaceholder: "Enter text or URL here...",
    },
    textAnalyzer: {
      // ==== TEXTOS ====
      inputTitle: "Text to analyze",
      Words: "Words",
      Characters: "Characters",
      Paragraphs: "Paragraphs",
      WhitOutSpaces: "Without spaces",
      AdditionalInfo: "Additional Information",
      UniqueWords: "Unique Words",

      // ==== PLACEHOLDERS ====
      inputPlaceholder: "Type or paste your text here...",
    },
    zipCompressor: {
      // ==== BUTTONS ====
      compress: "Compress",
      download: "Download",
      compressAndDownload: "Compress and download",
      delete: "Delete",

      // ==== TEXTS ====
      dropFiles: "Drop files here or click to select",
      filesUploaded: "Files uploaded",
      totalFiles: "Total files",
      processInfo: "Processing information...",
      previousSize: "Previous size",
      compressSize: "Compressed size",
    },
    imageConverter: {
      dropFiles: "Drop files here or click to select",
      filesUploaded: "Files uploaded",
      totalFiles: "Total files",
      DownloadAll: "Download All",
      DownloadAsZip: "Download as ZIP",
      Download: "Download",
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
      "image-converter": {
        name: "Image Converter",
        description: "Convert between JPG, PNG, WebP, etc.",
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

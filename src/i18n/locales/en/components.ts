export default {
  sidebar: {
    title: "Categories",
    categories: [
      { label: "Files", href: "/category/files" },
      { label: "Images", href: "/category/images" },
      { label: "Text", href: "/category/text" },
      { label: "News", href: "/news" },
    ],
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
    title: "About me",
    description:
      "I just like to collaborate with the community and create useful things.",
    alt: "About me",
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
  passwordGenerator: {
    generatedPasswordLabel: "Generated Password",
    LengthLabel: "Length",
    valuesBetween:
      "Value must be between 5 and 128. Use 14 characters or more to generate a strong password.",
    tip: "Tip: Use a mix of all character types for best security.",
  },
};

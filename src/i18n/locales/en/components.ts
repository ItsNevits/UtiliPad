export default {
  sidebar: {
    title: "Categories",
    categories: [
      { label: "Encryption", href: "/category/encryption" },
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
  aboutUs: [
    {
      name: "Brian Alvarado",
      role: "#Developer",
      description:
        "I just like to collaborate with the community and create useful things.",
      alt: "Photo of Brian Alvarado",
      image: "/images/team/brian.jpg",
      socials: {
        github: "https://github.com/brian",
        linkedin: "https://linkedin.com/in/brian",
        twitter: "https://twitter.com/brian",
        instagram: "https://instagram.com/brian",
      },
    },
    {
      name: "Brian Alvarado 2",
      role: "#Developer",
      description:
        "I just like to collaborate with the community and create useful things.",
      alt: "Photo of Brian Alvarado",
      image: "/images/team/brian.jpg",
      socials: {
        github: "https://github.com/brian",
        linkedin: "https://linkedin.com/in/brian",
        twitter: "https://twitter.com/brian",
        instagram: "https://instagram.com/brian",
      },
    },
  ],
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
  imageCompressor: {
    // ==== DROP ZONE ====
    dropZoneTitle: "Click to upload or drag and drop",
    dropZoneSubtitle: "PNG, JPG, WebP up to 10MB",

    // ==== SETTINGS ====
    settingsTitle: "Compression Settings",
    maxSize: "Max Size (MB)",
    maxSizeHelp: "Target file size in megabytes",
    maxDimension: "Max Width/Height (px)",
    maxDimensionHelp: "Maximum dimension in pixels",
    quality: "Quality",
    qualityLower: "Lower size",
    qualityHigher: "Higher quality",
    outputFormat: "Output Format",
    formatOriginal: "Keep Original",
    formatJpeg: "JPEG",
    formatPng: "PNG",
    formatWebp: "WebP",

    // ==== BUTTONS ====
    compress: "Compress Images",
    compressing: "Compressing...",
    reset: "Reset",
    downloadAll: "Download All",
    download: "Download",
    creatingZip: "Creating ZIP...",

    // ==== RESULTS ====
    resultsTitle: "Compressed Images",
    statTotal: "Total Images",
    statOriginal: "Original Size",
    statCompressed: "Compressed Size",

    // ==== MESSAGES ====
    errorSelect: "Please select valid image files",
    errorCompressing: "Error compressing",
    errorCreatingZip: "Error creating ZIP file",
  },
  base64Converter: {
    // ==== TABS ====
    encode: "Encode",
    decode: "Decode",

    // ==== LABELS ====
    inputLabel: "Input text",
    outputLabel: "Result",
    previewLabel: "Preview",
    inputPlaceholder: "Enter text here...",
    outputPlaceholder: "Result will appear here...",

    // ==== FILE UPLOAD ====
    orUploadFile: "Or upload a file",
    dropFileHere: "Drag a file here or click to select",
    fileSelected: "File selected",

    // ==== BUTTONS ====
    convertButton: "Convert",
    clearButton: "Clear",
    copyButton: "Copy",
    copied: "Copied!",
    downloadButton: "Download",

    // ==== FILE DETECTION ====
    imageDetected: "Image file detected. See preview below.",
    pdfDetected: "PDF file detected. See preview below.",
    audioDetected: "Audio file detected. See player below.",
    videoDetected: "Video file detected. See player below.",
    fileDetected: "Binary file detected. Click download to save.",

    // ==== ERRORS ====
    emptyInputError: "Please enter text to convert",
    conversionError: "Invalid input for conversion",
    fileError: "Error reading file",
    nothingToCopyError: "Nothing to copy",
    copyError: "Error copying",
  },
  hashGenerator: {
    // ==== TABS ====
    generateTab: "Generate",
    verifyTab: "Verify",
    crackTab: "Crack",

    // ==== TITLES ====
    inputTitle: "Input Text",
    outputTitle: "Hash Outputs",
    verifyInputTitle: "Verification Input",
    verificationResult: "Verification Result",
    crackInputTitle: "Crack Input",
    crackResult: "Crack Result",

    // ==== BUTTONS ====
    generate: "Generate Hashes",
    verifyHash: "Verify Hash",
    startCrack: "Start Cracking",
    stopCrack: "Stop Cracking",
    copy: "Copy",
    paste: "Paste",
    clear: "Clear",

    // ==== HMAC OPTIONS ====
    hmacMode: "HMAC Mode (with Secret Key)",
    secretKey: "Secret Key",
    secretKeyPlaceholder: "Enter your secret key",
    salt: "Salt",
    saltPlaceholder: "Optional salt value",
    optional: "optional",

    // ==== PLACEHOLDERS ====
    placeholder: "Enter text to generate hashes...",
    originalText: "Original Text",
    originalTextPlaceholder: "Enter the original text...",
    hashToVerify: "Hash to Verify",
    hashToVerifyPlaceholder: "Paste the hash to verify...",
    hashToCrack: "Hash to Crack",
    hashToCrackPlaceholder: "Paste the hash to crack...",
    selectAlgorithm: "Algorithm",

    // ==== INFO ====
    infoTitle: "Privacy Note",
    infoText:
      "All hashing happens locally in your browser. Your data never leaves your device.",
    warningTitle: "Educational Warning",
    crackWarning:
      "Hash cracking is for educational and security testing purposes only. Never use this on hashes you don't own or have permission to test.",

    // ==== ALGORITHM INFO ====
    algorithm: "Algorithm",
    standardHash: "Standard Hash",
    generated: "Generated",
    verified: "Verified",
    method: "Method",
    timeTaken: "Time Taken",

    // ==== VERIFICATION ====
    verificationWaiting: "Enter text and hash to verify",
    providedHash: "Provided Hash",
    calculatedHash: "Calculated Hash",
    hashMatch: "Hash Match!",
    hashMatchDesc: "The provided hash matches the calculated hash.",
    hashMismatch: "Hash Mismatch",
    hashMismatchDesc: "The provided hash does not match the calculated hash.",
    emptyInput: "Please provide both text and hash",

    // ==== CRACK MODE ====
    attackMethod: "Attack Method",
    dictionaryAttack: "Dictionary Attack",
    bruteForce: "Brute Force",
    rainbowTable: "Rainbow Table API",
    dictionarySize: "Dictionary Size",
    commonPasswords: "Common Passwords",
    extendedList: "Extended List",
    maxLength: "Maximum Length",
    charset: "Character Set",
    numeric: "Numeric",
    lowercase: "Lowercase",
    alphanumeric: "Alphanumeric",
    crackWaiting: "Enter a hash and click 'Start Cracking'",
    progress: "Progress",
    attempts: "attempts",
    currentAttempt: "Current Attempt",
    crackedText: "Cracked Text",
    crackSuccess: "Hash Cracked!",
    crackSuccessDesc: "The original text has been found.",
    crackFailed: "Hash Not Found",
    crackFailedDesc: "Could not crack the hash with the selected method.",
    crackStopped: "Cracking Stopped",
    crackStoppedDesc: "The cracking process was stopped by the user.",
    crackQuerying: "Querying Rainbow Tables...",
    crackQueryingDesc: "Searching online databases for known hashes...",
    crackFallback: "Falling back to Dictionary",
    crackFallbackDesc: "Online lookup unavailable, using local dictionary...",

    // ==== MESSAGES ====
    secretKeyRequired: "Secret key required for HMAC mode",
    error: "Error generating hashes",
  },
  aesCipher: {
    // ==== TABS ====
    encryptTab: "Encrypt",
    decryptTab: "Decrypt",

    // ==== TITLES ====
    inputTitle: "Plain Text Input",
    encryptedInput: "Encrypted Text Input",
    encryptedOutput: "Encrypted Output",
    decryptedOutput: "Decrypted Output",

    // ==== BUTTONS ====
    encrypt: "Encrypt",
    decrypt: "Decrypt",
    copy: "Copy",
    paste: "Paste",
    clear: "Clear",
    generate: "Generate",
    showPassword: "Show password",
    hidePassword: "Hide password",

    // ==== PASSWORD ====
    password: "Password / Encryption Key",
    passwordPlaceholder: "Enter a strong password...",
    generatePassword: "Generate secure password",

    // ==== PLACEHOLDERS ====
    encryptPlaceholder: "Enter text to encrypt...",
    decryptPlaceholder: "Paste encrypted text here...",
    outputPlaceholder: "Result will appear here...",

    // ==== ADVANCED OPTIONS ====
    advancedOptions: "Advanced Options",
    encryptionMode: "Encryption Mode",
    encryptionModeHelp:
      "Password mode uses PBKDF2 derivation. Manual mode uses direct key/IV.",
    decryptionMode: "Decryption Mode",
    decryptionModeHelp:
      "Auto mode extracts key from password. Manual mode uses provided key/IV.",
    passwordMode: "Password-based (PBKDF2)",
    manualMode: "Manual Key & IV",
    autoMode: "Auto (Password)",
    cipherMode: "Cipher Algorithm",
    cipherModeHelp:
      "GCM provides authentication. CBC is classic mode compatible with most systems.",
    keyEncoding: "Key/IV Encoding",
    keyEncodingHelp:
      "Hex: standard format. UTF-8: for .NET Encoding.UTF8.GetBytes() compatibility.",
    keySize: "AES Key Size",
    keySizeHelp:
      "Select key strength: AES-128 (fast), AES-192 (balanced), AES-256 (maximum security)",
    iterations: "PBKDF2 Iterations",
    iterationsHelp: "Higher = more secure but slower (10,000 - 1,000,000)",
    manualKey: "Encryption Key (Hex)",
    manualIV: "IV / Nonce (Hex)",
    keyHelp: "Any even number of hex characters (e.g., 64 for AES-256)",
    ivHelp: "Any even number of hex characters (depends on cipher mode)",
    generateKey: "Generate random key",
    generateIV: "Generate random IV",
    outputFormat: "Output Format",
    detectedFormat: "Detected Format",
    autoDetect: "Auto-detect",

    // ==== ALGORITHM INFO ====
    algorithm: "Algorithm",
    keyDerivation: "Key Derivation",
    encryptionTime: "Encryption Time",
    decryptionTime: "Decryption Time",

    // ==== STATUS MESSAGES ====
    decryptSuccess: "Decryption successful!",
    decryptError: "Decryption failed",
    encryptError: "Encryption failed",
    emptyInput: "Please enter text to process",
    emptyPassword: "Please enter a password",

    // ==== INFO ====
    infoTitle: "Privacy & Security",
    infoText:
      "All encryption happens locally in your browser. Your data and passwords never leave your device.",
    warningTitle: "Important",
    warningText:
      "Save your password securely! Lost passwords cannot be recovered, and your encrypted data will be permanently inaccessible.",
  },
};

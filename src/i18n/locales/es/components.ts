export default {
  sidebar: {
    title: "Categorías",
    categories: [
      { label: "Archivos", href: "/category/files" },
      { label: "Cifrado", href: "/category/encryption" },
      { label: "Imágenes", href: "/category/images" },
      { label: "Texto", href: "/category/text" },
      { label: "Novedades", href: "/news" },
    ],
  },
  header: {
    title: "Inicio",
    searchPlaceholder: "Busca una herramienta…",
  },
  footer: {
    madeWith: "Hecho con",
    and: "y",
    privacy: "Privacidad",
    terms: "Términos",
    contact: "Contacto",
  },
  search: {
    placeholder: "Busca una herramienta…",
    results: "Resultados de búsqueda",
    noResults: "No se encontraron herramientas",
  },
  recent: {
    title: "Recientes",
    noRecent: "No hay procesos recientes",
    completed: "Completado",
    timeAgo: {
      hoursAgo: "hace {count} h",
      yesterday: "ayer",
    },
  },
  language: {
    changeLanguage: "Cambiar idioma",
    current: "Español",
  },
  aboutUs: [
    {
      name: "Nevits",
      role: "#Developer",
      description: "Me gusta colaborar con la comunidad y crear cosas útiles.",
      alt: "Foto de Nevits",
      image: "/images/team/brian.jpg",
      socials: {
        github: "https://github.com/ItsNevits",
        //linkedin: "https://linkedin.com/in/balavarado",
        twitter: "https://x.com/ItzNevits",
        instagram: "https://www.instagram.com/brian.nevits",
      },
    },
  ],
  processSummary: {
    title: "Procesos realizados",
    items: {
      filesConverted: "Archivos convertidos",
      imagesProcessed: "Imágenes procesadas",
      urlDownloads: "Descargas por URL",
    },
  },
  news: {
    title: "Novedades",
    seeMore: "ver más",
    seeMoreTitle: "Ver todas las novedades",
  },
  modal: {
    press: "Presiona",
    toClose: "para cerrar",
  },
  jsonFormatter: {
    // ==== BUTTONS ====
    paste: "Pegar",
    clear: "Limpiar",
    copy: "Copiar",
    format: "Formatear",
    minify: "Minimizar",

    // ==== TEXTOS ====
    inputTitle: "JSON de entrada",
    outputTitle: "JSON formateado",
    indentSpaces: "Espacios de indentación",
    originalSize: "Tamaño original",
    formattedSize: "Tamaño formateado",

    // ==== MENSAJES ====
    invalidJson: "JSON inválido",
    emptyInput: "Entrada vacía",
    validJson: "JSON válido",
    errorParsing: "Error al analizar JSON",

    // ==== OTROS ====
    modalTitle: "JSON Expandido",
    modalDescription: "Vista detallada del JSON formateado",
  },
  qrGenerator: {
    // ==== BUTTONS ====
    generate: "Generar",
    share: "Compartir",

    // ==== TEXTS ====
    inputTitle: "Texto o URL:",
    qrCodeTitle: "Código QR generado",
    qrCodeDescription:
      "Haz clic derecho en el QR para guardar o usa los botones de descarga.",

    // ==== PLACEHOLDERS ====
    inputPlaceholder: "Introduce el texto o la URL aquí...",
  },
  textAnalyzer: {
    // ==== TEXTOS ====
    inputTitle: "Texto a analizar",
    Words: "Palabras",
    Characters: "Caracteres",
    Paragraphs: "Párrafos",
    WhitOutSpaces: "Sin espacios",
    AdditionalInfo: "Información adicional",
    UniqueWords: "Palabras únicas",

    // ==== PLACEHOLDERS ====
    inputPlaceholder: "Escribe o pega tu texto aquí...",
  },
  zipCompressor: {
    // ==== BUTTONS ====
    compress: "Comprimir",
    compressAndDownload: "Comprimir y descargar",
    delete: "Eliminar",

    // ==== TEXTS ====
    dropFiles: "Suelta los archivos aquí o da clic para seleccionar",
    filesUploaded: "Archivos subidos",
    totalFiles: "Total de archivos",
    processInfo: "Procesando información...",
    previousSize: "Tamaño previo",
    compressSize: "Tamaño comprimido",
  },
  imageConverter: {
    dropFiles: "Suelta los archivos aquí o da clic para seleccionar",
    filesUploaded: "Archivos subidos",
    totalFiles: "Total de archivos",
    DownloadAll: "Descargar todo",
    DownloadAsZip: "Descargar como ZIP",
    Download: "Descargar",
  },
  passwordGenerator: {
    generatedPasswordLabel: "Contraseña generada",
    LengthLabel: "Longitud",
    valuesBetween:
      "El valor debe estar entre 5 y 128. Usa 14 caracteres o más para generar una contraseña fuerte.",
    tip: "Consejo: Usa una mezcla de todos los tipos de caracteres para mayor seguridad.",
  },
  imageCompressor: {
    // ==== DROP ZONE ====
    dropZoneTitle: "Haz clic para subir o arrastra y suelta",
    dropZoneSubtitle: "PNG, JPG, WebP hasta 10MB",

    // ==== SETTINGS ====
    settingsTitle: "Configuración de Compresión",
    maxSize: "Tamaño Máx. (MB)",
    maxSizeHelp: "Tamaño objetivo del archivo en megabytes",
    maxDimension: "Ancho/Alto Máx. (px)",
    maxDimensionHelp: "Dimensión máxima en píxeles",
    quality: "Calidad",
    qualityLower: "Menor tamaño",
    qualityHigher: "Mayor calidad",
    outputFormat: "Formato de Salida",
    formatOriginal: "Mantener Original",
    formatJpeg: "JPEG",
    formatPng: "PNG",
    formatWebp: "WebP",

    // ==== BUTTONS ====
    compress: "Comprimir Imágenes",
    compressing: "Comprimiendo...",
    reset: "Reiniciar",
    downloadAll: "Descargar Todo",
    download: "Descargar",
    creatingZip: "Creando ZIP...",

    // ==== RESULTS ====
    resultsTitle: "Imágenes Comprimidas",
    statTotal: "Total de Imágenes",
    statOriginal: "Tamaño Original",
    statCompressed: "Tamaño Comprimido",

    // ==== MESSAGES ====
    errorSelect: "Por favor selecciona archivos de imagen válidos",
    errorCompressing: "Error al comprimir",
    errorCreatingZip: "Error al crear archivo ZIP",
  },
  base64Converter: {
    // ==== TABS ====
    encode: "Codificar",
    decode: "Decodificar",

    // ==== LABELS ====
    inputLabel: "Texto de entrada",
    outputLabel: "Resultado",
    previewLabel: "Vista previa",
    inputPlaceholder: "Ingresa el texto aquí...",
    outputPlaceholder: "El resultado aparecerá aquí...",

    // ==== FILE UPLOAD ====
    orUploadFile: "O sube un archivo",
    dropFileHere: "Arrastra un archivo aquí o haz clic para seleccionar",
    fileSelected: "Archivo seleccionado",

    // ==== BUTTONS ====
    convertButton: "Convertir",
    clearButton: "Limpiar",
    copyButton: "Copiar",
    copied: "¡Copiado!",
    downloadButton: "Descargar",

    // ==== FILE DETECTION ====
    imageDetected: "Imagen detectada. Ver vista previa abajo.",
    pdfDetected: "PDF detectado. Ver vista previa abajo.",
    audioDetected: "Audio detectado. Ver reproductor abajo.",
    videoDetected: "Video detectado. Ver reproductor abajo.",
    fileDetected:
      "Archivo binario detectado. Haz clic en descargar para guardar.",

    // ==== ERRORS ====
    emptyInputError: "Por favor ingresa texto para convertir",
    conversionError: "Entrada inválida para conversión",
    fileError: "Error al leer el archivo",
    nothingToCopyError: "No hay nada para copiar",
    copyError: "Error al copiar",
  },
  hashGenerator: {
    // ==== PESTAÑAS ====
    generateTab: "Generar",
    verifyTab: "Verificar",
    crackTab: "Descifrar",

    // ==== TÍTULOS ====
    inputTitle: "Texto de Entrada",
    outputTitle: "Hashes Generados",
    verifyInputTitle: "Entrada de Verificación",
    verificationResult: "Resultado de Verificación",
    crackInputTitle: "Entrada para Descifrar",
    crackResult: "Resultado de Descifrado",

    // ==== BOTONES ====
    generate: "Generar Hashes",
    verifyHash: "Verificar Hash",
    startCrack: "Iniciar Descifrado",
    stopCrack: "Detener Descifrado",
    copy: "Copiar",
    paste: "Pegar",
    clear: "Limpiar",

    // ==== OPCIONES HMAC ====
    hmacMode: "Modo HMAC (con Clave Secreta)",
    secretKey: "Clave Secreta",
    secretKeyPlaceholder: "Ingresa tu clave secreta",
    salt: "Salt",
    saltPlaceholder: "Valor salt opcional",
    optional: "opcional",

    // ==== PLACEHOLDERS ====
    placeholder: "Ingresa texto para generar hashes...",
    originalText: "Texto Original",
    originalTextPlaceholder: "Ingresa el texto original...",
    hashToVerify: "Hash a Verificar",
    hashToVerifyPlaceholder: "Pega el hash a verificar...",
    hashToCrack: "Hash a Descifrar",
    hashToCrackPlaceholder: "Pega el hash a descifrar...",
    selectAlgorithm: "Algoritmo",

    // ==== INFORMACIÓN ====
    infoTitle: "Nota de Privacidad",
    infoText:
      "Todo el hashing ocurre localmente en tu navegador. Tus datos nunca salen de tu dispositivo.",
    warningTitle: "Advertencia Educativa",
    crackWarning:
      "El descifrado de hashes es solo para propósitos educativos y pruebas de seguridad. Nunca uses esto en hashes que no te pertenezcan o no tengas permiso para probar.",

    // ==== INFO DE ALGORITMO ====
    algorithm: "Algoritmo",
    standardHash: "Hash Estándar",
    generated: "Generado",
    verified: "Verificado",
    method: "Método",
    timeTaken: "Tiempo Transcurrido",

    // ==== VERIFICACIÓN ====
    verificationWaiting: "Ingresa texto y hash para verificar",
    providedHash: "Hash Proporcionado",
    calculatedHash: "Hash Calculado",
    hashMatch: "¡Hash Coincidente!",
    hashMatchDesc: "El hash proporcionado coincide con el hash calculado.",
    hashMismatch: "Hash No Coincide",
    hashMismatchDesc:
      "El hash proporcionado no coincide con el hash calculado.",
    emptyInput: "Por favor proporciona tanto el texto como el hash",

    // ==== MODO DESCIFRADO ====
    attackMethod: "Método de Ataque",
    dictionaryAttack: "Ataque de Diccionario",
    bruteForce: "Fuerza Bruta",
    rainbowTable: "API de Tabla Arcoíris",
    dictionarySize: "Tamaño del Diccionario",
    commonPasswords: "Contraseñas Comunes",
    extendedList: "Lista Extendida",
    maxLength: "Longitud Máxima",
    charset: "Conjunto de Caracteres",
    numeric: "Numérico",
    lowercase: "Minúsculas",
    alphanumeric: "Alfanumérico",
    crackWaiting: "Ingresa un hash y haz clic en 'Iniciar Descifrado'",
    progress: "Progreso",
    attempts: "intentos",
    currentAttempt: "Intento Actual",
    crackedText: "Texto Descifrado",
    crackSuccess: "¡Hash Descifrado!",
    crackSuccessDesc: "El texto original ha sido encontrado.",
    crackFailed: "Hash No Encontrado",
    crackFailedDesc: "No se pudo descifrar el hash con el método seleccionado.",
    crackStopped: "Descifrado Detenido",
    crackStoppedDesc: "El proceso de descifrado fue detenido por el usuario.",
    crackQuerying: "Consultando Tablas Arcoíris...",
    crackQueryingDesc:
      "Buscando en bases de datos en línea de hashes conocidos...",
    crackFallback: "Recurriendo al Diccionario",
    crackFallbackDesc:
      "Búsqueda en línea no disponible, usando diccionario local...",

    // ==== MENSAJES ====
    secretKeyRequired: "Se requiere clave secreta para modo HMAC",
    error: "Error al generar hashes",
  },
  aesCipher: {
    // ==== PESTAÑAS ====
    encryptTab: "Cifrar",
    decryptTab: "Descifrar",

    // ==== TÍTULOS ====
    inputTitle: "Entrada de Texto Plano",
    encryptedInput: "Entrada de Texto Cifrado",
    encryptedOutput: "Salida Cifrada",
    decryptedOutput: "Salida Descifrada",

    // ==== BOTONES ====
    encrypt: "Cifrar",
    decrypt: "Descifrar",
    copy: "Copiar",
    paste: "Pegar",
    clear: "Limpiar",
    generate: "Generar",
    showPassword: "Mostrar contraseña",
    hidePassword: "Ocultar contraseña",

    // ==== CONTRASEÑA ====
    password: "Contraseña / Clave de Cifrado",
    passwordPlaceholder: "Ingresa una contraseña fuerte...",
    generatePassword: "Generar contraseña segura",

    // ==== PLACEHOLDERS ====
    encryptPlaceholder: "Ingresa texto para cifrar...",
    decryptPlaceholder: "Pega el texto cifrado aquí...",
    outputPlaceholder: "El resultado aparecerá aquí...",

    // ==== OPCIONES AVANZADAS ====
    advancedOptions: "Opciones Avanzadas",
    encryptionMode: "Modo de Cifrado",
    encryptionModeHelp:
      "El modo contraseña usa derivación PBKDF2. El modo manual usa clave/IV directo.",
    decryptionMode: "Modo de Descifrado",
    decryptionModeHelp:
      "El modo auto extrae la clave de la contraseña. El modo manual usa clave/IV proporcionado.",
    passwordMode: "Basado en Contraseña (PBKDF2)",
    manualMode: "Clave e IV Manual",
    autoMode: "Auto (Contraseña)",
    cipherMode: "Algoritmo de Cifrado",
    cipherModeHelp:
      "GCM proporciona autenticación. CBC es el modo clásico compatible con la mayoría de sistemas.",
    keyEncoding: "Codificación de Clave/IV",
    keyEncodingHelp:
      "Hex: formato estándar. UTF-8: para compatibilidad con .NET Encoding.UTF8.GetBytes().",
    keySize: "Tamaño de Clave AES",
    keySizeHelp:
      "Seleccione la fuerza de la clave: AES-128 (rápido), AES-192 (equilibrado), AES-256 (máxima seguridad)",
    iterations: "Iteraciones PBKDF2",
    iterationsHelp: "Mayor = más seguro pero más lento (10,000 - 1,000,000)",
    manualKey: "Clave de Cifrado (Hex)",
    manualIV: "IV / Nonce (Hex)",
    keyHelp:
      "Cualquier número par de caracteres hexadecimales (ej., 64 para AES-256)",
    ivHelp:
      "Cualquier número par de caracteres hexadecimales (depende del modo de cifrado)",
    outputFormat: "Formato de Salida",
    detectedFormat: "Formato Detectado",
    autoDetect: "Auto-detectar",

    // ==== INFO DE ALGORITMO ====
    algorithm: "Algoritmo",
    keyDerivation: "Derivación de Clave",
    encryptionTime: "Tiempo de Cifrado",
    decryptionTime: "Tiempo de Descifrado",

    // ==== MENSAJES DE ESTADO ====
    decryptSuccess: "¡Descifrado exitoso!",
    decryptError: "Error al descifrar",
    encryptError: "Error al cifrar",
    emptyInput: "Por favor ingresa texto para procesar",
    emptyPassword: "Por favor ingresa una contraseña",

    // ==== INFORMACIÓN ====
    infoTitle: "Privacidad y Seguridad",
    infoText:
      "Todo el cifrado ocurre localmente en tu navegador. Tus datos y contraseñas nunca salen de tu dispositivo.",
    warningTitle: "Importante",
    warningText:
      "¡Guarda tu contraseña de forma segura! Las contraseñas perdidas no se pueden recuperar, y tus datos cifrados serán permanentemente inaccesibles.",
  },
};

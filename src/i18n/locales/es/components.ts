export default {
  sidebar: {
    title: "Categorías",
    categories: [
      { label: "Archivos", href: "/category/files" },
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
  aboutUs: {
    title: "Sobre mí",
    description: "Me gusta colaborar con la comunidad y crear cosas útiles.",
    alt: "Sobre mí",
  },
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
};

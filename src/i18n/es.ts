export default {
  languageLabel: "Español",
  languageOptions: {
    es: "Español",
    en: "Inglés",
  },

  // ===== PÁGINAS =====
  sites: {
    home: {
      hero: {
        title: "Tu caja de herramientas en la web.",
        description:
          "Convierte, edita y automatiza tus archivos sin instalar nada. Arrastra y suelta o explora las herramientas más usadas.",
      },
    },
    files: {
      hero: {
        title: "Herramientas de archivos.",
        description:
          "Herramientas gratuitas para manipular y convertir archivos.",
      },
    },
    images: {
      hero: {
        title: "Herramientas de imágenes.",
        description: "Herramientas gratuitas para editar y procesar imágenes.",
      },
    },
    text: {
      hero: {
        title: "Herramientas de texto.",
        description: "Herramientas gratuitas para manipular y analizar texto.",
      },
    },
    news: {
      hero: {
        title: "Novedades",
        description:
          "Mantente al día con las últimas actualizaciones y mejoras.",
      },
    },
    privacy: {
      hero: {
        title: "Política de privacidad",
        description: "Cómo manejamos y protegemos tu información en UtiliPad",
      },
    },
    terms: {
      hero: {
        title: "Términos de servicio",
        description: "Los términos y condiciones para usar UtiliPad",
      },
    },
    contact: {
      hero: {
        title: "Contacto",
        description:
          "¿Tienes una sugerencia, encontraste un error o quieres proponer una nueva herramienta?",
      },
    },
  },

  // ===== COMPONENTES =====
  components: {
    sidebar: {
      title: "Categorías",
      categories: [
        { label: "Archivos", href: "/files" },
        { label: "Imágenes", href: "/images" },
        { label: "Texto", href: "/text" },
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
      title: "Quienes somos",
      description:
        "Solo nos gusta colaborar con la comunidad y crear cosas útiles.",
      alt: "Acerca de nosotros",
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
  },

  // ===== HERRAMIENTAS =====
  tools: {
    categories: {
      files: "Archivos",
      images: "Imágenes",
      text: "Texto",
      news: "Novedades",
    },
    categoryTitles: {
      files: "Herramientas de Archivos",
      images: "Herramientas de Imágenes",
      text: "Herramientas de Texto",
    },
    categoryDescriptions: {
      files: "Herramientas gratuitas para manipular y convertir archivos.",
      images: "Herramientas gratuitas para editar y procesar imágenes.",
      text: "Herramientas gratuitas para manipular y analizar texto.",
    },
    items: {
      "zip-files": {
        name: "Crear ZIP",
        description: "Comprime archivos en formato ZIP",
      },
      "file-converter": {
        name: "Convertir archivos",
        description: "Convierte entre diferentes formatos de archivo",
      },
      "image-compress": {
        name: "Comprimir imagen",
        description: "Reduce el tamaño de tus imágenes",
      },
      "image-resize": {
        name: "Redimensionar",
        description: "Cambia las dimensiones de la imagen",
      },
      "image-crop": {
        name: "Recortar Imagen",
        description: "Recorta partes específicas de la imagen",
      },
      "image-format": {
        name: "Convertir Formato",
        description: "Convierte entre JPG, PNG, WebP, etc.",
      },
      "json-formatter": {
        name: "Formateador JSON",
        description: "Formatea, valida y embellece código JSON",
      },
      "text-analyzer": {
        name: "Analizador de textos",
        description: "Cuenta palabras, caracteres y párrafos",
      },
      "qr-generator": {
        name: "Generador de QR",
        description: "Genera códigos QR para URLs y texto",
      },
    },
    badges: {
      Nuevo: "Nuevo",
      Proximamente: "Próximamente",
    },
    actions: {
      open: "Abrir",
      searchShortcut: "⌘K para buscar",
      searchShortcutWin: "Ctrl+K para buscar",
    },
    messages: {
      notImplemented: "Sin implementar",
      otherToolsPrefix: "Otras herramientas de",
      otherToolsSuffix: "",
      noMoreTools: "No hay más herramientas disponibles en esta categoría.",
    },
  },
};

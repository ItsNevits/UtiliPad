export default {
  languageLabel: "Español",
  languageOptions: {
    es: "Español",
    en: "Inglés",
  },

  // ===== SEO =====
  seo: {
    title: "UtiliPad — Herramientas web gratis",
    description:
      "Suite de utilidades online: formateador y validador JSON, analizador de texto, compresor/redimensionador de imágenes y más. Rápido, gratis y sin registro.",
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
      completeReading: "Lectura completa",
      readMore: "Leer más",
      noPosts: "No hay publicaciones disponibles.",
      noPostsDesc: "Pronto añadiremos nuevas actualizaciones sobre UtiliPad.",
      statisticsTitle: "Estadísticas",
      statisticsDescription: "Resumen de noticias publicadas",
      articles: "Artículos",
    },
    privacy: {
      hero: {
        title: "Política de privacidad",
        description: "Cómo manejamos y protegemos tu información en UtiliPad",
      },
      content: [
        {
          title: "Información que recopilamos",
          paragraphs: [
            '<strong class="underline">Procesamiento local:</strong> Todas las herramientas (JSON Formatter, Word Counter, etc.) procesan tus archivos localmente en tu navegador.',
            '<strong class="underline">No almacenamos archivos:</strong> Tus documentos, imágenes y datos nunca se almacenan en nuestros servidores.',
            '<strong class="underline">Analítica:</strong> Utilizamos Google Analytics para mejorar la experiencia del usuario.',
          ],
        },
        {
          title: "Cookies y almacenamiento",
          paragraphs: [
            "Solo utilizamos cookies técnicas necesarias para el funcionamiento de la aplicación.",
          ],
        },
        {
          title: "Anonimato del usuario",
          paragraphs: [
            "Puedes usar todas nuestras herramientas sin registro ni identificación personal.",
          ],
        },
      ],
    },
    terms: {
      hero: {
        title: "Términos de servicio",
        description: "Los términos y condiciones para usar UtiliPad",
      },
      content: [
        {
          title: "Uso del servicio",
          paragraphs: [
            '<strong class="underline">Gratuito:</strong> Todas las herramientas son completamente gratuitas.',
            '<strong class="underline">Sin límites:</strong> No hay restricciones en el uso de nuestras herramientas.',
            '<strong class="underline">Responsabilidad:</strong> El usuario es responsable del contenido que procesa.',
          ],
        },
        {
          title: "Limitaciones",
          paragraphs: [
            'Las herramientas se proporcionan "tal como están" sin garantías de funcionamiento perfecto.',
          ],
        },
        {
          title: "Propiedad intelectual",
          paragraphs: [
            "El código fuente está disponible bajo licencia MIT. Los contenidos procesados pertenecen al usuario.",
          ],
        },
      ],
    },
    contact: {
      hero: {
        title: "Contacto",
        description:
          "¿Tienes una sugerencia, encontraste un error o quieres proponer una nueva herramienta?",
      },
      contactInfo: {
        title: "Información de contacto",
        helpWith: {
          title: "¿En qué podemos ayudarte?",
          items: [
            "Reportar errores o bugs",
            "Sugerir nuevas herramientas",
            "Mejorar herramientas existentes",
            "Colaborar en el proyecto",
            "Preguntas generales",
          ],
        },
        responseTime: {
          icon: "⚡",
          title: "Tiempo de respuesta",
          description: "24-48 horas",
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
        title: "Envíanos un mensaje",
        fields: {
          name: {
            label: "Nombre",
            placeholder: "Tu nombre",
          },
          email: {
            label: "Email",
            placeholder: "tu@email.com",
          },
          subject: {
            label: "Asunto",
            placeholder: "Selecciona un asunto",
            options: [
              { value: "", label: "Selecciona un asunto" },
              { value: "bug", label: "Reportar error" },
              { value: "feature", label: "Sugerir herramienta" },
              { value: "improvement", label: "Mejora existente" },
              { value: "collaboration", label: "Colaboración" },
              { value: "other", label: "Otro" },
            ],
          },
          message: {
            label: "Mensaje",
            placeholder: "Describe tu consulta, sugerencia o problema...",
          },
        },
        submit: {
          default: "Enviar mensaje",
          sending: "Enviando...",
          success: "✓ Mensaje enviado correctamente. Te responderemos pronto.",
          error: "✗ Error al enviar el mensaje. Inténtalo de nuevo.",
        },
      },
      faq: {
        title: "Preguntas Frecuentes",
        items: [
          {
            question: "¿UtiliPad es realmente gratuito?",
            answer:
              "Sí, todas las herramientas son completamente gratuitas y sin límites de uso. Es un proyecto open source.",
          },
          {
            question: "¿Mis archivos se envían a algún servidor?",
            answer:
              "No, todo el procesamiento se hace en nuestra API open source.\nTus archivos nunca se envían a ningún servidor.\nPuedes revisar el código en GitHub.",
          },
          {
            question: "¿Puedo sugerir nuevas herramientas?",
            answer:
              "¡Por supuesto! Envíanos tus ideas a través del formulario de contacto o crea un issue en GitHub.",
          },
          {
            question: "¿Cómo puedo contribuir al proyecto?",
            answer: "Puedes contribuir reportando bugs, sugiriendo mejoras.",
          },
        ],
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
    modal: {
      press: "Presiona",
      toClose: "para cerrar",
    },
    jsonFormatter: {
      // ==== BUTTONS ====
      paste: "Pegar",
      clear: "Limpiar",
      copy: "Copiar",
      download: "Descargar",
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
      download: "Descargar",
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
      download: "Descargar",
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

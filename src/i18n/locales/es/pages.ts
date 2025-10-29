export default {
  home: {
    title: "Desbloquea tu potencial con nuestra suite de herramientas",
    description:
      "Eleva tu productividad con nuestra completa colección de herramientas en línea diseñadas para simplificar tus tareas.",
  },
  news: {
    title: "Novedades",
    description: "Mantente al día con las últimas actualizaciones y mejoras.",
    completeReading: "Lectura completa",
    readMore: "Leer más",
    noPosts: "No hay publicaciones disponibles.",
    noPostsDesc: "Pronto añadiremos nuevas actualizaciones sobre UtiliPad.",
    statisticsTitle: "Estadísticas",
    statisticsDescription: "Resumen de noticias publicadas",
    articles: "Artículos",
    pagination: {
      previous: "Anterior",
      next: "Siguiente",
      page: "Página",
      of: "de",
    },
  },
  privacy: {
    title: "Política de Privacidad",
    description: "Cómo manejamos y protegemos tu información en UtiliPad",
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
    title: "Términos de servicio",
    description: "Los términos y condiciones para usar UtiliPad",
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
    title: "Contacto",
    description:
      "¿Tienes una sugerencia, encontraste un error o quieres proponer una nueva herramienta?",
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
          description: "https://github.com/ItsNevits/UtiliPad",
          href: "https://github.com/ItsNevits/UtiliPad",
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
};

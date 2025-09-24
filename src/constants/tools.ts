export interface Tool {
  id: string;
  name: string; // Este será el fallback si no hay traducción
  description: string; // Este será el fallback si no hay traducción
  href: string;
  bagde: string;
  isAvailable: boolean;
  component: string;
}

export interface Category {
  id: string;
  name: string; // Este será el fallback si no hay traducción
  title: string; // Este será el fallback si no hay traducción
  description: string; // Este será el fallback si no hay traducción
  tools: Tool[];
}

export const TOOLS_CATEGORIES: Category[] = [
  {
    title: "Herramientas de Archivos",
    description: "Herramientas gratuitas para manipular y convertir archivos.",
    id: "files",
    name: "Archivos",
    tools: [
      {
        id: "zip-files",
        name: "Crear ZIP",
        description: "Comprime archivos en formato ZIP",
        href: "/files?tool=zip-files",
        bagde: "Nuevo",
        isAvailable: true,
        component: "ZipCompressor",
      },
      {
        id: "file-converter",
        name: "Convertir archivos",
        description: "Convierte entre diferentes formatos de archivo",
        href: "/files?tool=file-converter",
        bagde: "Proximamente",
        isAvailable: false,
        component: "FileConverter",
      },
    ],
  },
  {
    title: "Herramientas de Imágenes",
    description: "Herramientas gratuitas para editar y procesar imágenes.",
    id: "images",
    name: "Imágenes",
    tools: [
      {
        id: "image-compress",
        name: "Comprimir imagen",
        description: "Reduce el tamaño de tus imágenes",
        href: "/images?tool=image-compress",
        bagde: "Proximamente",
        isAvailable: false,
        component: "ImageCompressor",
      },
      {
        id: "image-resize",
        name: "Redimensionar",
        description: "Cambia las dimensiones de la imagen",
        href: "/images?tool=image-resize",
        bagde: "Proximamente",
        isAvailable: false,
        component: "ImageResizer",
      },
      {
        id: "image-crop",
        name: "Recortar Imagen",
        description: "Recorta partes específicas de la imagen",
        href: "/images?tool=image-crop",
        bagde: "Proximamente",
        isAvailable: false,
        component: "ImageCropper",
      },
      {
        id: "image-format",
        name: "Convertir Formato",
        description: "Convierte entre JPG, PNG, WebP, etc.",
        href: "/images?tool=image-format",
        bagde: "Proximamente",
        isAvailable: false,
        component: "ImageFormatConverter",
      },
    ],
  },
  {
    title: "Herramientas de Texto",
    description: "Herramientas gratuitas para manipular y analizar texto.",
    id: "text",
    name: "Texto",
    tools: [
      {
        id: "json-formatter",
        name: "Formateador JSON",
        description: "Formatea, valida y embellece código JSON",
        href: "/text?tool=json-formatter",
        bagde: "Nuevo",
        isAvailable: true,
        component: "JsonFormatter",
      },
      {
        id: "text-analyzer",
        name: "Analizador de textos",
        description: "Cuenta palabras, caracteres y párrafos",
        href: "/text?tool=text-analyzer",
        bagde: "Nuevo",
        isAvailable: true,
        component: "TextAnalyzer",
      },
      {
        id: "qr-generator",
        name: "Generador de QR",
        description: "Genera códigos QR para URLs y texto",
        href: "/text?tool=qr-generator",
        bagde: "Nuevo",
        isAvailable: true,
        component: "QrGenerator",
      },
    ],
  },
];

// Obtener herramientas por categoría
export const getToolsByCategory = (categoryId: string) => {
  const category = TOOLS_CATEGORIES.find((cat) => cat.id === categoryId);
  return category ? category.tools : [];
};

// Buscar herramienta por ID
export const getToolById = (toolId: string) => {
  return TOOLS_CATEGORIES.flatMap((category) => category.tools).find(
    (tool) => tool.id === toolId
  );
};

// Buscar herramientas por texto
export const searchTools = (query: string) => {
  const lowerQuery = query.toLowerCase();
  return TOOLS_CATEGORIES.flatMap((category) => category.tools).filter(
    (tool) =>
      tool.name.toLowerCase().includes(lowerQuery) ||
      tool.description.toLowerCase().includes(lowerQuery)
  );
};

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
        href: "/tools/zip-files",
        bagde: "",
        isAvailable: true,
        component: "ZipCompressor",
      },
      {
        id: "file-converter",
        name: "Convertir archivos",
        description: "Convierte entre diferentes formatos de archivo",
        href: "/tools/file-converter",
        bagde: "",
        isAvailable: true,
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
        href: "/tools/image-compress",
        bagde: "",
        isAvailable: true,
        component: "ImageCompressor",
      },
      {
        id: "image-resize",
        name: "Redimensionar",
        description: "Cambia las dimensiones de la imagen",
        href: "/tools/image-resize",
        bagde: "Proximamente",
        isAvailable: false,
        component: "ImageResizer",
      },
      {
        id: "image-crop",
        name: "Recortar Imagen",
        description: "Recorta partes específicas de la imagen",
        href: "/tools/image-crop",
        bagde: "Proximamente",
        isAvailable: false,
        component: "ImageCropper",
      },
      {
        id: "image-converter",
        name: "Convertidor de imágenes",
        description: "Convierte entre JPG, PNG, WebP, etc.",
        href: "/tools/image-converter",
        bagde: "",
        isAvailable: true,
        component: "ImageConverter",
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
        href: "/tools/json-formatter",
        bagde: "",
        isAvailable: true,
        component: "JsonFormatter",
      },
      {
        id: "text-analyzer",
        name: "Analizador de textos",
        description: "Cuenta palabras, caracteres y párrafos",
        href: "/tools/text-analyzer",
        bagde: "",
        isAvailable: true,
        component: "TextAnalyzer",
      },
      {
        id: "qr-generator",
        name: "Generador de QR",
        description: "Genera códigos QR para URLs y texto",
        href: "/tools/qr-generator",
        bagde: "",
        isAvailable: true,
        component: "QrGenerator",
      },
      {
        id: "password-generator",
        name: "Generador de contraseñas",
        description: "Genera contraseñas seguras y aleatorias",
        href: "/tools/password-generator",
        bagde: "",
        isAvailable: true,
        component: "PasswordGenerator",
      },
      {
        id: "base64-converter",
        name: "Convertidor Base64",
        description: "Codifica y decodifica texto en Base64",
        href: "/tools/base64-converter",
        bagde: "",
        isAvailable: true,
        component: "Base64Converter",
      },
      {
        id: "hash-generator",
        name: "Generador de Hash",
        description: "Genera hashes MD5, SHA-1, SHA-256 y SHA-512",
        href: "/tools/hash-generator",
        bagde: "Nuevo",
        isAvailable: true,
        component: "HashGenerator",
      },
      {
        id: "aes-cipher",
        name: "Cifrado AES",
        description: "Cifrado AES-128/192/256 en modo GCM/CBC con compatibilidad .NET",
        href: "/tools/aes-cipher",
        bagde: "Nuevo",
        isAvailable: true,
        component: "AESCipher",
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

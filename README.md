# 🛠️ UtiliPad# Astro Starter Kit: Minimal

**Una suite moderna de herramientas web gratuitas construida con Astro.js**```sh

pnpm create astro@latest -- --template minimal

![License](https://img.shields.io/badge/license-MIT-blue.svg)```

![Astro](https://img.shields.io/badge/Astro-5.13.9-ff5d01.svg)

![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.13-38bdf8.svg)> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178c6.svg)

## 🚀 Project Structure

---

Inside of your Astro project, you'll see the following folders and files:

## 🚀 Características

````text

### ⚡ **Rendimiento Optimizado**/

- **Astro.js**: SSR/SSG para máxima velocidad├── public/

- **Componentes Island**: Hidratación selectiva├── src/

- **TypeScript**: Tipado estático para mayor confiabilidad│   └── pages/

- **Bundle optimizado**: Assets minificados y optimizados│       └── index.astro

└── package.json

### 🎨 **Diseño Moderno**```

- **TailwindCSS 4.x**: Sistema de diseño utilitario

- **Responsive**: Adaptado para móvil, tablet y desktopAstro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

- **Tema oscuro**: Interfaz elegante y profesional

- **Animaciones GSAP**: Transiciones suaves y profesionalesThere's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.



### 🔧 **Arquitectura Robusta**Any static assets, like images, can be placed in the `public/` directory.

- **Routing dinámico**: Sistema unificado de páginas

- **Estado global**: Gestión con Nanostores## 🧞 Commands

- **Componentes reutilizables**: Arquitectura modular

- **Modal compartido**: Sistema centralizado de modalesAll commands are run from the root of the project, from a terminal:



---| Command                   | Action                                           |

| :------------------------ | :----------------------------------------------- |

## 🏗️ Estructura del Proyecto| `pnpm install`             | Installs dependencies                            |

| `pnpm dev`             | Starts local dev server at `localhost:4321`      |

```| `pnpm build`           | Build your production site to `./dist/`          |

UtiliPad/| `pnpm preview`         | Preview your build locally, before deploying     |

├── 📁 public/| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |

│   ├── favicon.svg| `pnpm astro -- --help` | Get help using the Astro CLI                     |

│   └── assets/

├── 📁 src/## 👀 Want to learn more?

│   ├── 📁 animate/

│   │   └── timeline.ts          # Animaciones GSAPFeel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

│   ├── 📁 assets/
│   │   ├── gifs/
│   │   ├── icons/
│   │   └── images/
│   ├── 📁 components/
│   │   ├── 📁 shared/           # Componentes reutilizables
│   │   │   ├── Modal.astro      # Modal compartido
│   │   │   ├── BreadCrumbs.astro
│   │   │   ├── Hero.astro
│   │   │   └── Search.astro     # Buscador con navegación
│   │   ├── 📁 tools/            # Herramientas específicas
│   │   │   ├── JsonFormatter.astro
│   │   │   └── WordCounter.astro
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── SideBar.astro        # Navegación de categorías
│   │   └── Aside.astro
│   ├── 📁 constants/
│   │   └── tools.ts             # Configuración de herramientas
│   ├── 📁 Layouts/
│   │   └── MainLayout.astro     # Layout principal
│   ├── 📁 pages/
│   │   ├── index.astro          # Página de inicio
│   │   ├── [categoryId].astro   # Routing dinámico
│   │   └── 404.astro
│   ├── 📁 stores/
│   │   └── modal.ts             # Estado global del modal
│   └── 📁 styles/
│       └── global.css           # Estilos globales
````

---

## 🛠️ Herramientas Disponibles

### 📄 **Texto**

- **🔧 Formateador JSON**: Formatea, valida y visualiza JSON con syntax highlighting
- **📊 Analizador de Texto**: Estadísticas completas de palabras, caracteres y párrafos

### 📁 **Archivos** _(Próximamente)_

- **📦 Crear ZIP**: Compresión de archivos
- **🔄 Convertidor de Archivos**: Conversión entre formatos

### 🖼️ **Imágenes** _(Próximamente)_

- **🗜️ Comprimir Imagen**: Reducción de tamaño
- **📐 Redimensionar**: Cambio de dimensiones
- **✂️ Recortar**: Cropping preciso
- **🔄 Convertir Formato**: JPG, PNG, WebP, etc.

---

## 🚀 Instalación y Uso

### **Prerrequisitos**

- Node.js 18+
- pnpm (recomendado) o npm

### **Instalación**

```bash
# Clonar el repositorio
git clone <repository-url>
cd UtiliPad/Front

# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev
```

### **Scripts Disponibles**

```bash
pnpm dev        # Servidor de desarrollo (localhost:4321)
pnpm build      # Construir para producción
pnpm preview    # Vista previa de build
```

---

## 🏗️ Arquitectura Técnica

### **🎯 Routing Dinámico**

El sistema utiliza `[categoryId].astro` para manejar todas las categorías y herramientas:

```astro
---
// Genera rutas dinámicas para todas las categorías
export async function getStaticPaths() {
  return TOOLS_CATEGORIES.map(category => ({
    params: { categoryId: category.id },
    props: { category }
  }));
}
---
```

### **🔄 Sistema de Componentes**

Mapeo dinámico de componentes de herramientas:

```typescript
const COMPONENT_MAP = {
  JsonFormatter: JsonFormatter,
  WordCounter: WordCounter,
  // Más componentes...
};
```

### **📡 Estado Global**

Gestión centralizada con Nanostores:

```typescript
// stores/modal.ts
export const modalStore = atom<ModalState>({
  isOpen: false,
  title: "",
  content: null,
});
```

### **🔍 Sistema de Búsqueda**

Búsqueda inteligente con navegación por teclado:

```typescript
export const searchTools = (query: string) => {
  return TOOLS_CATEGORIES.flatMap((category) => category.tools).filter(
    (tool) =>
      tool.name.toLowerCase().includes(query.toLowerCase()) ||
      tool.description.toLowerCase().includes(query.toLowerCase())
  );
};
```

---

## 🎨 Stack Tecnológico

| Tecnología            | Versión | Propósito                     |
| --------------------- | ------- | ----------------------------- |
| **Astro.js**          | 5.13.9  | Framework principal (SSR/SSG) |
| **TailwindCSS**       | 4.1.13  | Sistema de diseño utilitario  |
| **TypeScript**        | Latest  | Tipado estático               |
| **GSAP**              | 3.13.0  | Animaciones profesionales     |
| **Nanostores**        | 1.0.1   | Estado global reactivo        |
| **json-formatter-js** | 2.5.23  | Visualización de JSON         |

---

## 🔧 Configuración

### **Astro Config**

```javascript
// astro.config.mjs
export default defineConfig({
  integrations: [tailwind()],
  output: "static", // o 'server' para SSR
});
```

### **TailwindCSS**

Configuración con tema personalizado:

- Variables CSS custom
- Scrollbars profesionales
- Paleta de colores oscura
- Componentes reutilizables

---

## 🚀 Desarrollo

### **Agregar Nueva Herramienta**

1. **Crear el componente**:

```astro
<!-- src/components/tools/MiHerramienta.astro -->
---
// Lógica del componente
---

<div class="tool-container">
  <!-- UI de la herramienta -->
</div>

<script>
  // Funcionalidad JavaScript
</script>
```

2. **Registrar en tools.ts**:

```typescript
{
  id: "mi-herramienta",
  name: "Mi Herramienta",
  description: "Descripción de la herramienta",
  href: "/categoria?tool=mi-herramienta",
  component: "MiHerramienta"
}
```

3. **Agregar al COMPONENT_MAP**:

```typescript
const COMPONENT_MAP = {
  // ... otros componentes
  MiHerramienta: MiHerramienta,
};
```

### **Usar el Modal Compartido**

```typescript
import { openModal } from "../../stores/modal";

openModal({
  title: "Título del Modal",
  description: "Descripción opcional",
  content: elementoHTML,
  onCopy: () => {
    /* lógica de copiado */
  },
});
```

---

## 🎯 Roadmap

### **Fase 1** ✅ _Completado_

- [x] Arquitectura base con Astro.js
- [x] Sistema de routing dinámico
- [x] Componentes de texto (JSON Formatter, Word Counter)
- [x] Modal compartido con estado global
- [x] Diseño responsive y animaciones

### **Fase 2** 🔄 _En Desarrollo_

- [ ] Herramientas de archivos (ZIP, conversiones)
- [ ] Herramientas de imagen (compresión, resize)
- [ ] Sistema de favoritos
- [ ] Historial de uso

### **Fase 3** 📋 _Planificado_

- [ ] Herramientas avanzadas (código, criptografía)
- [ ] Modo offline (PWA)
- [ ] Configuraciones personalizables
- [ ] Exportación masiva

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

## 🌟 Agradecimientos

- **Astro Team** - Por el increíble framework
- **TailwindCSS** - Por el sistema de diseño
- **GSAP** - Por las animaciones profesionales
- **Comunidad Open Source** - Por las librerías y herramientas

---

<div align="center">

**✨ Hecho con ❤️ y mucho ☕**

</div>

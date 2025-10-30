# README - Rediseño UI/UX UtiliPad

## 🎨 Resumen del Rediseño

Este documento detalla los cambios de diseño implementados en UtiliPad para crear una interfaz más moderna, limpia y profesional. El rediseño se basa en una paleta de colores claros con acentos en verde esmeralda (emerald).

---

## 📋 Tabla de Contenidos

1. [Paleta de Colores](#paleta-de-colores)
2. [Tipografía](#tipografía)
3. [Componentes Modificados](#componentes-modificados)
4. [Layout Principal](#layout-principal)
5. [Guía de Uso](#guía-de-uso)

---

## 🎨 Paleta de Colores

### Colores Principales

| Uso | Color | Código Hex | Tailwind Class |
|-----|-------|------------|----------------|
| Fondo Principal | Blanco | `#FFFFFF` | `bg-white` |
| Fondo Secundario | Gris Claro | `#DDDFE0` | `bg-[#dddfe0]` |
| Texto Principal | Gris Oscuro | `#262626` | `text-neutral-800` |
| Texto Secundario | Gris Medio | `#525252` | `text-neutral-700` |
| Texto Terciario | Gris | `#737373` | `text-neutral-600` |
| Acento Principal | Verde Esmeralda | `#10B981` | `text-emerald-500` |
| Acento Hover | Verde Esmeralda Oscuro | `#059669` | `text-emerald-600` |
| Bordes | Gris Claro | `#D4D4D4` | `border-neutral-300` |

### Antes vs Después

**Tema Anterior (Oscuro):**
- Fondo: `#0a0a0a` (Negro)
- Texto: `#f5f5f5` (Blanco)
- Componentes: `bg-neutral-900`, `bg-neutral-800`

**Tema Nuevo (Claro):**
- Fondo: `#FFFFFF` (Blanco)
- Fondo Decorativo: `#DDDFE0` (Gris Claro)
- Texto: `#262626` - `#737373` (Escalas de Gris)
- Componentes: `bg-white`, `bg-neutral-100`

---

## 📝 Tipografía

### Fuente Principal: Poppins

Se implementó la fuente **Poppins** como fuente principal del proyecto, importada localmente desde `public/fonts/`.

#### Pesos Disponibles

| Peso | Valor | Uso Recomendado | Clase Tailwind |
|------|-------|-----------------|----------------|
| Light | 300 | Subtítulos, descripciones largas | `font-light` |
| Regular | 400 | Texto de cuerpo | `font-normal` |
| Medium | 500 | Énfasis suave | `font-medium` |
| SemiBold | 600 | Subtítulos importantes | `font-semibold` |
| Bold | 700 | Títulos, CTAs | `font-bold` |

#### Implementación

```css
/* src/styles/base/global.css */
@font-face {
  font-family: 'Poppins';
  src: url('/fonts/Poppins-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

/* Configuración Tailwind */
@theme {
  --font-family-sans: 'Poppins', system-ui, -apple-system, sans-serif;
}
```

---

## 🔧 Componentes Modificados

### 1. Header (`src/components/Header.astro`)

#### Cambios Implementados

**Contenedor:**
- Padding: `px-4 py-5 md:py-6` (alineado con el fondo)
- Espaciado horizontal alineado con `inset-x-4` del fondo

**Logo:**
- Tamaño: `h-9 w-9` (aumentado desde `h-8 w-8`)
- Icono: `22x22px` (aumentado desde `20x20`)
- Texto: `font-bold text-lg text-neutral-800`

**Navegación Desktop:**
```astro
<a class="text-neutral-700 hover:text-emerald-600 font-medium transition-colors">
  Conócenos
</a>
```

**Navegación Móvil:**
- Mismos estilos que desktop para consistencia
- Color: `text-neutral-700 hover:text-emerald-600`

#### Antes vs Después

| Elemento | Antes | Después |
|----------|-------|---------|
| Enlaces | `border-b-2 border-b-transparent hover:border-b-emerald-500` | `text-neutral-700 hover:text-emerald-600` |
| Espaciado | `gap-4` | `gap-6` |
| Logo texto | `font-semibold` | `font-bold text-lg text-neutral-800` |

---

### 2. LanguageToggle (`src/components/LanguageToggle.astro`)

#### Botón Principal

**Antes:**
```astro
class="bg-black/80 border border-neutral-700 hover:bg-neutral-700/50"
```

**Después:**
```astro
class="bg-white/80 border border-neutral-300 hover:bg-white hover:border-neutral-400 transition-all shadow-sm"
```

#### Iconos y Texto

- Iconos: `text-neutral-600` (desde `text-neutral-400`)
- Texto: `text-neutral-700 font-semibold` (desde `text-neutral-300`)

#### Menú Desplegable

**Antes:**
```astro
class="bg-neutral-900/95 backdrop-blur-sm border border-neutral-700"
```

**Después:**
```astro
class="bg-white border border-neutral-200 rounded-lg shadow-lg"
```

#### Badges de Idioma

```astro
<!-- Antes -->
class="bg-neutral-700"

<!-- Después -->
class="bg-emerald-100 text-emerald-700 font-semibold"
```

---

### 3. Search (`src/components/shared/Search.astro`)

#### Input de Búsqueda

**Antes:**
```astro
class="bg-neutral-800/80 border border-neutral-700 placeholder:text-neutral-400"
```

**Después:**
```astro
class="bg-white/80 border border-neutral-300 text-neutral-700 placeholder:text-neutral-500
       focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all shadow-sm"
```

#### Indicador de Atajo "/"

**Antes:**
```astro
<span class="text-neutral-400">/</span>
```

**Después:**
```astro
<span class="text-neutral-400 bg-neutral-100 px-2 py-0.5 rounded border border-neutral-300 font-medium">
  /
</span>
```
- Ahora parece un botón de teclado real

#### Resultados de Búsqueda

**Contenedor:**
- Antes: `bg-neutral-900/95 backdrop-blur-sm border-neutral-700 shadow-2xl`
- Después: `bg-white border-neutral-200 shadow-lg`

**Items de Resultado:**
```javascript
// Antes
class="hover:bg-neutral-800/60 text-neutral-200"

// Después
class="hover:bg-neutral-100 text-neutral-800 font-semibold"
```

**Título de Resultados:**
```astro
class="text-xs font-medium text-neutral-500 uppercase tracking-wide"
```

---

### 4. Layout Principal (`src/Layouts/MainLayout.astro`)

#### Fondo Decorativo

```astro
<!-- Elemento de fondo gris claro -->
<div class="absolute z-[-1] bg-[#dddfe0] inset-x-4 h-3/5 rounded-2xl"></div>
```

**Características:**
- Color: `#DDDFE0` (gris claro)
- Espaciado: `inset-x-4` (1rem de margen a cada lado)
- Altura: `h-3/5` (60% de la altura)
- Bordes redondeados: `rounded-2xl`
- Z-index: `-1` (detrás del contenido)

#### Main Container

**Antes:**
```astro
<main class="max-w-7xl mx-auto">
```

**Después:**
```astro
<main class="w-full">
```

**Razón del cambio:** Permite que cada componente hijo controle su propio ancho máximo, ofreciendo más flexibilidad para secciones de ancho completo.

---

## 📐 Guía de Uso

### Implementar el nuevo diseño en componentes nuevos

#### 1. Botones

```astro
<!-- Botón Principal -->
<button class="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors shadow-sm">
  Acción Principal
</button>

<!-- Botón Secundario -->
<button class="bg-white border border-neutral-300 hover:border-neutral-400 text-neutral-700 font-medium px-4 py-2 rounded-lg transition-all shadow-sm">
  Acción Secundaria
</button>
```

#### 2. Cards

```astro
<div class="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
  <h3 class="text-lg font-bold text-neutral-800 mb-2">Título</h3>
  <p class="text-sm text-neutral-600">Descripción del contenido...</p>
</div>
```

#### 3. Inputs

```astro
<input
  type="text"
  class="w-full bg-white border border-neutral-300 rounded-lg px-4 py-2.5 text-neutral-700 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all shadow-sm"
  placeholder="Ingresa texto..."
/>
```

#### 4. Texto y Tipografía

```astro
<!-- Título Principal -->
<h1 class="text-3xl md:text-4xl font-bold text-neutral-800">
  Título Principal
</h1>

<!-- Subtítulo -->
<h2 class="text-xl md:text-2xl font-semibold text-neutral-700">
  Subtítulo
</h2>

<!-- Párrafo -->
<p class="text-base text-neutral-600 leading-relaxed">
  Texto de cuerpo...
</p>

<!-- Texto secundario -->
<span class="text-sm text-neutral-500">
  Información adicional
</span>
```

#### 5. Enlaces

```astro
<!-- Enlace en texto -->
<a href="#" class="text-emerald-600 hover:text-emerald-700 font-medium transition-colors">
  Ver más
</a>

<!-- Enlace de navegación -->
<a href="#" class="text-neutral-700 hover:text-emerald-600 font-medium transition-colors">
  Inicio
</a>
```

---

## 🎯 Principios de Diseño

### 1. Consistencia
- Usar siempre la misma paleta de colores
- Mantener los mismos pesos de fuente para elementos similares
- Aplicar transiciones suaves en todos los elementos interactivos

### 2. Jerarquía Visual
- Títulos: `font-bold text-neutral-800`
- Subtítulos: `font-semibold text-neutral-700`
- Cuerpo: `font-medium text-neutral-600`
- Texto secundario: `font-normal text-neutral-500`

### 3. Espaciado
- Contenedores principales: `px-4 md:px-6`
- Elementos internos: `gap-3` o `gap-4`
- Padding de componentes: `p-4` o `p-6`

### 4. Bordes y Sombras
- Bordes sutiles: `border border-neutral-200` o `border-neutral-300`
- Sombras suaves: `shadow-sm` para elevación leve
- Sombras medias: `shadow-lg` para dropdowns y modales

### 5. Estados Interactivos
- Hover: Cambio de color + `transition-colors` o `transition-all`
- Focus: Ring verde esmeralda `focus:ring-2 focus:ring-emerald-500/50`
- Active: Color más intenso del acento

---

## 📦 Archivos Modificados

### Componentes
- ✅ `src/components/Header.astro`
- ✅ `src/components/LanguageToggle.astro`
- ✅ `src/components/shared/Search.astro`

### Layouts
- ✅ `src/Layouts/MainLayout.astro`

### Estilos
- ✅ `src/styles/base/global.css`

### Fuentes
- ✅ `public/fonts/Poppins-Light.woff2`
- ✅ `public/fonts/Poppins-Regular.woff2`
- ✅ `public/fonts/Poppins-Medium.woff2`
- ✅ `public/fonts/Poppins-SemiBold.woff2`
- ✅ `public/fonts/Poppins-Bold.woff2`

---

## 🔄 Próximos Pasos

### Componentes Pendientes
- [ ] Footer
- [ ] Cards de herramientas
- [ ] Modales
- [ ] Formularios
- [ ] Badges y tags
- [ ] Navegación de categorías

### Mejoras Futuras
- [ ] Modo oscuro (toggle)
- [ ] Animaciones de entrada
- [ ] Mejoras de accesibilidad
- [ ] Optimización de rendimiento

---

## 📸 Referencia Visual

El rediseño está basado en diseños modernos y limpios similares a:
- Interfaces SaaS modernas
- Paletas de colores neutros con acentos vibrantes
- Tipografía bold para títulos
- Espaciado generoso
- Bordes y sombras sutiles

---

## 🤝 Contribución

Al añadir nuevos componentes, asegúrate de:
1. Seguir la paleta de colores establecida
2. Usar la fuente Poppins con los pesos apropiados
3. Mantener la consistencia en espaciados
4. Aplicar transiciones suaves en elementos interactivos
5. Usar clases de Tailwind en lugar de CSS custom cuando sea posible

---

**Última actualización:** 2025-10-29
**Versión:** 1.0.0
**Branch:** `development/re-design`
